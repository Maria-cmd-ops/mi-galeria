Javascript
// Asegúrate de que todo el contenido del DOM esté cargado antes de ejecutar el script  
document.addEventListener('DOMContentLoaded', function() {  
    // Selecciona todas las imágenes dentro de la galería  
    const imagenes = document.querySelectorAll('.gallery img');  

    // Añade un evento de clic a cada imagen  
    imagenes.forEach(img => {  
        img.addEventListener('click', function() {  
            // Muestra un mensaje en función del atributo alt de la imagen  
            alert(this.alt); // Usa el texto descriptivo de la imagen  
        });  
    });  
});  