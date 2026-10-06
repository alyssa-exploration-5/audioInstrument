

// find our intro modal
const introModal = document.getElementById("intro-modal");
// console.log(introModal);

// find modal close button
const introModalCloseButton = document.getElementById("intro-modal-close");


// show modal on page load
introModal.showModal();

// when OK clicked, modal closes
introModalCloseButton.addEventListener("click", function closeIntroModal(){    
// closes modal     
introModal.close();     
});


// spawning jellyfish randomly
function createJellyfish(keyData) {

const jelly = document.createElement("img");

jelly.src = keyData.image;
jelly.classList.add("jellyfish");
const jellyfishMap = {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

q: {
image: "img/j1.png",
sound: "sounds/1.mp3"
},

w: {
image: "img/j2.png",
sound: "sounds/2.mp3"
},

e: {
image: "img/j3.png",
sound: "sounds/3.mp3"
}

r: {
image: "img/j4.png",
sound: "sounds/4.mp3"
}

t: {
image: "img/j5.png",
sound: "sounds/5.mp3"
}

y: {
image: "img/j6.png",
sound: "sounds/6.mp3"
}

u: {
image: "img/j7.png",
sound: "sounds/7.mp3"
}

i: {
image: "img/j8.png",
sound: "sounds/8.mp3"
}

o: {
image: "img/j9.png",
sound: "sounds/9.mp3"
}

p: {
image: "img/j10.png",
sound: "sounds/10.mp3"
}
};
