
//parte del menu en mobile.
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
  aside.classList.add("aside-visible");
});

closeMenu.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
});

var elementos = document.getElementsByClassName("logo");

for (var i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
