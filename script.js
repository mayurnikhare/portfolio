// Scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Animation
const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});

// Typing Effect
const text = ["Full Stack Python Developer", "Flask Developer", "UI/UX Designer"];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    let speed = 100;

    if (!isDeleting && j <= text[i].length) {
        current = text[i].substring(0, j++);
    } 
    else if (isDeleting && j >= 0) {
        current = text[i].substring(0, j--);
        speed = 50;
    }

    document.querySelector(".typing").textContent = current;

    // When word is fully typed
    if (j === text[i].length) {
        isDeleting = true;
        speed = 1200; // pause before deleting
    }

    // When word is deleted
    if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % text.length; // 🔥 LOOP FOREVER
        speed = 300;
    }

    setTimeout(type, speed);
}

type();

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});

window.addEventListener("scroll", ()=>{
    const nav = document.querySelector("nav");
    if(window.scrollY > 50){
        nav.style.boxShadow = "0 5px 20px rgba(168,85,247,0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
});
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        btn.style.transform = "scale(0.96)";
        setTimeout(()=>{
            btn.style.transform = "";
        },150);
    });
});
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";
});