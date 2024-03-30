const express = require('express');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const Canvg = require('canvg');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/download', async (req, res) => {
  const svgPath = path.join(__dirname, 'public', 'image.svg');
  const pngPath = path.join(__dirname, 'public', 'image.png');

  // SVGデータを読み込む
  const svgData = fs.readFileSync(svgPath, 'utf-8');

  // SVGをCanvasに変換
  const canvas = createCanvas(1500, 5000);
  const context = canvas.getContext('2d');
  const v = Canvg.fromString(context, svgData, { ignoreClear: true });
  await v.render();

  // CanvasをPNGに変換
  const buffer = await canvas.toBuffer();
  fs.writeFileSync(pngPath, buffer);

  // PNGファイルをダウンロード
  res.download(pngPath, 'image.png', (err) => {
    if (err) {
      console.error('Error downloading PNG:', err);
      res.status(500).send('Internal Server Error');
    } else {
      // ダウンロード後にPNGファイルを削除
      fs.unlinkSync(pngPath);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
