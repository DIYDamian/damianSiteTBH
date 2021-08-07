var tTextA = [
	"you have arrived " ,
	"hello " ,
	"hi " ,
	"hello " ,
	"hi " ,
	"wassup " ,
	"yo " ,
	"greetings " 
];
var tTextB = [
	"smelly" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"tbh" ,
	"dumbass" ,
	"twatnugget" ,
	"bitch" ,
	"doofus" ,
	"thb" ,
	"dipshit" 
];
var i = Math.floor(tTextA.length * Math.random());
var j = Math.floor(tTextB.length * Math.random());

document.getElementById("maintitle").innerHTML = tTextA[i] + tTextB[j];

function randomRgbaString (alpha) {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  let a = alpha
  return `rgba(${r},${g},${b},${a})`
}

var i = 0;

setInterval(function(){
	i++;
	var myBox  = document.getElementById("fullShit");
	myBox.style.outlineColor = randomRgbaString(.9);
}, 42);