

function string(){
    //remplaza el valor null por un string
    const valor = null
    return valor
}


function integer(){
    //remplaza el valor null por un integer
    const valor = null
    return valor
}


function float(){
    //remplaza el valor null por un float
    const valor = null
    return valor
}


function boolean(){
    //remplaza el valor null por un booleano
    const valor = null
    return valor
}

function operacion1(){
    // remplaza null por entero tal que la operacion resulte en 35
    const resultado = 5 + null
    return resultado
}


function operacion2(){
   // remplaza null por entero tal que la operacion resulte en 27    
    const resultado = 50 - null
    return resultado
}

function operacion3(){
     // remplaza null por entero tal que la operacion resulte en 250    
    const resultado = 10 * null
    return resultado
}



function operacion4(){
     // remplaza null por entero tal que la operacion resulte en 0    
    const resultado = 10 % null 
    return resultado
}


function esPar(numero){
    // crear una funcion que reciba un numero y retorne 'es par' si el numero es par
    // y 'es inpar' si el numero es inpar
    
}


function esMasGrande (numero){
    //crea una funcion que reciba un numero como argumento y si el numero es mayor a 50 
    //que retorne 'es mayor'
    //si es menor a 50 'es menor'
    //pero si es menor o igual a 0 debe retornar 'argumento invalido'
}


function esMayorDeEdad (edad){
    //recibe un entero como argumento que equivale a una edad.
    //si la edad ingresada es menor a 18 retornar 'es menor'
    //si la edad es mayor o igual a 18, retornar 'es mayor'
}

function esDivisiblePorTres (numero){
    //recibe entero como argumento y determina si es divisible por 3
    // dado el caso retornar '[numero] es divisible'
    //ejemplo si se pasa 3 por parametro debe retornar '3 es divisible por 3'

}


function esDivisiblePorTresYnueve (numero){
    //recibe entero como argumento un entero y si es divisible por 3 debe 
    //retornar 'es divisible por tres'
    //si es divisible por 9 retorna 'es divisible por 9'
    //si es divisible por 3 y nueva retorna 'es divisible por 3 y por 9'
    //sino retorna no es divisible por 3 ni por 9


}


function esVocal (letra){
    //recibe una letra y si es una vocal retornar 'es vocal' de lo contrario retona
    // 'no es vocal' 
    

}


function tieneTresCifras(numero){
    //recibe entero como parametro y si el numero tiene 3 cifras retorna true
    //caso contrario retorna false

}


function sumarNumeros (numero1, numero2){
    //retorna la suma de los dos numero siempre que sea positivo
    //caso contrario retorna false

}


function cuentaLetras (palabra){
    //recibe palabra como argumento y retorna la cantidad de letras que tiene

}

function saluda(nombre, apellido, edad){
    //recibe 3 argumentos y debe devolver un string saludo como este
    // 'hola me llamo [nombre] [apellido] y tengo [edad] años'


}

function redondea(numero){
    // recibe un numero con decimales y debe retornar el numero redondeado mas cercano
    // ejemplo 3.45 [3]   3.55 [4]
    //puedes usar el metodo Math y el metodo round
}


function redondeaPorMayor(numero){
    // recibe un numero con decimales y debe retornar el numero redondeado mayor
    // ejemplo 3.45 [4]   3.85 [4]   3.1 [4]
    //puedes usar el metodo Math y el metodo ceil
}


function redondeaPorMenor(numero){
    // recibe un numero con decimales y debe retornar el numero redondeado mayor
    // ejemplo 3.45 [3]   3.85 [3]   3.1 [3]
    //puedes usar el metodo Math y el metodo floor
}


function espejo (palabra){
    //recibe plalabra y debe retornar la palabra invertida
    // ejemplo 'pedro' 'ordep'      'hola'  'aloh'
    //dato ten en cuenta el metodo reverse

}




module.exports = {
    string,
    integer,
    float,
    boolean,
    operacion1,
    operacion2,
    operacion3,
    operacion4,
    esPar,
    esMasGrande,
    esMayorDeEdad,
    esDivisiblePorTres,
    esDivisiblePorTresYnueve,
    esVocal,
    tieneTresCifras,
    sumarNumeros,
    cuentaLetras,
    saluda,
    redondea,
    redondeaPorMayor,
    redondeaPorMenor,
    espejo
}