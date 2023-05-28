document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);

document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);
var btnreg = document.getElementsByClassName("btnreg");
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


form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let userFound = false;
  let nombresesion = "";
  const ListarUsuarios = async () => {
    try {
      const response = await fetch("https://sheetdb.io/api/v1/xkc58vohznlmm");
      const data = await response.json();
      console.log(data);
      usuarios = data;
      const inputEmail = document.querySelector("[data-email]").value;
      const inputPassword = document.querySelector("[data-pass]").value;
      usuarios.forEach(({ email, nombre, password }) => {
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
    } catch (error) {
      console.error("Ocurrió un error", error);
    }
  };
  ListarUsuarios();
});

const formreg = document.querySelector("[data-reg]");

formreg.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const inputNombrereg = document.querySelector("[data-nombrereg]").value;
  const inputEmailreg = document.querySelector("[data-emailreg]").value;
  const inputPasswordreg = document.querySelector("[data-passreg]").value;
  CrearUsuario(inputNombrereg, inputEmailreg, inputPasswordreg);
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'registrado con Exito!',
    showConfirmButton: false,
    timer: 2000
  })
  formreg.reset();
  iniciarSesion();
});

const CrearUsuario = (nombre, email, password) => {
  fetch("https://sheetdb.io/api/v1/xkc58vohznlmm", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          nombre: nombre,
          email: email,
          password: password,
          id: uuid.v4(),
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};


