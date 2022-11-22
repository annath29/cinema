//obteniendo datos de la memoria
let peliculaConsultadaEnMemoria=JSON.parse(localStorage.getItem("pelicula")) 
console.log(peliculaConsultadaEnMemoria)

//asignando valores a las etiquetas que quiero controlar:

let etiquetaImagen=document.getElementById("imagenPelicula")
etiquetaImagen.src=peliculaConsultadaEnMemoria.imagen

let etiquetaNombre=document.getElementById("nombrePelicula")
etiquetaNombre.textContent=peliculaConsultadaEnMemoria.titulo

let etiquetaDuracion=document.getElementById("duracionPelicula")
etiquetaDuracion.textContent=peliculaConsultadaEnMemoria.duracion

let etiquetaDescripcion=document.getElementById("descripcionPelicula")
etiquetaDescripcion.textContent=peliculaConsultadaEnMemoria.sinopsis

let etiquetaBanner=document.getElementById("bannerPelicula")
etiquetaBanner.src=peliculaConsultadaEnMemoria.banner

