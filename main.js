

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



// -------- INSTRUMENT -------------

const ocean = document.getElementById("ocean");



const jellyfishMap = {
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
    },

    r: {
    image: "img/j4.png",
    sound: "sounds/4.mp3"
    },

    t: {
    image: "img/j5.png",
    sound: "sounds/5.mp3"
    },

    y: {
    image: "img/j6.png",
    sound: "sounds/6.mp3"
    },

    u: {
    image: "img/j7.png",
    sound: "sounds/7.mp3"
    },

    i: {
    image: "img/j8.png",
    sound: "sounds/8.mp3"
    },

    o: {
    image: "img/j9.png",
    sound: "sounds/9.mp3"
    },

    p: {
    image: "img/j10.png",
    sound: "sounds/10.mp3"
    }

};

function createJellyfish(keyData) {
    const jelly = document.createElement("img");
    jelly.src = keyData.image;
    jelly.classList.add("jellyfish");

// create random position
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    jelly.style.left = x + "px";
    jelly.style.top = y + "px";

    ocean.appendChild(jelly);

// play sound every 2 seconds
    const interval = setInterval(() => {
        const sound = new Audio(keyData.sound);
        sound.play();
    }, 2000);

// remove jellyfish after 8 seconds
    setTimeout(() => {
        clearInterval(interval);

        jelly.remove();

    }, 8000);
};


