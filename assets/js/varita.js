
/*CONFIGURACION PARA EL CAMBIO DE LAS IMAGENES DENTRO DE LAS CARTAS*/
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene todos los contenedores de imágenes
    const imageContainers = document.querySelectorAll('.card__image');

    // Itera sobre cada contenedor de imágenes
    imageContainers.forEach((container) => {
        const img1 = container.querySelector('.card__img1');
        const img2 = container.querySelector('.card__img2');

        // Función para alternar las imágenes
        function toggleImages() {
            // Comprueba si ambos elementos existen antes de intentar cambiar su opacidad
            if (img1 && img2) {
                if (img1.style.opacity == "1") {
                    img1.style.opacity = "0";
                    img2.style.opacity = "1";
                    // Espera 5 segundos antes de cambiar de img2 a img1
                    setTimeout(toggleImages, 5000); // Tiempo para img2
                } else {
                    img1.style.opacity = "1";
                    img2.style.opacity = "0";
                    // Espera 2 segundos antes de cambiar de img1 a img2
                    setTimeout(toggleImages, 2000); // Tiempo para img1
                }
            }
        }

        // Inicializa el proceso de alternar imágenes
        toggleImages();
    });
});












