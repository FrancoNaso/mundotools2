const productos = [
    
]

let list = document.getElementById("list");
let cerrar = document.getElementById("close")
let menu = document.querySelector(".header__ul");
let botonesMenu = document.querySelector(".boton-menu");

list.addEventListener("click", ()=> {
menu.classList.add("show");
list.classList.add("off");
cerrar.classList.remove("off")

cerrar.addEventListener("click", ()=>{
    menu.classList.remove("show");
    list.classList.remove("off");
    cerrar.classList.add("off")
})

botonesMenu.array.forEach(element => {
    
});

})


