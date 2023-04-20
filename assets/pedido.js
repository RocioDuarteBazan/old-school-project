$(document).ready(function () {
  $("#pedido-form").validate({
    rules: {
      nombre: "required",
      direccion: "required",
      email: {
        required: true,
        email: true,
      },
      telefono: {
        required: true,
        digits: true
      },
      producto: {
        required: true,
        digits: true
      },
      cantidad: {
        required: true,
        digits: true
      }
    },
    messages: {
      nombre: "Por favor ingrese su nombre",
      direccion: "Por favor ingrese su dirección",
      email: {
        required: "Por favor ingrese su correo electrónico",
        email: "Por favor ingrese un correo electrónico válido"
      },
      telefono: {
        required: "Por favor ingrese su número de teléfono",
        digits: "Por favor ingrese solo números"
      },
      producto: "Ingrese un producto",
      cantidad: {
        required: "Por favor ingrese la cantidad",
        digits: "Por favor ingrese solo números"
      }
    },
  });
});
