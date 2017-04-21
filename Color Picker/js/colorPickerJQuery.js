function gradientMode(){
	//changing the inner html of the headings
	$("#title").html("Javascript Gradient Generator");
	$("#info").html("Use the sliders to change the colors and direction of the gradient.  Add stops and change the gradient type using the selectors.  Change the programming language used by clicking on its logo.");
	$("#color").html("background: linear-gradient(0deg, #ffffff, #000000)");
	
	//set the default gradient of the color box
	$("#colorBox").css("background", "linear-gradient(0deg, #ffffff, #000000)");
	
	//change gradient button to solid button
	$("#gradient").attr("type", "hidden");
	$("#solid").attr("type", "button");
	
	//add new labels
	$("#directionLabel").css("visibility", "visible");
	$("#redLabel2").css("visibility", "visible");
	$("#greenLabel2").css("visibility", "visible");
	$("#blueLabel2").css("visibility", "visible");
	$("#redLabel1").css("visibility", "visible");
	$("#greenLabel1").css("visibility", "visible");
	$("#blueLabel1").css("visibility", "visible");
	$("#redLabel").css("visibility", "hidden");
	$("#greenLabel").css("visibility", "hidden");
	$("#blueLabel").css("visibility", "hidden");
	
	//add new sliders
	$("#direction").attr("type", "range");
	$("#direction").val("0");
	$("#redSlider").attr("type", "hidden");
	$("#redSlider1").attr("type", "range");
	$("#redSlider2").attr("type", "range");
	$("#greenSlider").attr("type", "hidden");
	$("#greenSlider1").attr("type", "range");
	$("#greenSlider2").attr("type", "range");
	$("#blueSlider").attr("type", "hidden");
	$("#blueSlider1").attr("type", "range");
	$("#blueSlider2").attr("type", "range");
	$("#redSlider2").val("0");
	$("#greenSlider2").val("0");
	$("#blueSlider2").val("0");
	$("#redSlider1").val("255");
	$("#greenSlider1").val("255");
	$("#blueSlider1").val("255");
	
	//add new primary buttons
	$("#red").attr("type", "hidden");
	$("#green").attr("type", "hidden");
	$("#blue").attr("type", "hidden");
	$("#red2").attr("type", "button");
	$("#green2").attr("type", "button");
	$("#blue2").attr("type", "button");
	$("#red1").attr("type", "button");
	$("#green1").attr("type", "button");
	$("#blue1").attr("type", "button");
}

//reset the application to a color picker
function solidMode(){
	$("#title").html("JavaScript Color Picker");
	$("#info").html("Use the sliders to change the color of the box.  Change the programming language used by clicking on its logo.");
	$("#color").html("#808080");
	$("#colorBox").css("background", "#808080");
	
	//change the solid button to the gradient button
	$("#solid").attr("type", "hidden");
	$("#gradient").attr("type", "button");
	
	//remove the gradient mode elements
	//change buttons
	$("#red2").attr("type", "hidden");
	$("#green2").attr("type", "hidden");
	$("#blue2").attr("type", "hidden");
	$("#red1").attr("type", "hidden");
	$("#green1").attr("type", "hidden");
	$("#blue1").attr("type", "hidden");
	$("#red").attr("type", "button");
	$("#green").attr("type", "button");
	$("#blue").attr("type", "button");
	
	//change sliders
	$("#redSlider").attr("type", "range");
	$("#redSlider").val("128");
	$("#greenSlider").attr("type", "range");
	$("#greenSlider").val("128");
	$("#blueSlider").attr("type", "range");
	$("#blueSlider").val("128");
	$("#redSlider1").attr("type", "hidden");
	$("#greenSlider1").attr("type", "hidden");
	$("#blueSlider1").attr("type", "hidden");
	$("#redSlider2").attr("type", "hidden");
	$("#greenSlider2").attr("type", "hidden");
	$("#blueSlider2").attr("type", "hidden");
	$("#direction").attr("type", "hidden");
	
	//change labels
	$("#redLabel").css("visibility", "visible");
	$("#greenLabel").css("visibility", "visible");
	$("#blueLabel").css("visibility", "visible");
	$("#redLabel1").css("visibility", "hidden");
	$("#greenLabel1").css("visibility", "hidden");
	$("#blueLabel1").css("visibility", "hidden");
	$("#redLabel2").css("visibility", "hidden");
	$("#greenLabel2").css("visibility", "hidden");
	$("#blueLabel2").css("visibility", "hidden");
	$("#directionLabel").css("visibility", "hidden");
	$("#redLabel").html("R");
	$("#greenLabel").html("G");
	$("#blueLabel").html("B");
}

function setColor(){
	var red = parseInt($("#redSlider").val());
	var redHex = red.toString(16);
	if(redHex.length == 1){
		redHex = "0" + redHex;
	}
	var green = parseInt($("#greenSlider").val());
	var greenHex = green.toString(16);
	if(greenHex.length == 1){
		greenHex = "0" + greenHex;
	}
	var blue = parseInt($("#blueSlider").val());
	var blueHex = blue.toString(16);
	if(blueHex.length == 1){
		blueHex = "0" + blueHex;
	}
	var colorCode = "#" + redHex + greenHex + blueHex;
	$("#colorBox").css("background", colorCode);
	$("#color").html(colorCode);
}

function primaryRed(){
	$("#redSlider").val(255);
	$("#greenSlider").val(0);
	$("#blueSlider").val(0);
	$("#colorBox").css("background-color", "#ff0000");
	$("#color").html("#ff0000");
	
}

