(function () {

    document.addEventListener("DOMContentLoaded", function(event) {
        var btnVerde = document.getElementById("btnVerde");
        var btnAzul = document.getElementById("btnAzul");
        let f = function(e){
            let btn = e.target;
            console.log(btn);

            btn.id="btnVerde1";
            console.log(btn.dataset.color);
            let contenedor = document.getElementById("contenedor");

            let div = document.createElement('div');
            contenedor.appendChild(div);
            let nt = document.createTextNode('nuevo texto');
            div.appendChild(nt);

        };
        btnVerde.addEventListener("click", f);
        btnAzul.addEventListener("click", f);
        btnAzul.addEventListener("click", function(e) {
            let ul = document.getElementById("contenedorLista");
			//createElement
            let li = document.createElement("li");
            ul.appendChild(li);
            let newtext = document.createTextNode("nuevo item");
            li.appendChild(newtext);
			//innerHTML
			ul.innerHTML =  "<b>test</b>"//ul.innerHTML + '<li>nuevo item</li>';
			
        });
    });
}()); 