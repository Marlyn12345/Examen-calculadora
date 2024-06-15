// Esta función evalua las operaciones de los numeros
function addToDisplay(value){
    document.getElementById('display').value += value;
}

// Esta funcion evalua como se va a calcular las operaciones
function calculate(){
    var expresion = document.getElementById('display').value;
    var result = eval(expresion);
    document.getElementById('display').value = result;
}
 // Esta función limpia las operaciones realizadas 
function clearDisplay(){
    document.getElementById('display').value = '';
}