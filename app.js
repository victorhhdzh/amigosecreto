// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista = [];
var listaAmigos = document.getElementById('listaAmigos');
var resultado = document.getElementById('resultado');


function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre === ""){
        window.alert("El nombre no es valido")
    }
    else{
        lista.push(nombre);
        console.log(nombre);
        listarAmigos();
        document.getElementById('amigo').value="";
    }
    
}

function listarAmigos(){
    let imprimible = "";
    for(const contador of lista){
        imprimible = imprimible.concat(contador)+"<br>";
    }
    listaAmigos.innerHTML = imprimible;
}

function sortearAmigo(){
    if(lista.length === 0){
        window.alert("No hay ningun nombre en la lista")
    }
    else{
        let sorteo = Math.floor(Math.random()*(lista.length)+0);
        listaAmigos.innerHTML = "";
        resultado.innerHTML = "El amigo secreto sorteado es: "+lista[sorteo];
    }
}