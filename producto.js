let cerrar = document.getElementById("close")
let menu = document.querySelector(".header__ul");
let botonMenu = document.querySelectorAll(".boton-menu");

list.addEventListener("click", () => {
    menu.classList.add("show");
    list.classList.add("off");
    cerrar.classList.remove("off")

    cerrar.addEventListener("click", () => {
        menu.classList.remove("show");
        list.classList.remove("off");
        cerrar.classList.add("off")
    })

})

botonMenu.forEach(boton => {
    boton.addEventListener("click", () => {
        menu.classList.remove("show");
        list.classList.remove("off");
        cerrar.classList.add("off")
    })
})



const productoElegido = JSON.parse(localStorage.getItem("producto-elegido"));
console.log(productoElegido)

let div = document.getElementById("contenedor")

productoElegido.forEach(producto => {
    div.innerHTML = `
<h3 id="titulo-principal">carro</h3>
<div class="superior">
    <div class="imagen">
        <div class="imagen-principal">
            <img src="${producto.imagen}" alt="">
        </div>

        <div class="imagenes__secundarias"><img src="${producto.imgS1}" alt=""></div>
        <div class="imagenes__secundarias"><img src="${producto.imgS2}" alt=""></div>
        <div class="imagenes__secundarias"><img src="${producto.imgS3}" alt=""></div>

    </div>

    <div class="informacion">
        <p>ancho: ${producto.categoria.ancho}</p>
        <p>alto:${producto.categoria.alto}</p>
        <p>peso:${producto.categoria.peso}</p>
           <p>caracteristicas: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos nam iusto,
               quis consequuntur asperiores. Maiores iusto similique, dignissimos enim quisquam reiciendis
               mollitia minima incidunt. Sit praesentium voluptas libero sed!</p>
           <button>saber mas</button>
       </div>
   </div>
</div>
   `

});