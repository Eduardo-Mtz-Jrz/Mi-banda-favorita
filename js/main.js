// Se agregan elementos del formulario que deben ser llenados obligatoriamente
// Y el botón para enviar el contenido 
const nombre = document.getElementById("inputNombre");
const apellidos = document.getElementById("inputApellido");
const email = document.getElementById("inputEmail");
const pais = document.getElementById("inputState"); 
const ciudad = document.getElementById("inputCity");
const cancion = document.getElementById("inputCancion");
const disco = document.getElementById("inputDisco");
const recomendacion = document.getElementById("inputRecomendaciones");
const gridCheck = document.getElementById("gridCheck");
const btnEnviar = document.getElementById("btnEnviar");

// Creamos nuestras variables de alerta de validación de contenido
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

// Se crea el oyente de eventos, el llenados de los campos del formulario
btnEnviar.addEventListener("click", function(event){
    event.preventDefault();

    // Eliminamos los espacios en blanco antes de cada elemento ingresado
    nombre.value = nombre.value.trim();
    apellidos.value = apellidos.value.trim();
    email.value = email.value.trim();
    ciudad.value = ciudad.value.trim();
    cancion.value = cancion.value.trim();
    disco.value = disco.value.trim();
    recomendacion.value = recomendacion.value.trim();

    // En caso de tener contenido valido, evitamos que los mensajes de alerta se acumulen/dupliquen
    alertValidacionesTexto.innerHTML = ""; // Elimina el mensaje de alerta si el producto es valido
    alertValidaciones.style.display = "none"; // Elimina el bloque de alerta si el producto es valido
    nombre.style.border = ""; // Elimina el borde rojo si el producto es valido
    apellidos.style.border = "";
    email.style.border = "";
    pais.style.border = "";
    ciudad.style.border = "";
    cancion.style.border = "";
    disco.style.border = "";
    recomendacion.style.border = "";
    gridCheck.style.border = "";

    // Creamos la condición y alerta de elementos (letras, numeros, caracteres) minimos en cada campo
    if (nombre.value.length < 4) {
        nombre.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML = "<strong>El Nombre no es correcto.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }
    
    if (apellidos.value.length < 4) {
        apellidos.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>Los Apellidos no son correctos.</strong>"; // Mensaje de alerta
        // Usamos += para sumarle al mensaje de alerta aquellos elementos que nos falten
        // Usamos </br> para que presentar cada mensaje de alerta en su propio renglon 
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }
    
    if (email.value.length < 4) {
        email.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>El Email no es correcto.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }

    if (pais.value === "Elige") { // Como este campo se trata de elegir una opción, no podemos usar los operadores logicos (< ó >) 
        // como en los demás campos y tampoco podemos hacer uso de la propiedad length
        pais.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>El País no es correcto.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }
    
    if (ciudad.value.length < 4) {
        ciudad.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>La Ciudad no es correcta.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }
    
    if (cancion.value.length < 4) {
        cancion.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>La Canción no es correcta.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }
    if (disco.value.length < 4) {
        disco.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>El Disco no es correcto.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }
    
    if (recomendacion.value.length < 4) {
        recomendacion.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>Agregue Recomendaciones.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }

    if (!gridCheck.checked) { // .checked es la propiedad que nos ayuda a validar que la checkbox sea seleccionada 
        // En este caso al agregar el signo !, nos arroja el mensaje de alerta por no ser seleccionada
        gridCheck.style.border = "solid medium red"; // Estilo del bloque de alerta
        alertValidacionesTexto.innerHTML += "<br/><strong>Acepte el contenido.</strong>"; // Mensaje de alerta
        alertValidaciones.style.display = "block"; // El bloque de alerta se muestra en bloque
    }

})
