alert("Soy un alert!");

var txt = '';
if (confirm("Presione un botón!")) {
	txt = "Presionaste Aceptar!";
} else {
	txt = "Presionaste Cancelar!";
}
console.log(txt);



var person = prompt("Por favor escribe tu nombre:", "Rebeca");
if (person == null || person == "") {
	txt = "El usuario canceló.";
} else {
	txt = "Hola " + person + "! Como estas hoy?";
}
console.log(txt);