function primaryGreen(){
	$("#redSlider").val(0);
	$("#greenSlider").val(255);
	$("#blueSlider").val(0);
	$("#colorBox").css("background-color", "#00ff00");
	$("#color").html("#00ff00");
}

function primaryBlue(){
	$("#redSlider").val(0);
	$("#greenSlider").val(0);
	$("#blueSlider").val(255);
	$("#colorBox").css("background-color", "#0000ff");
	$("#color").html("#0000ff");
}

function setGradient(){
	var red1 = parseInt($("#redSlider1").val());
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	var green1 = parseInt($("#greenSlider1").val());
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	var blue1 = parseInt($("#blueSlider1").val());
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	var red2 = parseInt($("#redSlider2").val());
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	var green2 = parseInt($("#greenSlider2").val());
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	var blue2 = parseInt($("#blueSlider2").val());
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	var directionCode = $("#direction").val() + "deg";
	var colorCode1 = "#" + redHex1 + greenHex1 + blueHex1;
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#colorBox").css("background", gradientCode);
	$("#color").html("background: " + gradientCode);
}

function primaryRed1(){
	$("#redSlider1").val("255")
	$("#greenSlider1").val("0")
	$("#blueSlider1").val("0")
	
	var red2 = parseInt($("#redSlider2").val());
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	var green2 = parseInt($("#greenSlider2").val());
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	var blue2 = parseInt($("#blueSlider2").val());
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	var colorCode1 = "#ff0000";
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var directionCode = $("#direction").val();
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#color").html("background: " + gradientCode);
	$("#colorBox").css("background", gradientCode);
}

//set the color of the second gradient stop to primary red
function primaryRed2(){
	$("#redSlider2").val("255");
	$("#greenSlider2").val("0");
	$("#blueSlider2").val("0");
	
	var red1 = parseInt($("#redSlider1").val());
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	var green1 = parseInt($("#greenSlider1").val());
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	var blue1 = parseInt($("#blueSlider1").val());
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	var colorCode1 = "#" + redHex1 + greenHex1 + blueHex1;
	var colorCode2 = "#ff0000";
	var directionCode = $("#direction").val();
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#color").html("background:" + gradientCode);
	$("#colorBox").css("background", gradientCode);
}

//set the color of the first gradient stop to primary green
function primaryGreen1(){
	$("#redSlider1").val("0");
	$("#greenSlider1").val("255");
	$("#blueSlider1").val("0");
	
	var red2 = parseInt($("#redSlider2").val());
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	var green2 = parseInt($("#greenSlider2").val());
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	var blue2 = parseInt($("#blueSlider2").val());
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	var colorCode1 = "#00ff00";
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var directionCode = $("#direction").val();
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#color").html("background: " + gradientCode);
	$("#colorBox").css("background",  gradientCode);
}

//set the color of the second gradient stop to primary green
function primaryGreen2(){
	$("#redSlider2").val("0");
	$("#greenSlider2").val("255");
	$("#blueSlider2").val("0");
	var red1 = parseInt($("#redSlider1").val());
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	var green1 = parseInt($("#greenSlider1").val());
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	var blue1 = parseInt($("#blueSlider1").val());
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	var colorCode1 = "#" + redHex1 + greenHex1 + blueHex1;
	var colorCode2 = "#00ff00";
	var directionCode = $("#direction").val();
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#color").html("background: "  + gradientCode);
	$("#colorBox").css("background", gradientCode);
}

//set the color of the first gradient stop to primary blue
function primaryBlue1(){
	$("#redSlider1").val("0");
	$("#greenSlider1").val("0");
	$("#blueSlider1").val("255");
	
	var red2 = parseInt($("#redSlider2").val());
	var redHex2 = red2.toString(16);
	if(redHex2.length == 1){
		redHex2 = "0" + redHex2;
	}
	var green2 = parseInt($("#greenSlider2").val());
	var greenHex2 = green2.toString(16);
	if(greenHex2.length == 1){
		greenHex2 = "0" + greenHex2;
	}
	var blue2 = parseInt($("#blueSlider2").val());
	var blueHex2 = blue2.toString(16);
	if(blueHex2.length == 1){
		blueHex2 = "0" + blueHex2;
	}
	var colorCode1 = "#0000ff";
	var colorCode2 = "#" + redHex2 + greenHex2 + blueHex2;
	var directionCode = $("#direction").val();
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#color").html("background: " + gradientCode);
	$("#colorBox").css("background", gradientCode);
}

//set the color of the second gradient stop to primary blue
function primaryBlue2(){
	$("#redSlider2").val("0");
	$("#greenSlider2").val("0");
	$("#blueSlider2").val("255");
	var red1 = parseInt($("#redSlider1").val());
	var redHex1 = red1.toString(16);
	if(redHex1.length == 1){
		redHex1 = "0" + redHex1;
	}
	var green1 = parseInt($("#greenSlider1").val());
	var greenHex1 = green1.toString(16);
	if(greenHex1.length == 1){
		greenHex1 = "0" + greenHex1;
	}
	var blue1 = parseInt($("#blueSlider1").val());
	var blueHex1 = blue1.toString(16);
	if(blueHex1.length == 1){
		blueHex1 = "0" + blueHex1;
	}
	var colorCode1 = "#" + redHex1 + greenHex1 + blueHex1;
	var colorCode2 = "#0000ff";
	var directionCode = $("#direction").val();
	var gradientCode = "linear-gradient(" + directionCode + ", " + colorCode1 + ", " + colorCode2 + ")";
	$("#color").html("background: " + gradientCode);
	$("#colorBox").css("background", gradientCode);
}