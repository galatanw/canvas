const canvas = document.querySelector("#canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.background = "black";
const context = canvas.getContext("2d");
function createRect(obj, color) {
 context.fillStyle = color;
 return context.fillRect(obj.x, obj.y(), obj.width, obj.height);
}
function createArc(obj, color) {
 context.beginPath();
 context.fillStyle = color;
 context.arc(obj.x, obj.y, obj.r, obj.sEng, obj.eEng * Math.PI);
 return context.fill();
}
function deleteRect(obj) {
 return context.clearRect(obj.x, obj.y(), obj.width, obj.height);
}
function deleteArc(obj) {}
const box = {
 width: 70,
 height: 70,
 y: function () {
  return 0;
 },
 x: 50,
};
const circle = {
 x: 100,
 y: 50,
 r: 50,
 sEng: 0,
 eEng: 2,
};
// 1.
// create two 50x50 squares anyware in the canvas
// createRect(box, "black");
// box.x = 100;
// box.y = function () {
//  return 100;
// };
// createRect(box, "black");

// 2.
// create two 70x70 squares anyware in the canvas
// createRect(box, "red");
// box.x = 100;
// createRect(box, "red");

// 3.
// create a blue 30x30 circle in the canvas
// circle.r = 30;
// createArc(circle, "blue");

// 4.
// create a red 50x50 circle in the canvas
// circle.r = 50;
// createArc(circle, "red");

// 5.
// create 2 green 50x50 circles anywere in the canvas
// circle.r = 50;
// createArc(circle, "green");
// circle.x=circle.x+circle.r*2
// createArc(circle,"green")

// 6.
// create three boxes in diffrent places that would move fowroad every 20 secondes
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

//     requestAnimationFrame(threeBoxesMoveFowroads)
// }
// threeBoxesMoveFowroads()

// 7.
// create a floor object and repesent it as the canvas floor
// const floor={
//     width:canvas.width,
//     height:200,
//     x:0,
//         y:function(){
//         return canvas.height-this.height
//     }
// }
// createRect(floor,"yellow")

// 8.
// create a player object and display it over the previous question floor object
// const player={
//     width:canvas.width/10,
//     height:100,
//     x:0,
//         y:function(){
//         return canvas.height-floor.height-this.height
//     }
// }
// createRect(player,"red")
// // 9.
// // jumpng player
// let jumpY=0
// let up=true
// let jumping=false
// function playerJump(){
//     jumping=true
//     const y=canvas.height-floor.height-player.height
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

// 10.
// create 10 squares in random positions
// for (let index = 0; index < 10; index++) {
//  const colors = ["red", "purple", "teal", "orange", "blue"];
//  let y = Math.floor(Math.random() * canvas.height);
//  let x = Math.floor(Math.random() * canvas.width) - box.width;
//  box.x = x;
//  box.y = function () {
//   return y;
//  };
//  if (y > canvas.height - box.height)
//   box.y = function () {
//    return y - box.height;
//   };
//  if (x > canvas.width - box.width) box.x = x - box.width;
//  createRect(box, "white");
// }

// 11.
// create 10 circles in random positions and sizes
// for (let index = 0; index < 10; index++) {
// circle.r=Math.floor(Math.random() * 100)
// circle.y = Math.floor(Math.random() * canvas.height);
// circle.x =Math.floor(Math.random() * canvas.width);
// if(circle.y>canvas.height-circle.r)circle.y=canvas.height-circle.r
// else if(circle.y<circle.r)circle.y+=circle.r*2
// if(circle.x>canvas.width-circle.r)circle.x=canvas.width-circle.r
// else if(circle.x<circle.r)circle.x+=circle.r*2
// createArc(circle,"red")
// }

// 12.
// create 10 squares in random positions and colors
// for (let index = 0; index < 10; index++) {
//  const colors = ["red", "purple", "teal", "orange", "blue"];
//  let y = Math.floor(Math.random() * canvas.height);
//  let x = Math.floor(Math.random() * canvas.width) - box.width;
//  box.x = x;
//  box.y = function () {
//   return y;
//  };

//  if (y > canvas.height - box.height)
//   box.y = function () {
//    return y - box.height;
//   };

//  if (x > canvas.width - box.width) box.x = x - box.width;
//  createRect(box, colors[Math.floor(Math.random() * 5)]);
// }

// 13.
// // draw a smily face using arcs
// circle.r=100
// createArc(circle,"white")
// circle.r=20
// circle.x-=50
// createArc(circle,"black")
// circle.r=20
// circle.x+=100
// createArc(circle,"black")
// circle.r=20
// circle.x-=50
// circle.y+=circle.y
// circle.eEng=1
// createArc(circle,"black")


