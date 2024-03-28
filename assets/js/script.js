// plugin ScrollTrigger con GSAP.
gsap.registerPlugin(ScrollTrigger);



// zoom inicial del video y la imagen de fondo.


gsap.set(".intro__video", { scale: 1.5 });
gsap.set(".intro__background", { scale: 1, opacity: 1, transformOrigin: "center center" });
gsap.set(".welcome__image", { scale: 1.5 });


gsap.to(".intro__video", {
    scale: 1, // Esto hace que el video vuelva a su tamaño normal.
    scrollTrigger: {
        trigger: ".general__main", // Elemento que dispara la animación al hacer scroll.
        start: "top top", // Inicia la animación cuando el inicio del trigger está en la parte superior.
        end: "900vh top", // Termina cuando el final del trigger está en la parte superior.
        scrub: true, // Hace que la animación se vincule al scroll (efecto suave).
    }
});



// animación para la imagen de fondo.
gsap.to(".intro__background", {
    scale: 1.9, // Aumenta el tamaño de la imagen de fondo.
    opacity: 0, // Hace que la imagen se desvanezca completamente.
    scrollTrigger: {
        trigger: ".general__main", // Elemento que dispara la animación al hacer scroll.
        start: "top top", // Inicia la animación cuando el inicio del trigger está en la parte superior.
        end: "1200vh top", // Termina cuando el final del trigger está en la parte superior.
        scrub: true, // Hace que la animación se vincule al scroll (efecto suave).
    }
});


//ANIMACIONES CAJA WELCOME LOGO + TEXTO

gsap.from(".welcome__image", {
    scrollTrigger: {
        trigger: ".welcome__intro",
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true // Descomenta para depuración
    },
    xPercent: 100,
    opacity: 0,
    duration: 1
});

gsap.from(".welcome__text", {
    scrollTrigger: {
        trigger: ".welcome__intro",
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play none none reverse',
        // markers: true // Descomenta para depuración
    },
    xPercent: -100,
    opacity: 0,
    duration: 1
});



//CONFIG TALLERES, APROBAR 



//AGRANDAMIENTO DE LAS LETRAS

// Calcula el alto de la ventana para usarlo en la animación
const windowHeight = window.innerHeight;

gsap.to(".talleres__background", {
    scrollTrigger: {
        trigger: ".general__talleres",
        start: "bottom center", // Inicia cuando el .general__portal llega a la parte superior de la ventana
        end: () => `+=${windowHeight * 3}`, // El final será el doble de la altura de la ventana después del inicio
        scrub: true, // Hace que la animación se vincule al scroll
        pin: true, // Mantiene el .general__portal fijo en la pantalla mientras ocurre la animación
        anticipatePin: 1, // Prepara el pin antes de que comience la animación
    },
    scale: 3, // Aumenta el tamaño del texto al triple
    ease: "none",
    onReverseComplete: () => gsap.to(".talleres__background", { scale: 1, duration: 0.3 }), // Al revertir el scroll, vuelve al tamaño original rápidamente
});



//PUERTA SALIENDO DE UN CIRCULO

gsap.fromTo(".talleres__img",
    {
        clipPath: "circle(0% at 50% 50%)", // Comienza como un círculo muy pequeño en el centro
    },
    {
        clipPath: "circle(50% at 50% 50%)", // Se expande hasta cubrir el elemento completo
        duration: 3, // Duración de la transición. Ajusta según necesites
        ease: "none", // Para una transición suave
        scrollTrigger: {
            trigger: ".general__talleres",
            start: "bottom center", // Ajusta estos valores según la posición inicial deseada
            end: "bottom top", // Ajusta estos valores según la posición final deseada
            scrub: true, // Para vincular la animación al scroll
        }
    }
);



//cCONFIGURACION TITULO PRINCIPAL


gsap.to(".mainname__title", {
    scrollTrigger: {
        trigger: ".general__mainname",
        start: "top center",
        end: "bottom top",
        scrub: 1, // Ajusta este valor para controlar la suavidad. Un valor mayor hace la transición más suave.
        toggleActions: "play none none reverse",
        // markers: true
    },
    opacity: 0
});





//CONFIGURACION BANNER 1


gsap.to(".general__banner1", {
    scrollTrigger: {
        trigger: ".general__banner1",
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: true, // Descomenta para la depuración
    },
    y: -window.innerHeight,
    ease: "none"
});






