// Login
document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

const form = document.querySelector("[data-login]");

let usuarios = [];
fetch("./js/usuarios.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    usuarios = data;
  })

  .catch((error) => console.error("Ocurrio un error", error));

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let userFound = false;
  let nombresesion = "";
  const inputEmail = document.querySelector("[data-email]").value;
  const inputPassword = document.querySelector("[data-pass]").value;
  usuarios.forEach(({ email, nombre, password }) => {
    console.log(nombre);
    console.log(email);
    console.log(password);
    console.log(inputEmail);
    console.log(inputPassword);

    if (
      email == inputEmail &&
      password == inputPassword &&
      (inputEmail != null) & (inputPassword != null)
    ) {
      console.log("usuario ok");
      userFound = true;
      nombresesion = nombre;
      return;
    }
  });
  if (userFound) {
    console.log("usuario ok");
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("nombrex", nombresesion);
    window.location.assign(`../tienda.html`);
    form.reset();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Correo y/o contraseña incorrecta!",
    });
  }
});
