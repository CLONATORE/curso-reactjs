
(function () {
  class Carro { 
    constructor() {
    }
    static imprime () {
       alert('metodo estatico');
    }
  }
  Carro.imprime();
  
  class Carro2 {
    constructor(nombreMarca) {
      this.marca = nombreMarca;
    }
    get marca() {
      console.log('get');
      return this._marca;
    }
    set marca(value) {
      console.log('set');
      this._marca = value;
    }
  }
  alert((new Carro2("Tesla")).marca);


}());


