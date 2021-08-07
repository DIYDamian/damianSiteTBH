let speed = 20;
let grav = (Math.random() * Math.PI * 2.0);
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;
var dir = (Math.random() * Math.PI * 2.0);
var dragging = false;
var allKicks =  new Array();

var temp = 1;
for(temp=1; temp<=20; temp++){
	const kick = new Audio('kick.wav');
	kick.volume = 0.1;
	allKicks.push(kick);
}
let dvd = {
    x: 200,
    y: 300,
    xspeed: Math.sin(dir)*5,
    yspeed: Math.cos(dir)*5,
    img: new Image()
};

let dragOffset = {
	x: 0,
	y: 0,
}
let mousePos = {
	x: 0,
	y: 0,
	vx: 0,
	vy: 0,
}

const clamp = (num, min, max) => {
	Math.min(Math.max(num, min), max);
}

(function main(){
    canvas = document.getElementById("thereHeGo");
    ctx = canvas.getContext("2d");
    dvd.img.src = 'IMG_0561.PNG';

    //Draw the "tv screen"
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
	
	dvd.x = (canvas.width-(dvd.img.width*scale*2))*0.5;
	dvd.y = (canvas.height-(dvd.img.height*scale*2))*0.5;

    pickColor();
    update();
})();

function update() {
    setTimeout(() => {
        //Draw the canvas background
        ctx.clearRect (0, 0, canvas.width, canvas.height);
        //Draw DVD Logo and his background
        ctx.fillStyle = logoColor;
        ctx.fillRect(dvd.x-2, dvd.y-2, (dvd.img.width*scale)+4, (dvd.img.height*scale)+4);
        ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
        //Move the logo
		if(!dragging){
			dvd.x+=dvd.xspeed;
			dvd.y+=dvd.yspeed;
			dvd.xspeed-=Math.sin(grav)*0.1;
			dvd.yspeed-=Math.cos(grav)*0.1;
			scale = ((scale*5) + 0.17) / 6;
		}else{
			scale = ((scale*5) + 0.24) / 6;
			var offsetAmnt = 1+((scale-.17)*(1/.24)*((.48/.17)-1));
			
			dvd.xspeed=0;
			dvd.yspeed=0;
			dvd.x = mousePos.x - (dragOffset.x*offsetAmnt) + ((Math.random() * 6) - 3);
			dvd.y = mousePos.y - (dragOffset.y*offsetAmnt) + ((Math.random() * 6) - 3);
		}
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}
var kickNum = 1;
//Check for border collision
function checkHitBox(){
    if((dvd.x+dvd.img.width*scale >= canvas.width && dvd.xspeed > 0) || (dvd.x <= 0 && dvd.xspeed < 0)){
		var fricMult = Math.min((0 - ( (Math.atan(1/Math.abs(4*dvd.xspeed))) / (0.5 * Math.PI) ) ) + 1, 1);
        dvd.xspeed *= -.5;
        dvd.yspeed *= fricMult;
		let vel = Math.abs(dvd.xspeed);
		if(vel >=.1){
			pickColor();
			//var kick = allKicks[kickNum];
			//kick.play();
			//kick.volume = 0.1;
			//kickNum++;
			//if(kickNum>=19){
			//	kickNum=1;
			//}
		}
    }
        
    if((dvd.y+dvd.img.height*scale >= canvas.height && dvd.yspeed > 0) || (dvd.y <= 0 && dvd.yspeed < 0)){
		var fricMult = Math.min((0 - ( (Math.atan(1/Math.abs(4*dvd.yspeed))) / (0.5 * Math.PI) ) ) + 1, 1);
        dvd.yspeed *= -.5;
        dvd.xspeed *= fricMult;
		let vel = Math.abs(dvd.yspeed);
		if(vel >=.1){
			pickColor();
			//var kick = allKicks[kickNum];
			//kick.volume = fricMult/2;
			//kick.play();
			//kickNum++;
			//if(kickNum>=19){
			//	kickNum=1;
			//}
		}
    }    
}

setInterval(function(){
	grav = (Math.random() * Math.PI * 2.0);
}, 5000)

var mouseIsDown = false;

canvas.onmousedown = function(e){
	mouseIsDown = true;
	dragOffset.x = e.x - dvd.x;
	dragOffset.y = e.y - dvd.y;
	mousePos.vx = 0;
	mousePos.vy = 0;
	if ((e.x >= dvd.x && e.x <= dvd.x+dvd.img.width*scale) && (e.y >= dvd.y && e.y <= dvd.y+dvd.img.height*scale)){
		dragging = true;
	}
	
	console.log("Mouse Down")
}

document.body.onmousemove = function(e){
	mousePos.x = e.x;
	mousePos.y = e.y;
	mousePos.vx = e.movementX;
	mousePos.vy = e.movementY;
}

document.body.onmouseup = function(e){
	mouseIsDown = false;
	if(dragging){
	console.log("Mouse Up")
	dragging = false;
	dvd.xspeed = mousePos.vx;
	dvd.yspeed = mousePos.vy;
}}

document.body.onmouseout = function(e){
	mouseIsDown = false;
	if(dragging){
	console.log("Mouse Up")
	dragging = false;
	dvd.xspeed = mousePos.vx;
	dvd.yspeed = mousePos.vy;
}}

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}