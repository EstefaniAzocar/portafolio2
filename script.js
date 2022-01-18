// definir las varibales
let menu = document.querySelector(".menu")
let abrir_menu_b = document.querySelector(".abrir_menu")
let cerrar_menu_b = document.querySelector(".cerrar_menu")

//funcion que abra y cierre
function toggleMenu() {
    menu.classList.toggle("menu_abierto")
}

//evento a la funcion o ejecutar
abrir_menu_b.addEventListener("click",toggleMenu);
cerrar_menu_b.addEventListener("click",toggleMenu);