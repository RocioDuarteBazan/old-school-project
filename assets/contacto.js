
// Validación del formulario
$("#contacto-form").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 4
        },
        apellido: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            email: true
        },
        mensaje: {
            required: true
        }
    },
    messages: {
        nombre: "Por favor ingrese su nombre",
       apellido: "Por favor ingrese su apellido",
        email: {
          required: "Por favor ingrese su correo electrónico",
          email: "Por favor ingrese un correo electrónico válido"
        },
        mensaje: "Ingrese su duda"
    }
});
