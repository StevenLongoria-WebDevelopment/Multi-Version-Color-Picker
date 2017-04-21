//set up the gradient generator after clicking the gradient button
function gradientMode(){
	//changing the inner html of the headings
	document.getElementById("title").innerHTML = "Javascript Gradient Generator";
	document.getElementById("info").innerHTML = "Use the sliders to change the colors and direction of the gradient.  Add stops and change the gradient type using the selectors.  Change the programming language used by clicking on its logo.";
	document.getElementById("color").innerHTML = "background: linear-gradient(0deg, #ffffff, #000000)";
	
	//set the default gradient of the color box
	var box = document.getElementById("colorBox");
	box.style.background = "linear-gradient(0deg, #ffffff, #000000)";
	
	//grab the parent div
	var sliders = document.getElementById("colors");
	
	//change gradient button to solid button
	var gradient = document.getElementById("gradient");
	gradient.setAttribute("type", "hidden");
	var solid = document.getElementById("solid");
	solid.setAttribute("type", "button");
	
	//add new labels
	var directionLabel = document.getElementById("directionLabel");
	directionLabel.style.visibility = "visible";
	
	var redLabel2 = document.getElementById("redLabel2");
	redLabel2.style.visibility = "visible";
	
	var greenLabel2 = document.getElementById("greenLabel2");
	greenLabel2.style.visibility = "visible";
	
	var blueLabel2 = document.getElementById("blueLabel2");
	blueLabel2.style.visibility = "visible";
	
	var redLabel1 = document.getElementById("redLabel1");
	redLabel1.style.visibility = "visible";
	
	var greenLabel1 = document.getElementById("greenLabel1");
	greenLabel1.style.visibility = "visible";
	
	var blueLabel1 = document.getElementById("blueLabel1");
	blueLabel1.style.visibility = "visible";
	
	var redLabel = document.getElementById("redLabel");
	redLabel.style.visibility = "hidden";
	
	var greenLabel = document.getElementById("greenLabel");
	greenLabel.style.visibility = "hidden";
	
	var blueLabel = document.getElementById("blueLabel");
	blueLabel.style.visibility = "hidden";
	
	//add new sliders
	var red = document.getElementById("redSlider");
	var red1 = document.getElementById("redSlider1");
	var red2 = document.getElementById("redSlider2");
	var green = document.getElementById("greenSlider");
	var green1 = document.getElementById("greenSlider1");
	var green2 = document.getElementById("greenSlider2");
	var blue = document.getElementById("blueSlider");
	var blue1 = document.getElementById("blueSlider1");
	var blue2 = document.getElementById("blueSlider2");
	var directionSlider = document.getElementById("direction");
	
	directionSlider.setAttribute("type", "range");
	direction.value = 0;
	red.setAttribute("type", "hidden");
	red1.setAttribute("type", "range");
	red2.setAttribute("type", "range");
	green.setAttribute("type", "hidden");
	green1.setAttribute("type", "range");
	green2.setAttribute("type", "range");
	blue.setAttribute("type", "hidden");
	blue1.setAttribute("type", "range");
	blue2.setAttribute("type", "range");
	red2.value = 0;
	green2.value = 0;
	blue2.value = 0;
	red1.value = 255;
	green1.value = 255;
	blue1.value = 255;
	
	//add new primary buttons
	var pureRed = document.getElementById("red");
	pureRed.setAttribute("type", "hidden");
	
	var pureGreen = document.getElementById("green");
	pureGreen.setAttribute("type", "hidden");
	
	var pureBlue = document.getElementById("blue");
	pureBlue.setAttribute("type", "hidden");
	
	var pureRed2 = document.getElementById("red2");
	pureRed2.setAttribute("type", "button");
	
	var pureGreen2 = document.getElementById("green2");
	pureGreen2.setAttribute("type", "button");
	
	var pureBlue2 = document.getElementById("blue2");
	pureBlue2.setAttribute("type", "button");
	
	var pureRed1 = document.getElementById("red1");
	pureRed1.setAttribute("type", "button");
	
	var pureGreen1 = document.getElementById("green1");
	pureGreen1.setAttribute("type", "button");
	
	var pureBlue1 = document.getElementById("blue1");
	pureBlue1.setAttribute("type", "button");
	 
}

