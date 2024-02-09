/*Crear programa para calcular factorial*/
//solicitar numero al usuario

let numero = prompt("Ingresa un numero para calcular su fatorial: ");

function factorial(numero) {
    if (isNaN(numero)){
        alert("El dato es invalido, por favor ingrese un dato valido");
        return;
    }else {
    let resultado = 1;
    for (let i =2; i <= numero; i++){
        resultado *= i;
    }
    return resultado;
}
}

alert(factorial(numero));
