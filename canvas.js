const canvas = document.querySelector("#canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.background = "purple";
const context = canvas.getContext("2d");
function createLine(obj,color){
    context.beginPath()
    context.strokeStyle=color
    context.moveTo(obj.sX,obj.sY)
    context.lineTo(obj.eX,obj.eY)
    context.stroke()
  context.closePath()
}
function createLines(objArr){
    context.beginPath()
    context.strokeStyle=objArr[0].color
    context.moveTo(objArr[0].sX,objArr[0].sY)
    context.lineTo(objArr[0].eX,objArr[0].eY)
    context.stroke()
    for (let index = 1; index < objArr.length; index++) {
    if(objArr[index-1].color!==objArr[index].color)context.beginPath()
        context.strokeStyle=objArr[index].color
        context.lineTo(objArr[index].sX,objArr[index].sY)
        context.lineTo(objArr[index].eX,objArr[index].eY)
        context.stroke()        
    }
  context.closePath()
}

function createLinesFill(objArr){
    context.beginPath()
    context.fillStyle=objArr[0].color
    context.moveTo(objArr[0].sX,objArr[0].sY)
    context.lineTo(objArr[0].eX,objArr[0].eY)
    for (let index = 1; index < objArr.length; index++) {
        context.lineTo(objArr[index].sX,objArr[index].sY)
        context.lineTo(objArr[index].eX,objArr[index].eY)
      }
      context.fill()
}

function createRect(obj, color) {
    context.beginPath()
 context.fillStyle = color;
  context.fillRect(obj.x, obj.y(), obj.width, obj.height);
  return context.closePath()
}
function createArc(obj, color) {
 context.beginPath();
 context.fillStyle = color;
 context.arc(obj.x, obj.y, obj.r, obj.sEng, obj.eEng * Math.PI);
  context.fill();
  return context.closePath()
}
function deleteRect(obj) {
 return context.clearRect(obj.x, obj.y(), obj.width, obj.height);
}
let box = {
 width: 70,
 height: 70,
 y: function () {
  return 0;
 },
 x: 50,
};
let circle = {
 x: 0,
 y: 0,
 r: 50,
 sEng: 0,
 eEng: 2,
};
// // 1.
// // create two 50x50 squares anyware in the canvas
// let boxCopy={...box}
// createRect(boxCopy, "black");
// boxCopy.x = 100;
// boxCopy.y = function () {
//  return 100;
// };
// createRect(boxCopy, "black");

// // 2.
// // create two 70x70 squares anyware in the canvas
// boxCopy={...box}
// createRect(boxCopy, "red");
// boxCopy.x += 100;
// createRect(boxCopy, "red");

// // 3.
// // create a blue 30x30 circle in the canvas
// let circleCopy={...circle}
// circleCopy.r = 30;
// createArc(circleCopy, "blue");

// // 4.
// // create a red 50x50 circle in the canvas
//  circleCopy={...circle}
// circleCopy.r = 50;
// createArc(circleCopy, "red");

// // 5.
// // create 2 green 50x50 circles anywere in the canvas
// circleCopy={...circle}
// circleCopy.r = 50;
// createArc(circleCopy, "green");
// circleCopy.x=circleCopy.x+circleCopy.r*2
// createArc(circleCopy,"green")

// // 6.
// // create three boxes in diffrent places that would move 20 steps every .5 secondes
// const first={...box}
// const second={...box}
// const third={...box}
// function threeBoxesMoveFowroads(){
//     deleteRect(first)
//     first.x+=20
//     first.y=function(){return 150}
//     createRect(first,"red")
//     deleteRect(second)
//     second.x+=20
//     second.y=function(){return 300}
//     createRect(second,"green")
//     deleteRect(third)
//     third.x+=20
//     third.y=function(){return 450}
//     createRect(third,"blue")

// }
// setInterval(threeBoxesMoveFowroads,500)

// // 7.
// // create a floor object and repesent it as the canvas floor
//     const floor={
//         width:canvas.width,
//         height:50,
//         x:0,
//             y:function(){
//             return canvas.height-this.height
//         }
//     }
//     createRect(floor,"yellow")

// // 8.
// // create a player object and display it over the previous question floor object
// const player={
//     width:canvas.width/10,
//     height:100,
//     x:0,
//         y:function(){
//         return floor.y()-this.height
//     }
// }
// createRect(player,"red")
// // // 9.
// // jumpng player
// let jumpY=0
// let up=true
// let jumping=false

// function playerJump(){
//     const y=floor.y()-player.height
//     jumping=true
//     deleteRect(player)
//     up?jumpY+=1:jumpY-=1
//     player.x+=1
//     player.y=function(){return y-jumpY}

//     createRect(player,"red")
//     if(jumpY===10)up=false
//     if(jumpY===0){jumping=false ;return up=true}
//     requestAnimationFrame(playerJump)
// }

// window.addEventListener('keyup',(e)=>{
//     if(jumping||e.key!="ArrowUp")return

//     playerJump()
// })

// // 10.
// // create 10 squares in random positions
// boxCopy={...box}
// for (let index = 0; index < 10; index++) {
// boxCopy.x = Math.random() * (canvas.width-boxCopy.width);
//  let y = Math.random() * (canvas.height-boxCopy.height);
//  boxCopy.y = function () {
//   return y;
//  };
//  createRect(boxCopy, "white");
// }

// // 11.
// // create 10 circles in random positions and sizes
// circleCopy={...circle}
// for (let index = 0; index < 10; index++) {
// circleCopy.r=Math.random() * 40
// circleCopy.y = Math.random() * canvas.height-circleCopy.r;
// circleCopy.x =Math.random() * canvas.width-circleCopy.r;
// if(circleCopy.y<circleCopy.r)circleCopy.y+=circleCopy.r*2
// if(circleCopy.x<circleCopy.r)circleCopy.x+=circleCopy.r*2
// createArc(circleCopy,"red")
// }

// // 12.
// // create 10 squares in random positions and colors
// boxCopy={...box}
// for (let index = 0; index < 10; index++) {
//  const colors = ["red", "purple", "teal", "orange", "blue"];
//  let y = Math.random() * (canvas.height-boxCopy.width);
//  boxCopy.x = Math.random() * (canvas.width- boxCopy.width) ;
//  boxCopy.y = function () {
//   return y;
//  };
//  createRect(boxCopy, colors[Math.floor(Math.random() * 5)]);
// }

// // 13.
// // draw a smily face using arcs
// circleCopy={...circle}
// circleCopy.y=200
// circleCopy.r=100
// createArc(circleCopy,"white")
// circleCopy.r=20
// circleCopy.x-=50
// createArc(circleCopy,"black")
// circleCopy.r=20
// circleCopy.x+=100
// createArc(circleCopy,"black")
// circleCopy.r=20
// circleCopy.x-=50
// circleCopy.y+=circleCopy.y/4
// circleCopy.eEng=1
// createArc(circleCopy,"black")

// // create a rectangle with diagonal lines
// createLine({sX:0,sY:0,eX:200,eY:100,color:"blue"})
// createLine({sX:200,sY:0,eX:0,eY:100,color:"blue"})
// createLine({sX:0,sY:0,eX:200,eY:0,color:"red"},)
// createLine({sX:200,sY:0,eX:200,eY:100,color:"red"},"")
// createLine({sX:200,sY:100,eX:0,eY:100,color:"red"},
// createLine({sX:0,sY:100,eX:0,eY:0,color:"red"},
