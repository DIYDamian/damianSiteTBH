let speed = 20;
let grav = (Math.random() * Math.PI * 2.0);
let scale = 0.17; // Image scale (I work on 1080p monitor)
let canvas;
let ctx;
let logoColor;
var dir = (Math.random() * Math.PI * 2.0);
let dvd = {
    x: 200,
    y: 300,
    xspeed: Math.sin(dir)*5,
    yspeed: Math.cos(dir)*5,
    img: new Image()
};

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
        dvd.x+=dvd.xspeed;
        dvd.y+=dvd.yspeed;
		dvd.xspeed-=Math.sin(grav)*0.1;
		dvd.yspeed-=Math.cos(grav)*0.1;
        //Check for collision 
        checkHitBox();
        update();   
    }, speed)
}

//Check for border collision
function checkHitBox(){
    if((dvd.x+dvd.img.width*scale >= canvas.width && dvd.xspeed > 0) || (dvd.x <= 0 && dvd.xspeed < 0)){
        dvd.xspeed *= -.31;
        dvd.yspeed *= .31;
		let vel = Math.abs(dvd.xspeed);
		console.log("X - " + vel);
		if(vel >=.1){
			pickColor();
		}
    }
        
    if((dvd.y+dvd.img.height*scale >= canvas.height && dvd.yspeed > 0) || (dvd.y <= 0 && dvd.yspeed < 0)){
        dvd.yspeed *= -.31;
        dvd.xspeed *= .31;
		let vel = Math.abs(dvd.yspeed);
		console.log("Y - " + vel);
		if(vel >=.1){
			pickColor();
		}
    }    
}

setInterval(function(){
	grav = (Math.random() * Math.PI * 2.0);
}, 5000)

//Pick a random color in RGB format
function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    logoColor = 'rgb('+r+','+g+', '+b+')';
}