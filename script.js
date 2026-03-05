let text="I want to say something...";
let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);
i++;

setTimeout(typing,60);

}

}

typing();


document.getElementById("enterBtn").onclick=function(){

document.getElementById("intro").classList.add("hidden");
document.getElementById("apology").classList.remove("hidden");

}



function showPhotos(){

document.getElementById("apology").classList.add("hidden");
document.getElementById("photos").classList.remove("hidden");

}



function showFinal(){

document.getElementById("photos").classList.add("hidden");
document.getElementById("final").classList.remove("hidden");

}



function openImg(img){

img.style.width="100%";

}



let angry=document.getElementById("angry");

angry.addEventListener("mouseover",function(){

let x=Math.random()*window.innerWidth;

let y=Math.random()*window.innerHeight;

angry.style.position="absolute";
angry.style.left=x+"px";
angry.style.top=y+"px";

});



document.getElementById("forgive").onclick=function(){

document.getElementById("loveMsg").innerHTML="I love you so much ❤️";

};




/* glitter animation */

const canvas=document.getElementById("glitter");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
d:Math.random()*1

})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

ctx.beginPath();

for(let i=0;i<particles.length;i++){

let p=particles[i];

ctx.moveTo(p.x,p.y);

ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);

}

ctx.fill();

update();

}

function update(){

for(let i=0;i<particles.length;i++){

let p=particles[i];

p.y+=p.d;

if(p.y>canvas.height){

p.y=0;

}

}

}

setInterval(draw,33);