//reset the application to a color picker
function solidMode(){
	document.getElementById("title").innerHTML = "JavaScript Color Picker";
	document.getElementById("info").innerHTML = "Use the sliders to change the color of the box.  Change the programming language used by clicking on its logo.";
	document.getElementById("color").innerHTML = "#808080"
	var box = document.getElementById("colorBox");
	box.style.background = "#808080";
	
	//grab the parent div of the sliders
	var sliders = document.getElementById("color");
	
	//change the solid button to the gradient button
	var solid = document.getElementById("solid");
	solid.setAttribute("type", "hidden");
	var gradient = document.getElementById("gradient");
	gradient.setAttribute("type", "button");
	
	//edit the html of the solid mode inputs

	
	//remove the gradient mode elements
	//change buttons
	var pureRed2 = document.getElementById("red2");
	pureRed2.setAttribute("type", "hidden");
	
	var pureGreen2 = document.getElementById("green2");
	pureGreen2.setAttribute("type", "hidden");
	
	var pureBlue2 = document.getElementById("blue2");
	pureBlue2.setAttribute("type", "hidden");
	
	var pureRed1 = document.getElementById("red1");
	pureRed1.setAttribute("type", "hidden");
	
	var pureGreen1 = document.getElementById("green1");
	pureGreen1.setAttribute("type", "hidden");
	
	var pureBlue1 = document.getElementById("blue1");
	pureBlue1.setAttribute("type", "hidden");
	
	var pureRed = document.getElementById("red");
	pureRed.setAttribute("type", "button");
	
	var pureGreen = document.getElementById("green");
	pureGreen.setAttribute("type", "button");
	
	var pureBlue = document.getElementById("blue");
	pureBlue.setAttribute("type", "button");
	
	//change sliders
	var red = document.getElementById("redSlider");
	red.setAttribute("type", "range");
	red.value = "128";
	
	var green = document.getElementById("greenSlider");
	green.setAttribute("type", "range");
	green.value = "128";
	
	var blue = document.getElementById("blueSlider");
	blue.setAttribute("type", "range");
	blue.value = "128";
	
	var red1 = document.getElementById("redSlider1");
	red1.setAttribute("type", "hidden");
	
	var green1 = document.getElementById("greenSlider1");
	green1.setAttribute("type", "hidden");
	
	var blue1 = document.getElementById("blueSlider1");
	blue1.setAttribute("type", "hidden");
	
	var red2 = document.getElementById("redSlider2");
	red2.setAttribute("type", "hidden");
	
	var green2 = document.getElementById("greenSlider2");
	green2.setAttribute("type", "hidden");
	
	var blue2 = document.getElementById("blueSlider2");
	blue2.setAttribute("type", "hidden");
	
	var directionSlider = document.getElementById("direction");
	directionSlider.setAttribute("type", "hidden");
	
	//change labels
	var redLabel = document.getElementById("redLabel");
	redLabel.style.visibility = "visible";
	
	var greenLabel = document.getElementById("greenLabel");
	greenLabel.style.visibility = "visible";
	
	var blueLabel = document.getElementById("blueLabel");
	blueLabel.style.visibility = "visible";
	
	var redLabel1 = document.getElementById("redLabel1");
	redLabel1.style.visibility = "hidden";
	
	var greenLabel1 = document.getElementById("greenLabel1");
	greenLabel1.style.visibility = "hidden";
	
	var blueLabel1 = document.getElementById("blueLabel1");
	blueLabel1.style.visibility = "hidden";
	
	var redLabel2 = document.getElementById("redLabel2");
	redLabel2.style.visibility = "hidden";
	
	var greenLabel2 = document.getElementById("greenLabel2");
	greenLabel2.style.visibility = "hidden";
	
	var blueLabel2 = document.getElementById("blueLabel2");
	blueLabel2.style.visibility = "hidden";
	
	var direction = document.getElementById("directionLabel");
	direction.style.visibility = "hidden";
	
	var redLabel = document.getElementById("redLabel");
	redLabel1.innerHTML = "R";
	
	var greenLabel = document.getElementById("greenLabel");
	greenLabel.innerHTML = "G";
	
	var blueLabel = document.getElementById("blueLabel");
	blueLabel.innerHTML = "B";
}

//set color of box when a slider is moved
function setColor(){
	var redValue = document.getElementById("redSlider").value;
	var red = parseInt(redValue);
	var redHex = red.toString(16);
	if(redHex.length == 1){
		redHex = "0" + redHex;
	}
	
	var greenValue = document.getElementById("greenSlider").value;
	var green = parseInt(greenValue);
	var greenHex = green.toString(16);
	if(greenHex.length == 1){
		greenHex = "0" + greenHex;
	}
	
	var blueValue = document.getElementById("blueSlider").value;
	var blue = parseInt(blueValue);
	var blueHex = blue.toString(16);
	if(blueHex.length == 1){
		blueHex = "0" + blueHex;
	}
	
	var colorCode = "#" + redHex + greenHex + blueHex;
	var box = document.getElementById("colorBox");
	box.style.backgroundColor = colorCode;
	var color = document.getElementById("color");
	color.innerHTML = colorCode;
}

