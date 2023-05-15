const loginContainer = document.querySelector("[data-headerlogin]");

const loginnombrelog = document.querySelector("[data-headerNombre]");
const loginContainer1 = document.querySelector("[data-headerlogin1]");

const loginnombrelog1 = document.querySelector("[data-headerNombre1]");

const nombrexx = localStorage.getItem("nombrex");
const headerAdminContent = `<button id="login_btn"><a href="">Salir</a></button>`;
const headerClientContent = `<button id="login_btn"><a href="./login.html">Login</a></button>`;
const headerAdminContent1 = `<button id="login_btn1"><a href="">Salir</a></button>`;
const headerClientContent1 = `<button id="login_btn1"><a href="./login.html">Login</a></button>`;
const headerNombreContent = `<h2 id="nombre_log">Hola, ${nombrexx}</h2>`;
const headerNombreContent1 = `<h2 id="nombre_log">Hola, ${nombrexx}</h2>`;

function userLoggedIn() {
  const userEmail = localStorage.getItem("email");
  return userEmail != null;
}

function userLogout() {
  localStorage.removeItem("email");
  localStorage.removeItem("nombrex");
  window.location.reload();
}
if (userLoggedIn()) {
  loginnombrelog.innerHTML = headerNombreContent;
  loginContainer.innerHTML = headerAdminContent;
  document.getElementById("login_btn").addEventListener("click", userLogout);

  loginnombrelog1.innerHTML = headerNombreContent1;
  loginContainer1.innerHTML = headerAdminContent1;
  document.getElementById("login_btn1").addEventListener("click", userLogout);
} else {
  loginContainer.innerHTML = headerClientContent;
  loginnombrelog.innerHTML = `<h2 id="nombre_log">Hola, desconocido</h2>`;
  loginContainer1.innerHTML = headerClientContent;
  loginnombrelog1.innerHTML = `<h2 id="nombre_log">Hola, desconocido</h2>`;
}
