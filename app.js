// Escribe tu código aquí.
const palabras = ["insecto", "bootcamp", "mangos", "reptil", "mosca", "escritorio", "laptop", "taza", "credencial", "sandia"];

function lista(array) {
    const ul = document.createElement("ul");
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(array[i]));
        ul.appendChild(li);

    }
    document.appendChild(ul);

}

function usuarioClick() {
    cons inputUsuario = 
}

