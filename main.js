"use strict";
// MIT License btw HaHAA

function createCard(mouseEvent) {

	let cardKnight = "knight"
	let cardSquire = "squire"
	
	const origKnightAudio = document.getElementById(cardKnight+"-audio");
	const newKnightAudio = origKnightAudio.cloneNode();
	const origKnightImage = document.getElementById(cardKnight+"-image");
	const newKnightImage = origKnightImage.cloneNode();

	const origSquireAudio = document.getElementById(cardSquire+"-audio");
	const newSquireAudio = origSquireAudio.cloneNode();
	const origSquireImage = document.getElementById(cardSquire+"-image");
	const newSquireImage = origSquireImage.cloneNode();


	newKnightAudio.play()

	newKnightImage.style.top = (mouseEvent.clientY - 198) + "px";
	newKnightImage.style.left = (mouseEvent.clientX - 143) + "px";
	newKnightImage.classList.remove("preload");
	const body = document.getElementsByTagName("body")[0];
	body.appendChild(newKnightImage);



	
	setTimeout(function(){
		
				newSquireAudio.play()
				
				newSquireImage.style.top = (mouseEvent.clientY - 198) + "px";
				newSquireImage.style.left = (mouseEvent.clientX + 243) + "px";
				newSquireImage.classList.remove("preload");
				body.appendChild(newSquireImage);
			
			}, 1300);
		
}

function click(mouseEvent) {
	// const percentChanceSquire = 0.25;
	// let cardType;
	// if (Math.random() < 0.25) {
	// 	cardType = "squire";
	// } else {
	// 	cardType = "knight";
	// }
	let cardType = "knight"
	createCard(mouseEvent);

}

document.addEventListener("click", createCard);