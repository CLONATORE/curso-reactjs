(function () {
    //callback
    var funcion1 = function(dato, callback) {
        callback(dato);	
    };
    let funcion2 =  function (x) {
        alert(x);
    };
    funcion1(1,funcion2);


    function funcion3(callback) {
        setTimeout(callback, 3000)
    }
    funcion3(function () {
        alert('Pasaron algunos segundos');
    });

    //funcion flecha
    let saludo = function (a,b) {
        return "Hola Mundo";
    }
    console.log(saludo());

    let saludoFlecha = (a,b) => {
        return "Hola Mundo Flecha";
    }
    console.log(saludoFlecha());
    //closure
    function createIncrementor(start) {
        let a= 10;
        return function () { // (1)
            start++;
            console.log(a);
            return start;
        }
    }
    var inc = createIncrementor(5);
    console.log(inc());
    console.log(inc());

    let x = document.getElementById("div_id");
    console.log(x);
    document.addEventListener("DOMContentLoaded", function() {
        let x = document.getElementById("div_id");
        console.log(x);


        let items = document.querySelector('#ejemplo1 li');
        console.log(items);

        items = document.querySelectorAll('#ejemplo1 li');
        console.log(items);

        let input = document.getElementById("inputTest");
        console.log(input.type);
        console.log(input.name);
        console.log(input.style.color);
        input.value = 'esto es una prueba';
        input.style.backgroundColor = 'green';
        console.log(input.value);

    });

}());


