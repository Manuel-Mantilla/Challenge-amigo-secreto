// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

// Función que se activa dando click en el botón "Añadir"
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value; // Guarda el texto ingresado (value) del elemento con id="amigo"
    if (nombreAmigo.trim() === "") { // Trim elimina los espacios en blanco al comienzo y fin del texto ingresado
        alert("!Por favor ingrese un nombre válido¡"); // Si el nombre ingresado esta vacio muestra una alerta
    } else {
        listaDeAmigos.push(nombreAmigo); // Agrega el nombre a una lista
        agregarListaAmigosHttp(listaDeAmigos); // Llama a la función agregarListaAmigosHttp 
    }
}

// Función para mostrar la lista de nombres en pantalla
function agregarListaAmigosHttp(lista) {
    let listaAmigosHttp = document.getElementById("listaAmigos"); // Crear un objeto usando el identificador "listaAmigos"
    listaAmigosHttp.innerHTML = ""; // Limpia el contenido de "listaAmigosHttp"
    lista.forEach(elemento => {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = elemento; // Agregar el texto al <li>
        listaAmigosHttp.appendChild(li); // Insertar <li> en <ul>
    });
}

function sortearAmigo() {
    let nombre = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    mostrarAmigoSecreto(nombre);
}

function mostrarAmigoSecreto(nombreAmigo) {
    let resultadoHttp = document.getElementById("resultado");
    let li = document.createElement("li");
    li.textContent = `¡🥳 Felicidades, tu amigo secreto es ${nombreAmigo} 🎁!`;
    resultadoHttp.appendChild(li);
    limpiarListaAmigosHttp();
}

function limpiarListaAmigosHttp() {
    let listaAmigosHttp = document.getElementById("listaAmigos");
    listaAmigosHttp.innerHTML = "";
}