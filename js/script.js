'use strict'

let InColor = document.getElementById('incolor');
let ColorButton = document.getElementById('colorbutton');
let ColorReset = document.getElementById('color-reset');
let RectElement = document.getElementById('rect-edit')

//背景変更
ColorButton.addEventListener('click',function(){
    const value = InColor.value;
    RectElement.setAttribute("fill", value);
});

//背景リセット
ColorReset.addEventListener('click',function(){
    RectElement.setAttribute("fill", '#205499');
})

let MainContents = document.getElementById('main-contents');
let FontColor = document.getElementById('fontcolor');
let FontButton = document.getElementById('fontbutton');
let FontReset = document.getElementById('font-reset');

//文字色変更
FontButton.addEventListener('click',function(){
    const FontValue = FontColor.value;
    MainContents.setAttribute("fill", FontValue);
})

//文字色リセット
FontReset.addEventListener('click',function(){
    MainContents.setAttribute ("fill",'#fff');
})

let EditKu = document.getElementById('edit-ku');
let EditTyo = document.getElementById('edit-tyome');
let EditBan = document.getElementById('edit-ban')
let EditRoma1= document.getElementById('edit-roma1');
let EditRoma2 = document.getElementById('edit-roma2');
let EditRoma3 = document.getElementById('edit-roma3');

let EditOk = document.getElementById('edit-ok')
//住所変更
EditOk.addEventListener('click',function(){

var TspanKu = document.getElementById("tspan-ku");
var TspanTyome = document.getElementById("tspan-tyome");
var TspanBanti = document.getElementById("tspan-banti");
var TspanRoma1 = document.getElementById("tspan-roma1");
var TspanRoma2 = document.getElementById("tspan-roma2");
var TspanRoma3 = document.getElementById("tspan-roma3");

TspanKu.textContent = EditKu.value;
TspanTyome.textContent = EditTyo.value;
TspanBanti.textContent = EditBan.value;
TspanRoma1.textContent = EditRoma1.value;
TspanRoma2.textContent = EditRoma2.value;
TspanRoma3.textContent = EditRoma3.value;


/*-ku.textContent = EditKu.value;
tyome.textContent = EditTyo.value;
banti.textContent = EditBan.value;
roma.textContent = EditRoma.value;*/

})

let EditReset = document.getElementById('edit-reset');
EditReset.addEventListener('click',function(){
    var TspanKu = document.getElementById("tspan-ku");
    var TspanTyome = document.getElementById("tspan-tyome");
    var TspanBanti = document.getElementById("tspan-banti");
    var TspanRoma1 = document.getElementById("tspan-roma1");
    var TspanRoma2 = document.getElementById("tspan-roma2");
    var TspanRoma3 = document.getElementById("tspan-roma3");


    TspanKu.textContent = '港北区';
    TspanTyome.textContent = '新横浜三丁目';
    TspanBanti.textContent = '10';
    TspanRoma1.textContent = 'sin-yokohama';
    TspanRoma2.textContent = 'santyome';
    TspanRoma3.textContent = 'ju';


})


//PNG変換
let DownloadButton = document.getElementById('download-button');

DownloadButton.addEventListener('click', function () {

    var svg = document.querySelector("svg");
    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement("canvas");
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;
    var canvasWidth = 1500; // 任意の幅
    var canvasHeight = 5000; // 任意の高さ
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    var ctx = canvas.getContext("2d");
    var image = new Image;
    image.onload = function () {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/png");
        a.setAttribute("download", "image.png");
        a.dispatchEvent(new MouseEvent("click"));
    }
    image.src = "data:image/svg+xml;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(svgData)));

})