gsap.to(".image__img4", {
    scrollTrigger: {
        trigger: ".banner1__container",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
        //markers: true 
    },
    xPercent: -500,

    duration: 1
});

gsap.to(".image__img3", {
    scrollTrigger: {
        trigger: ".banner1__container",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
        //markers: true 
    },
    xPercent: 200,
    yPercent: 150,

    duration: 1
});

gsap.to(".image__img2", {
    scrollTrigger: {
        trigger: ".banner1__container",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
        //markers: true
    },
    xPercent: 20,
    yPercent: -500,

    duration: 1
});

gsap.to(".image__img1", {
    scrollTrigger: {
        trigger: ".banner1__container",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
        //markers: true
    },

    xPercent: 1000,

    duration: 1
});

gsap.to(".image__img0", {
    scrollTrigger: {
        trigger: ".banner1__container",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
        //markers: true
    },

    yPercent: 10,

    duration: 1
});


//CONFIGURACIONES SPACE



gsap.from(".space__img", {
    scrollTrigger: {
        trigger: ".general__space",
        start: 'top center',
        end: 'center center',
        scrub: true,
        toggleActions: 'play none none reverse',
        //markers: true
    },

    xPercent: 500,

    duration: 1
});

































//ENTRADA DE SEGUNDO VIDEO


document.addEventListener("DOMContentLoaded", function () {
    const introVideo = document.querySelector('.intro__video');
    const portalVideo = document.querySelector('.portal__video');

    if (introVideo && portalVideo) {
        // Configurando el video del portal para que inicialmente no sea visible
        gsap.set(portalVideo, { scale: 0.8, opacity: 0, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 });

        // Creando la animación con ScrollTrigger
        ScrollTrigger.create({
            trigger: ".general__portal",
            start: "top center",
            end: "bottom center",
            toggleActions: "play reverse play reverse",
            onEnter: () => {
                // Animación para el video de introducción desvaneciéndose y escalándose
                gsap.to(introVideo, { scale: 0.8, opacity: 0, duration: 1.5, ease: "power2.inOut" });
                // Animación para el video del portal apareciendo suavemente
                gsap.to(portalVideo, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" });
            },
            onLeaveBack: () => {
                // Revertir las animaciones de manera suave al hacer scroll hacia arriba
                gsap.to(introVideo, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.inOut" });
                // Revertir el estado del portalVideo
                gsap.to(portalVideo, { scale: 0.8, opacity: 0, duration: 1.5, ease: "power2.inOut" });
            }
        });
    }
});



//BOTON DE LA MUSICA

document.querySelector('.intro__music').addEventListener('click', function () {
    var audio = document.getElementById('audioPlayer');
    // Verifica si el audio está pausado para iniciar la reproducción con fade-in
    if (audio.paused) {
        audio.volume = 0; // Inicia desde volumen 0
        audio.play(); // Comienza la reproducción

        // Función para incrementar el volumen gradualmente
        var fadeAudio = setInterval(function () {
            // Incrementa el volumen en pasos de 0.1
            if (audio.volume < 1 - 0.1) { // Asegúrate de no sobrepasar el volumen máximo
                audio.volume += 0.1;
            } else {
                // Cuando alcanza el volumen deseado, limpia el intervalo
                audio.volume = 1;
                clearInterval(fadeAudio);
            }
        }, 300); // Ajusta el intervalo para que el fade-in dure 3 segundos
    } else {
        audio.pause(); // Si el audio está reproduciéndose, lo pausa
    }
});






















/*
//LENIS SCROLL CSS
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)*/




/*CONFIG TEXT TYPESCRIPT*/




const words = ['Aceites', 'Velas de Soya', 'Baños de plantas', 'Terapias']

// Main timeline

let mainTimeline = gsap.timeline({
    repeat: -1
})

//for each word, create a new timeline, use the text pluging, then append the timeline to the main one

words.forEach(word => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 3

    })


    textTimeline.to('#typewriter', {
        text: word,
        duration: 1,
        onUpdate: () => {
            cursorTimeline.restart()
            cursorTimeline.pause()
        },
        onComplete: () => {
            cursorTimeline.play()
        },
    })

    mainTimeline.add(textTimeline)
})

let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 0.8
})

cursorTimeline.to('#cursor', {
    opacity: 1,
    duration: 0,

}).to('#cursor', {
    opacity: 0,
    duration: 0,
    delay: .8

})

