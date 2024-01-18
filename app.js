let numeroSecreto = 0;
let intentos = 1;
let listaNumSorteados = [];



let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10';

numeroSecreto = sortearNumero();

console.log(numeroSecreto);

function cambiarTextoElemento(element, texto){
    let elemento = document.querySelector(element);
    elemento.innerHTML = texto;
}

function intentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('num secreto -> ', numeroSecreto)
    console.log('num usuario -> ', numeroUsuario)

    if(numeroSecreto === numeroUsuario){
        cambiarTextoElemento('p', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > numeroUsuario){
            cambiarTextoElemento('p', 'El número es mayor');
        }else{
            cambiarTextoElemento('p', 'El número es menor');
        }
        intentos++;
    }
    limpiarYFocusear();
}

function limpiarYFocusear(){
    document.getElementById('valorUsuario').value = '';
    document.getElementById('valorUsuario').focus();
}

function reiniciarJuego(){
    limpiarYFocusear();
    numeroSecreto = sortearNumero();
    intentos = 1;

    document.getElementById('reiniciar').setAttribute('disabled', true);

    cambiarTextoElemento('p', 'Ingresa un número del 1 al 10');
}

function sortearNumero(){
    let numeroRandom = Math.floor(Math.random()*10) + 1;
    console.log(listaNumSorteados);
    // si el numero generado esta en la lista
    if(listaNumSorteados.includes(numeroRandom)){
        return sortearNumero();
    }else{
        listaNumSorteados.push(numeroRandom);
        return numeroRandom;
    }
    
}
