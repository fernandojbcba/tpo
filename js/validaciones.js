const inputs = document.querySelectorAll("input");
let enviaForm = document.getElementById("formsubmit");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMissing",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacio",
    typeMissing: "El correo no es valido",
  },
  Comentario: {
    valueMissing: "El campo comentario no puede estar vacio",
    typeMissing: "El correo no es valido",
  },
};

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
console.log(enviaForm);

enviaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  envioConcluido();
  enviaForm.reset();
});
function envioConcluido() {
  Toastify({
    text: "mensaje enviado",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #4b33a8, #785ce9)",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: ".75rem",
    },
    offset: {
      x: "2rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
      y: "2rem", // vertical axis - can be a number or a string indicating unity. eg: '2em'
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
