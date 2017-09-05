'use strict';
// MIT License btw HaHAA

function createCard(cardType, mouseEvent) {
    const origAudio = document.getElementById(cardType + '-audio');
    const newAudio = origAudio.cloneNode();
    const origImage = document.getElementById(cardType + '-image');
    const newImage = origImage.cloneNode();
    const body = document.getElementsByTagName('body')[0];
    const card = { width: 198, height: 143 };

    newAudio.play();

    newImage.style.top = (mouseEvent.clientY - card.width) + 'px';
    newImage.style.left = (mouseEvent.clientX - card.height) + 'px';
    newImage.classList.remove('preload');
    body.appendChild(newImage);
}

function click(mouseEvent) {
    const percentChanceSquire = 0.25;

    if (Math.random() < percentChanceSquire) {
        createCard('squire', mouseEvent);
    } else {
        createCard('knight', mouseEvent);
    }
}

document.addEventListener('click', click);
