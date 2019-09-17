(function () {
    
    document.addEventListener("DOMContentLoaded", function(event) {
        let frutas = [{id:1,nombre:'Mango'},
            {id:2,nombre:'Sand&iacute;a'},{id:3,nombre:'Fresa'},
            {id:4,nombre:'Mel&oacute;n'},{id:5, nombre:'Naranja'}];
        let selectFrutas = document.getElementById("frutas");
        let options = '';
        frutas.forEach((e,i,a) => {
            options += `<option value='${e.id}'>${e.nombre}</option>`;
        });
        selectFrutas.innerHTML = options;
        selectFrutas.addEventListener("change", (e) => {
            let el = e.target;
            let divFrutaSeleccionada = document.getElementById("frutaSeleccionada");
            let text = el.options[el.selectedIndex].innerHTML;
            divFrutaSeleccionada.innerHTML = `valor= <b>${el.value}</b>, 
            etiqueta:<b>${text}</b>`;

            let option = document.querySelector('#frutas option:checked');
            console.log(option.label);
        });
    });
}()); 
    
    