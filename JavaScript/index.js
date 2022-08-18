document.getElementById('mensaje-encriptado').value='';
document.getElementById('mensaje').value='';

var mensajeEncriptado=document.getElementById('mensaje-encriptado');
var parrafo=document.querySelector('.parrafo');
var contentBtn=document.querySelector('.content-btn');

var letras = ['e','i','a','o','u'];
var claves = ["enter","imes","ai","ober","ufat"];

var texto = document.getElementById('mensaje')

function encriptar() {
    let textoMinusculas = (texto.value).toLowerCase();
    let textoEcriptado;
    textoEcriptado = textoMinusculas.split('');
    for (let x = 0; x < textoEcriptado.length; x++) {
        for (let y = 0; y < letras.length; y++) {
            if (textoEcriptado[x]==letras[y]) {
                textoEcriptado[x]=claves[y];
            }
            
        }
    }
    
    ocultarElementos();
    mensajeEncriptado.value = textoEcriptado.join('');
    texto.value='';
}



function desencriptar() {
    var textoEncriptado = (texto.value).toLowerCase();
    var array = textoEncriptado.split(' ');
    for (let i = 0; i < array.length; i++) {  
        for (let j = 0; j < letras.length;) {
            if ((array[i].indexOf(claves[j])) != -1) {
                array[i] = array[i].replace(claves[j],letras[j])
            }else{
                j++;
            }
        }
    }
    let mensajeDesencriptado='';
    for (let y = 0; y < array.length; y++) {
        mensajeDesencriptado += array[y] + ' ';
    }
    ocultarElementos();
    mensajeEncriptado.value=mensajeDesencriptado;
}

function copiarAlPortapapeles() {
    let texto = document.getElementById('mensaje-encriptado');
    texto.select();
    texto.setSelectionRange(0,9999)
    document.execCommand('copy');
    texto.value='';

    mostrarElementos();
    texto.focus(); 
}

function mostrarElementos() {
    mensajeEncriptado.style='background-image:block';
    parrafo.style='display:block';
    contentBtn.style='display:none';
}

function ocultarElementos() {
    mensajeEncriptado.style='background-image:none';
    parrafo.style='display:none';
    contentBtn.style='display:block';
}


var txtSoloNumeros = document.getElementById("mensaje")
txtSoloNumeros.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[a-z,.ñ ]")
})

function validarTextoEntrada(input, patron) {
    var texto = input.value
    var letras = texto.split("")
    for (var x in letras) {
        var letra = letras[x]
        if (!(new RegExp(patron, "i")).test(letra)) {
            letras[x] = ""
        }
    }
    input.value = letras.join("")
}