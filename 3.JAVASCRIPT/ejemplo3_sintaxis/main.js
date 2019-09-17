let x, y=2;  // Declaración, “;” es opcional al final de la línea
// Identificadores: _a , $b ,  x , n0

// Asignación de variables
x = 3 + y;
console.log(x);
  
// Definición de funciones
function baz(a, b) {
    return a + b;
}
function baz1() {
    console.log('Hola');
}
baz(1,2);
baz(12,1,5);

let mifuncion = function(){
    console.log('test');
};

// Llamado a función con parámetros, aunque la función no tenga parámetros, se pueden enviar
foo(x, y); 
 // Llamando una función del objeto
obj.bar(3);
  
// Condiciones y sentencias de control
// Si `x` es igual a 0? === (sin casting) no es lo mismo == (con casting)
x='0';
if (x == 0) {
    x = 123;
} else if (){

} else {

}

for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}



// Tipos e instancias 
typeof true; // 'boolean'
'test' instanceof String  //true

// Boolean
'', false, 0, undefined, null, NaN ---> false

let x = null;
if(x) {

}

Math.PI
//raiz cuadrada 3
Math.sqrt(9);
//potencia 49
Math.pow(7, 2); 
