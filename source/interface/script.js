let contenedor = document.querySelector(".contenedor_principal");

for(i = 0; i <= (16*16); i++){
    let pixel = document.createElement('div');
    pixel.className = "pixel";
    contenedor.append(pixel);

}