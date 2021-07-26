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