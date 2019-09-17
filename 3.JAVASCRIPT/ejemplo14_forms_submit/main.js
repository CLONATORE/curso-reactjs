(function () {
    
    document.addEventListener("DOMContentLoaded", function(event) {
        let form  = document.getElementsByTagName('form')[0];
        let email = document.getElementById('mail');
        let nombre = document.getElementById('nombre');
        let error = document.querySelector('.error');
        form.addEventListener("submit", function (event) {
            error.innerHTML = "";
            if (!email.validity.valid) {
              error.innerHTML = "¡Yo esperaba una dirección de correo valida!";
              event.preventDefault();
              return;
            }
            if (!nombre.validity.valid) {
                error.innerHTML = "¡El nombre es invalido!";
                event.preventDefault();
                return;
            }
        });
    });

    
}()); 