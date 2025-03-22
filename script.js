function sayHello() {
  var userName = prompt("你好呀~欢迎参观我的网页，请问怎么称呼？");
  alert('嗨~， '+ userName + ' ,让我们开启一场逃离游戏吧~');
}
sayHello();

var gr = document.getElementById('gameRoom')
var btnS = document.getElementById('buttonStart')
btnS.onclick = function(){
    gr.style.display = "block";
}
var dv=document.getElementById('dividerMove')
var sc= document.getElementById('sofaScreen')
var btnD =document.getElementById('roomDivider')
var ws1=document .getElementById('wordScreen1')
var ws2=document .getElementById('wordScreen2')

btnD.onclick = function (){
   dv.style.display = "block";
   ws1.style.display="block";
}
var sofa = document.getElementById('sofa')
sofa.onclick = function () {
    sc.style.display = "block";
    ws2.style.display = "block"

}

var p1 =document.getElementById('p1')
var sf1=document.getElementById('sofaLeave1')
var sfp=document.getElementById('sofaPaper')

function updateDialogContent() {
  p1.innerText = '物品的位置好像很靠里面……你的手够不到。';
  sf1.innerText = '返回房间';
  sfp.innerText = '使用扫帚';


  sf1.onclick = function() {
    sc.style.display = "none";
    ws2.style.display = "none";
  };
}

function updateDialogContent1() {
  p1.innerText = '诶，掏出来一把钥匙！';
  sf1.innerText = '返回房间';
  sfp.innerText = '开门大吉';

  sf1.onclick = function() {
    alert("钥匙都有了，赶紧走吧φ(*￣0￣)");
};

}

var clickCount = 0;
sfp.onclick = function() {
  clickCount++;
  if (clickCount === 1) {
  updateDialogContent();

};

 if (clickCount === 2){
   alert("你还没有获得扫帚哦~");
 };
 if (clickCount === 3){
   alert("真的找不到吗？在周围的其他家具点点看？");
 };
if (clickCount === 5){
  alert(" 好吧好吧你赢了，别点了，给你扫帚");
  updateDialogContent1();
};
if (clickCount === 7){
    alert( "you win! 虽然这里本来应该有一个美好的胜利界面，不过……人生总是充满意外，就像代码总是藏着BUG……拜拜！")

  };
}

var win1=document . getElementById('win')
var flower = document.getElementById('flower')
flower.onclick = function(){
  var word = prompt ("花后面躲着一只小猫！和它打个招呼吧~");
  alert( word  + "……, 诶！它带着扫帚跑走了！");
}
var door = document.getElementById('door')

var carpetr= document.getElementById('carpet')
carpet.onclick = function(){
  alert(  "地毯下有一个小鱼干……");
  alert("！猫咪带走了小鱼干并且留下了什么……钥匙！");
  win1.style.display='block';
  alert("you win!居然如此请轻易吗？");
}

door.onclick = function() {
  clickCount++;
  if (clickCount >= 5) {
     alert("大……大力出奇迹……门坏了，you win!");
 } else {
     alert("门似乎锁着");
 }
}
