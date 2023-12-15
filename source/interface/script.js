//*incializado de variables y elementos
let contenedor = document.querySelector(".contenedor_principal");
let etiquetaTamanio = document.querySelector("#etiqueta_tamanio");
let botonBorrar = document.querySelector(".borrador");
let colorPicker = document.querySelector(".selector_color")
var click = false;
var color = "grey";
var slider = document.querySelector("#slider_pixeles")
var tamanio = 32;
etiquetaTamanio.textContent = tamanio + " x " + tamanio;
crearPixeles(tamanio);

botonBorrar.addEventListener('click', ()=>{
    contenedor.innerHTML = '';
    crearPixeles(tamanio);
})
colorPicker.addEventListener("input", ()=>{
    color = colorPicker.value;
    console.log(color);
});
colorPicker.addEventListener("change", ()=>{
    color = colorPicker.value;
    console.log(color);
});

//*Propiedad de clickear 
document.body.onmousedown = () => (click = true);
document.body.onmouseup = () => (click = false);

//* Actualiza el valor del slider
slider.oninput = function() {
  tamanio = this.value;
  etiquetaTamanio.textContent = tamanio + " x " + tamanio;
  crearPixeles(tamanio);
}

//*Crea los divs
function crearPixeles(tamanio){
    contenedor.innerHTML = '';
    for(i = 0; i <= (tamanio*tamanio); i++){
        var pixel = document.createElement('div');
        pixel.className = "pixel";
        let tamanioPixel = 100/tamanio;
        pixel.style.width = tamanioPixel +"%";
        pixel.style.height = tamanioPixel +"%";
        listeners(pixel);
        contenedor.append(pixel);
    }
}

//*Añade listeners a los pixeles
function listeners(elemento){
    elemento.addEventListener('mouseover', function(){
        if(click){
            elemento.style.backgroundColor = color;
        }
    })
    elemento.addEventListener('click', function(){
        elemento.style.backgroundColor = color;
    })
}