//set the color of the box to primary red
function primaryRed(){
	document.getElementById("redSlider").value = 255;
	document.getElementById("greenSlider").value = 0;
	document.getElementById("blueSlider").value = 0;
	var box = document.getElementById("colorBox");
	box.style.backgroundColor = "#ff0000";
	var color = document.getElementById("color");
	color.innerHTML = "#ff0000";
	
}

//set the color of the box to primary green
function primaryGreen(){
	document.getElementById("redSlider").value = 0;
	document.getElementById("greenSlider").value = 255;
	document.getElementById("blueSlider").value = 0;
	var box = document.getElementById("colorBox");
	box.style.backgroundColor = "#00ff00";
	var color = document.getElementById("color");
	color.innerHTML = "#00ff00";
}

//set the color of the box to primary blue
function primaryBlue(){
	document.getElementById("redSlider").value = 0;
	document.getElementById("greenSlider").value = 0;
	document.getElementById("blueSlider").value = 255;
	var box = document.getElementById("colorBox");
	box.style.backgroundColor = "#0000ff";
	var color = document.getElementById("color");
	color.innerHTML = "#0000ff";
}

//set the gradient of the color box when a slider is moved
function setGradient(){
	var redValue1 = document.getElementById("redSlider1").value;
	var red1 = parseInt(redValue1);
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	
	var greenValue1 = document.getElementById("greenSlider1").value;
	var green1 = parseInt(greenValue1);
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	
	var blueValue1 = document.getElementById("blueSlider1").value;
	var blue1 = parseInt(blueValue1);
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	
	var redValue2 = document.getElementById("redSlider2").value;
	var red2 = parseInt(redValue2);
	var redHex2 = red2.toString(16);
	switch(redHex2){
		case "0":
			redHex2 = "00";
			break;
		case "1":
			redHex2 = "01";
			break;
		case "2":
			redHex2 = "02";
			break;
		case "3":
			redHex2 = "03";
			break;
		case "4":
			redHex2 = "04";
			break;
		case "5":
			redHex2 = "05";
			break;
		case "6":
			redHex2 = "06";
			break;
		case "7":
			redHex2 = "07";
			break;
		case "8":
			redHex2 = "08";
			break;
		case "9":
			redHex2 = "09";
			break;
		case "a":
			redHex2 = "0a";
			break;
		case "b":
			redHex2 = "0b";
			break;
		case "c":
			redHex2 = "0c";
			break;
		case "d":
			redHex2 = "0d";
			break;
		case "e":
			redHex2 = "0e";
			break;
		case "f":
			redHex2 = "0f";
			break;
	}
	
	var greenValue2 = document.getElementById("greenSlider2").value;
	var green2 = parseInt(greenValue2);
	var greenHex2 = green2.toString(16);
	switch(greenHex2){
		case "0":
			greenHex1 = "00";
			break;
		case "1":
			greenHex1 = "01";
			break;
		case "2":
			greenHex2 = "02";
			break;
		case "3":
			greenHex2 = "03";
			break;
		case "4":
			greenHex2 = "04";
			break;
		case "5":
			greenHex2 = "05";
			break;
		case "6":
			greenHex2 = "06";
			break;
		case "7":
			greenHex2 = "07";
			break;
		case "8":
			greenHex2 = "08";
			break;
		case "9":
			greenHex2 = "09";
			break;
		case "a":
			greenHex2 = "0a";
			break;
		case "b":
			greenHex2 = "0b";
			break;
		case "c":
			greenHex2 = "0c";
			break;
		case "d":
			greenHex2 = "0d";
			break;
		case "e":
			greenHex2 = "0e";
			break;
		case "f":
			greenHex2 = "0f";
			break;
	}
	
	var blueValue2 = document.getElementById("blueSlider2").value;
	var blue2 = parseInt(blueValue2);
	var blueHex2 = blue2.toString(16);
	switch(blueHex2){
		case "0":
			blueHex2 = "00";
			break;
		case "1":
			blueHex2 = "01";
			break;
		case "2":
			blueHex2 = "02";
			break;
		case "3":
			blueHex2 = "03";
			break;
		case "4":
			blueHex2 = "04";
			break;
		case "5":
			blueHex2 = "05";
			break;
		case "6":
			blueHex2 = "06";
			break;
		case "7":
			blueHex2 = "07";
			break;
		case "8":
			blueHex2 = "08";
			break;
		case "9":
			blueHex2 = "09";
			break;
		case "a":
			blueHex2 = "0a";
			break;
		case "b":
			blueHex2 = "0b";
			break;
		case "c":
			blueHex2 = "0c";
			break;
		case "d":
			blueHex2 = "0d";
			break;
		case "e":
			blueHex2 = "0e";
			break;
		case "f":
			blueHex2 = "0f";
			break;
	}
	
	var directionValue = document.getElementById("direction").value;
	var directionCode = directionValue + "deg";
		
	var colorCode1 = "#" + redHex1 + greenHex1 + blueHex1;
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
}

