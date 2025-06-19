document.getElementById("formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.getElementById("mensajeConfirmacion").style.display = "block";
    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert(' ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
});
