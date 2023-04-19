
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
        message: {
            required: true
        }
    },
});
