

//ANIMACION DE LOS ACEITES

document.addEventListener('scroll', function () {
    // Obtiene la altura de viewport en vh (Viewport Height)
    const vh = window.innerHeight * 0.01;
    // Calcula 3vh como referencia para el cambio
    const triggerHeight = 3 * vh;

    // Obtiene todos los elementos de clase intro__pocion
    const pociones = document.querySelectorAll('[class^="intro__pocion"]');

    // Itera sobre cada pocion para verificar y aplicar la clase necesaria
    pociones.forEach(function (pocion) {
        if (window.scrollY > triggerHeight) {
            pocion.classList.add('intro__pocion--behind');
        } else {
            pocion.classList.remove('intro__pocion--behind');
        }
    });
});


//ANIMACION DE LAS VELAS

document.addEventListener('scroll', function () {
    // Obtiene la altura de viewport en vh (Viewport Height)
    const vh = window.innerHeight * 0.01;
    // Calcula 3vh como referencia para el cambio
    const triggerHeight = 3 * vh;

    // Obtiene todos los elementos de clase intro__pocion
    const pociones = document.querySelectorAll('[class^="intro__vela"]');

    // Itera sobre cada pocion para verificar y aplicar la clase necesaria
    pociones.forEach(function (pocion) {
        if (window.scrollY > triggerHeight) {
            pocion.classList.add('intro__vela--behind');
        } else {
            pocion.classList.remove('intro__vela--behind');
        }
    });
});


//ANIMACION DE LOS CUARZOS

document.addEventListener('scroll', function () {
    // Obtiene la altura de viewport en vh (Viewport Height)
    const vh = window.innerHeight * 0.01;
    // Calcula 3vh como referencia para el cambio
    const triggerHeight = 3 * vh;

    // Obtiene todos los elementos de clase intro__pocion
    const pociones = document.querySelectorAll('[class^="intro__cuarzo"]');

    // Itera sobre cada pocion para verificar y aplicar la clase necesaria
    pociones.forEach(function (pocion) {
        if (window.scrollY > triggerHeight) {
            pocion.classList.add('intro__cuarzo--behind');
        } else {
            pocion.classList.remove('intro__cuarzo--behind');
        }
    });
});







/*CANVAS PARA BURBUJAS*/




//detector de CANVAS

// Detectar cuando el usuario hace scroll
window.addEventListener('scroll', function () {
    // Obtener la posición actual del scroll
    var scrollPosition = window.scrollY;

    // Obtener el elemento .presentation__canvas
    var canvas = document.querySelector('.general__space');

    // Cambiar el z-index según la posición del scroll
    if (scrollPosition >= 151 && scrollPosition <= 3800) {
        canvas.style.zIndex = "0";
    } else {
        canvas.style.zIndex = "-1";
    }
});




//CANVAS LOT OF BUBBLES

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let w, h, balls = [];
let mouse = {
    x: undefined,
    y: undefined
}
let rgb = [
    "#006414",
    "#009929",
    "#5ccb5f",
    "#121012",
    "#007b00",
    "#4ea93b",
    "#b4ff9a",
    "#92e27a"
]

function init() {
    resizeReset();
    animationLoop();
}

function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function mousemove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    for (let i = 0; i < 2; i++) {
        balls.push(new Ball());
    }
}

function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}


function resizeReset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    drawBalls();

    let temp = [];
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].time <= balls[i].ttl) {
            temp.push(balls[i]);
        }
    }
    balls = temp;

    requestAnimationFrame(animationLoop);
}

function drawBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
    }
}

function mousemove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    for (let i = 0; i < 2; i++) {
        balls.push(new Ball());
    }
}

function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

class Ball {
    constructor() {
        this.start = {
            x: mouse.x + getRandomInt(-20, 20),
            y: mouse.y + getRandomInt(-20, 20),
            size: getRandomInt(5, 15)
        }
        this.end = {
            x: this.start.x + getRandomInt(-300, 300),
            y: this.start.y + getRandomInt(-300, 300)
        }

        this.x = this.start.x;
        this.y = this.start.y;
        this.size = this.start.size;

        this.style = rgb[getRandomInt(0, rgb.length - 1)];

        this.time = 0;
        this.ttl = 120;
    }
    draw() {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        if (this.time <= this.ttl) {
            let progress = 1 - (this.ttl - this.time) / this.ttl;

            this.size = this.start.size * (1 - easeOutQuart(progress));
            this.x = this.x + (this.end.x - this.x) * 0.01;
            this.y = this.y + (this.end.y - this.y) * 0.01;
        }
        this.time++;
    }
}

const headerForm = document.querySelector('.general__space');
const generalPresentation = document.querySelector('.general__portal');

if (headerForm) {
    headerForm.addEventListener("mousemove", mousemove);
    headerForm.addEventListener("mouseout", mouseout);
}

if (generalPresentation) {
    generalPresentation.addEventListener("mousemove", mousemove);
    generalPresentation.addEventListener("mouseout", mouseout);
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);



//BOTON DE LA MUSICA

document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('audioPlayer');
    audio.volume = 0.1; // Comenzar con un volumen bajo
    audio.play(); // Comenzar la reproducción automáticamente

    // Aumentar gradualmente el volumen hasta 1 en 3 segundos
    var fadeAudioIn = setInterval(function () {
        if (audio.volume < 1 - 0.1) {
            audio.volume += 0.1;
        } else {
            audio.volume = 1;
            clearInterval(fadeAudioIn);
        }
    }, 300);

    // Función para manejar el clic: pausa o reanuda la música
    document.querySelector('.intro__music').addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

//EFECTO FLIP PARA CENTROS

document.querySelectorAll('.card-inner').forEach(card => {
    card.addEventListener('click', function () {
        // Esto togllea la clase 'is-flipped' para la tarjeta clickeada
        this.classList.toggle('is-flipped');
    });
});








