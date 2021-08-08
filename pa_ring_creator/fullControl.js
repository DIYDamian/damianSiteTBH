//Bullet Count Slider//
var bcSlider = document.getElementById("bulletCount");
var bcDisplay = document.getElementById("bcOutput");
bcDisplay.innerHTML = bcSlider.value;

bcSlider.oninput = function() {
	bcDisplay.innerHTML = this.value;
}

//Decimal Places Slider//
var dpSlider = document.getElementById("decimalPlaces");
var dpDisplay = document.getElementById("dpOutput");
dpDisplay.innerHTML = '3 (1.000)';

var dpAmnts = new Array();
dpAmnts[0] = '0 (1)'
dpAmnts[1] = '1 (1.0)'
dpAmnts[2] = '2 (1.00)'
dpAmnts[3] = '3 (1.000)'

dpSlider.oninput = function() {
	dpDisplay.innerHTML = dpAmnts[this.value];
}

var btn = document.getElementById("generate");
var tbl = document.getElementById("bullets");
var mvInput = document.getElementById("bulletDist");
var roInput = document.getElementById("rotationOffset");

btn.onclick = function() {
    let bCount = bcSlider.value;
	let mAmnt = mvInput.value.trim();
	let rAmnt = roInput.value.trim();
	let dPlaces = dpSlider.value;
	if (!(rAmnt)) {
		rAmnt = 0;
	}
	for (var i = 1;i<tbl.rows.length;){
		tbl.deleteRow(i)
	}
	if (bCount && mAmnt && dPlaces) {
		for (let i = 0; i < bCount; i++) {
			var dir = (((Math.PI*2)/bCount) * i);
			var dirdeg = ((360/bCount) * i);
			
			var row = tbl.insertRow();
			
			var numCell = row.insertCell();
			numCell.innerHTML = i+1;
			
			var xCell = row.insertCell();
			var xCellVal = Math.sin(dir)*mAmnt
			xCell.innerHTML = xCellVal.toFixed(dPlaces);
			
			var yCell = row.insertCell();
			var yCellVal = Math.cos(dir)*mAmnt
			yCell.innerHTML = yCellVal.toFixed(dPlaces);
			
			var rCell = row.insertCell();
			var rCellVal = (dirdeg+rAmnt);
			rCell.innerHTML = rCellVal.toFixed(dPlaces);
		}
		return
	} else {
		var row = tbl.insertRow();
		var cell = row.insertCell();
		cell.colSpan = 4;
		cell.innerHTML = 'Some information is missing.'
		return
	}
}
