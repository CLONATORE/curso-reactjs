(function () {
    document.addEventListener("DOMContentLoaded", function(event) {
        let miFuncion = function(e) {
            console.log("has pulsado el botón 1");
        }
        document.getElementById("btn1").addEventListener("click", miFuncion );
		
		document.getElementById("mySelect").addEventListener("change", function(e){
			console.log("cambio el valor", e.target.value)
		});
        
        //document.getElementById("btn1").removeEventListener("click", miFuncion );
    });
}());


