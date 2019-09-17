    //ECMACScript 5
(function () {
  function Carro(marca) {
    this.marca = marca;
  }
  console.log(new Carro("Tesla"));

// metodos
function Carro2(marca) {
  this.marca = marca;
}
Carro2.prototype.imprime = function() {
	alert(this.marca);
};
new Carro2("Tesla").imprime();

}());

(function () {
	
    //ECMACScript 6
class Carro {
  constructor(marca) {
    this.marca = marca;
  }
}
console.log(new Carro("Tesla"));

class Carro2 {
  constructor(marca) {
    this.marca = marca;
  }
  imprime () {
     alert(this.marca);
  }
}
new Carro2("Tesla").imprime();

}());

let carro = {
	marca: 'Tesla',
	imprime() {
		alert(this.marca);
	}
}
carro.imprime();


class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hablar() {
    console.log(this.nombre + ' hace un ruido.');
  }
}

class Perro extends Animal {
  constructor(nombre) {
    super(nombre);
  }
  hablar() {
    console.log(this.nombre + ' ladra.');
  }
}

let a = new Animal('Desconocido');
a.hablar();
let p = new Perro('Solovino');
p.hablar();