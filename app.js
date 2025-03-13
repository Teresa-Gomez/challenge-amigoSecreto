/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
-  Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
- Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
-Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
-Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
<<<agregar nombres
<<funcion del boton añadir para:
<<<almacenarlos en un array
mostrarlos en pantalla
funcion que elija un nombre al azar (string con condicional)
*/
let amigo = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo) {
    alert ("debes ingresar un nombre");
    return;
    }

    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus ();
    mostrarAmigos ();
}

function mostrarAmigos(){
    let arrayAmigos = document.getElementById("listaAmigos");
    arrayAmigos.innerHTML = "";
    for (let i = 0; i < amigo.length; i++){
        let item = document.createElement ("li");
        item.textContent = amigo[i];
        arrayAmigos.appendChild(item);
    }
}


function sortearAmigo(){
    if (amigo.length === 0) {
        alert ("no hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}