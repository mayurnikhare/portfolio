// =========================
// SMOOTH SCROLL FUNCTION
// =========================
function scrollToSection(id){

    document.getElementById(id).scrollIntoView({
        behavior:'smooth'
    });

}

// =========================
// FADE REVEAL ANIMATION
// =========================
const elements = document.querySelectorAll('.fade');

const revealOnScroll = () => {

    elements.forEach((el) => {

        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            el.classList.add('show');

        }

    });

};

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// =========================
// TYPING EFFECT
// =========================
const text = [

    "Full Stack Python Developer",
    "Flask Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer"

];

let i = 0;
let j = 0;

let current = "";

let isDeleting = false;

function type(){

    let speed = 100;

    // TYPING
    if(!isDeleting && j <= text[i].length){

        current = text[i].substring(0, j++);
    }

    // DELETING
    else if(isDeleting && j >= 0){

        current = text[i].substring(0, j--);

        speed = 45;

    }

    document.querySelector(".typing").textContent = current;

    // WORD FULLY TYPED
    if(j === text[i].length){

        isDeleting = true;

        speed = 1400;

    }

    // WORD DELETED
    if(j === 0 && isDeleting){

        isDeleting = false;

        i = (i + 1) % text.length;

        speed = 250;

    }

    setTimeout(type, speed);

}

type();


// =========================
// PARTICLES
// =========================
particlesJS("particles-js", {

    particles: {

        number: {
            value: 70
        },

        color: {
            value: "#a855f7"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,
            distance: 150,
            color: "#9333ea",
            opacity: 0.4,
            width: 1

        },

        move: {

            enable: true,
            speed: 1.8,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            }

        },

        modes: {

            grab: {

                distance: 140,

                line_linked: {
                    opacity: 1
                }

            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================
window.addEventListener("scroll", ()=>{

    const nav = document.querySelector("nav");

    if(window.scrollY > 40){

        nav.style.boxShadow =
        "0 10px 30px rgba(168,85,247,0.18)";

        nav.style.background =
        "rgba(10,10,20,0.75)";

    }

    else{

        nav.style.boxShadow = "none";

        nav.style.background =
        "rgba(15,15,26,0.55)";

    }

});


// =========================
// BUTTON CLICK EFFECT
// =========================
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn)=>{

    btn.addEventListener("click", ()=>{

        btn.style.transform = "scale(0.96)";

        setTimeout(()=>{

            btn.style.transform = "";

        },150);

    });

});


// =========================
// PREMIUM SCROLL ANIMATION
// =========================

const animatedElements =
document.querySelectorAll(
'.fade, .card, .skill, .timeline-content'
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

animatedElements.forEach((el)=>{

    observer.observe(el);

});


// =========================
// ACTIVE NAV LINK
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")
        .includes(currentSection)){

            link.classList.add("active");

        }

    });

});


// =========================
// PARALLAX HERO EFFECT
// =========================
window.addEventListener("scroll", ()=>{

    const hero = document.querySelector(".hero");

    let value = window.scrollY;

    hero.style.transform =
    `translateY(${value * 0.15}px)`;

});


// =========================
// CARD 3D HOVER EFFECT
// =========================
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =
        ((x / rect.width) - 0.5) * 10;

        const rotateX =
        ((y / rect.height) - 0.5) * -10;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", ()=>{

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


// =========================
// SKILL HOVER SOUNDLESS EFFECT
// =========================
const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", ()=>{

        skill.style.transform =
        "translateY(-8px) scale(1.03)";

    });

    skill.addEventListener("mouseleave", ()=>{

        skill.style.transform =
        "translateY(0) scale(1)";

    });

});


// =========================
// CUSTOM CURSOR GLOW
// =========================
const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