//set the color of the first gradient stop to primary red
function primaryRed1(){
	document.getElementById("redSlider1").value = 255;
	document.getElementById("greenSlider1").value = 0;
	document.getElementById("blueSlider1").value = 0;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	
	var redValue2 = document.getElementById("redSlider2").value;
	var red2 = parseInt(redValue2);
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	
	var greenValue2 = document.getElementById("greenSlider2").value;
	var green2 = parseInt(greenValue2);
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	
	var blueValue2 = document.getElementById("blueSlider2").value;
	var blue2 = parseInt(blueValue2);
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	
	var colorCode1 = "#ff0000";
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var directionCode = document.getElementById("direction").value;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
	
}

//set the color of the second gradient stop to primary red
function primaryRed2(){
	document.getElementById("redSlider2").value = 255;
	document.getElementById("greenSlider2").value = 0;
	document.getElementById("blueSlider2").value = 0;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	
	var redValue1 = document.getElementById("redSlider1").value;
	var red1 = parseInt(redValue1);
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	
	var greenValue1 = document.getElementById("greenSlider1").value;
	var green1 = parseInt(greenValue1);
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	
	var blueValue1 = document.getElementById("blueSlider1").value;
	var blue1 = parseInt(blueValue1);
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	
	var colorCode1 = "#ff0000";
	var colorCode2 = "#" + redHex1 + greenHex1 + blueHex1;
	var directionCode = document.getElementById("direction").value;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
}

//set the color of the first gradient stop to primary green
function primaryGreen1(){
	document.getElementById("redSlider1").value = 0;
	document.getElementById("greenSlider1").value = 255;
	document.getElementById("blueSlider1").value = 0;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	
	var redValue2 = document.getElementById("redSlider2").value;
	var red2 = parseInt(redValue2);
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	
	var greenValue2 = document.getElementById("greenSlider2").value;
	var green2 = parseInt(greenValue2);
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	
	var blueValue2 = document.getElementById("blueSlider2").value;
	var blue2 = parseInt(blueValue2);
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	
	var colorCode1 = "#00ff00";
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var directionCode = document.getElementById("direction").value;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
	
}

//set the color of the second gradient stop to primary green
function primaryGreen2(){
	document.getElementById("redSlider2").value = 0;
	document.getElementById("greenSlider2").value = 255;
	document.getElementById("blueSlider2").value = 0  ;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	
	var redValue1 = document.getElementById("redSlider1").value;
	var red1 = parseInt(redValue1);
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	
	var greenValue1 = document.getElementById("greenSlider1").value;
	var green1 = parseInt(greenValue1);
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	
	var blueValue1 = document.getElementById("blueSlider1").value;
	var blue1 = parseInt(blueValue1);
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	
	var colorCode1 = "#00ff00";
	var colorCode2 = "#" + redHex1 + greenHex1 + blueHex1;
	var directionCode = document.getElementById("direction").value;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
}

//set the color of the first gradient stop to primary blue
function primaryBlue1(){
	document.getElementById("redSlider1").value = 0;
	document.getElementById("greenSlider1").value = 0;
	document.getElementById("blueSlider1").value = 255;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	
	var redValue2 = document.getElementById("redSlider2").value;
	var red2 = parseInt(redValue2);
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	
	var greenValue2 = document.getElementById("greenSlider2").value;
	var green2 = parseInt(greenValue2);
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	
	var blueValue2 = document.getElementById("blueSlider2").value;
	var blue2 = parseInt(blueValue2);
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	
	var colorCode1 = "#0000ff";
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var directionCode = document.getElementById("direction").value;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
	
}

//set the color of the second gradient stop to primary blue
function primaryBlue2(){
	document.getElementById("redSlider2").value = 0;
	document.getElementById("greenSlider2").value = 0;
	document.getElementById("blueSlider2").value = 255;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	
	var redValue1 = document.getElementById("redSlider1").value;
	var red1 = parseInt(redValue1);
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	
	var greenValue1 = document.getElementById("greenSlider1").value;
	var green1 = parseInt(greenValue1);
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	
	var blueValue1 = document.getElementById("blueSlider1").value;
	var blue1 = parseInt(blueValue1);
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	
	var colorCode1 = "#0000ff";
	var colorCode2 = "#" + redHex1 + greenHex1 + blueHex1;
	var directionCode = document.getElementById("direction").value;
	var box = document.getElementById("colorBox");
	var color = document.getElementById("color");
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	color.innerHTML = "background: " + gradientCode;
	box.style.background = gradientCode;
}