"use strict";
// (c) Roger Filmyer, 2017. MIT License.

function createCard(cardType, mouseEvent) {
	const origAudio = document.getElementById(cardType+"-audio");
	const newAudio = origAudio.cloneNode()
	const origImage = document.getElementById(cardType+"-image");
	const newImage = origImage.cloneNode();
	//const newImage = origImage;

	newAudio.play()

	newImage.style.top = (mouseEvent.clientY - 198) + "px";
	newImage.style.left = (mouseEvent.clientX - 143) + "px";
	newImage.classList.remove("preload");
	const body = document.getElementsByTagName("body")[0];
	body.appendChild(newImage);
}

function click(mouseEvent) {
	const percentChanceSquire = 0.25;
	let cardType;
	if (Math.random() < 0.25) {
		cardType = "squire";
	} else {
		cardType = "knight";
	}
	createCard(cardType, mouseEvent);
}

document.addEventListener("click", click);