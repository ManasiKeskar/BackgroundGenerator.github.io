var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.createElement("button");

randomButton.innerHTML = "Random Color Generator";
body.appendChild(randomButton);

function displayGradientProperty() {
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColorBackground() {
	var randomColor1 = getRandomColor();
	var randomColor2 = getRandomColor();

	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1 
	+ ", " 
	+ randomColor2
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
	return rgbColor
}

body.addEventListener("load", displayGradientProperty());

randomButton.addEventListener("click", setRandomColorBackground);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);