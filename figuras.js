console.log("Hiiii");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm") ;


// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El area del cuadrado es: " + perimetroCuadrado + " cm^2");

function perimetroCuadrado(lado) 
{
    return lado * 4;
}

function areaCuadrado(lado) 
{
    return lado * lado;
}

function perimetroTriangulo(ladoUno, ladoDos, base) {
    return ladoUno + ladoDos + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro *  Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) *  Math.PI;
}

 
function clickButtonPerimetro () {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function clickButtonArea() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}