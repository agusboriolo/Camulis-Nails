//GALERÍA IMÁGENES
var num = 1;

function fotoAtras() {
    num--;
    if (num < 1)
    num = 10;
    var foto = document.getElementById("fotoGaleria");
    foto.src = "imagenes/unas" + num + ".jpg";
}

function fotoAdelante() {
    num++;
    if (num > 10)
    num = 1;
    var foto = document.getElementById("fotoGaleria");
    foto.src = "imagenes/unas" + num + ".jpg";
}


//CONTACTO
function validarForm() {
    const nombre = document.getElementById("nombre");
    const provincia = document.getElementById("provincia");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

 //Bordes rojos
if (nombre.value === "") {
    nombre.style.border = "2px solid red";
} else {
    nombre.style.border = "";
}

if (provincia.value === "") {
    provincia.style.border = "2px solid red";
} else {
    provincia.style.border = "";
}

if (email.value === "") {
    email.style.border = "2px solid red";
} else {
    email.style.border = "";
}

if (mensaje.value === "") {
    mensaje.style.border = "2px solid red";
} else {
    mensaje.style.border = "";
}

//Formulario envíado o incompleto
if (nombre.value !== "" && provincia.value !== "" && email.value !== "" && mensaje.value !== "") {
    alert("Formulario envíado"); 
    return true;
} else {
    alert("Faltan completar datos");
    return false;
}
    }