let app = document.getElementById('typewriter');
let typewriter = new Typewriter(app, {
loop: true,
delay: 75,
});
typewriter
.pauseFor(2500)
.typeString('Viva el diseño web')
.pauseFor(200)
.deleteChars(10)
.start();

/* modal */
const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('correo')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

/* formulario */
const $d = document;

const nombre = $d.querySelector("#nombre");
const correo = $d.querySelector("#correo");
const mensaje = $d.querySelector("#mensaje");


const mostrarMensaje=(esValido,mensaje,elemento)=>{
    if (esValido){
        elemento.insertAdjacentHTML("afterend","<p class='valido'>"+mensaje+"</p>");
        let valido = $d.querySelector(".valido");
        setTimeout(() => {
            valido.remove();
        }, 5000);
    }else{
        elemento.insertAdjacentHTML("afterend","<p class='invalido'>"+mensaje+"</p>");
        let invalido = $d.querySelector(".invalido");
        setTimeout(() => {
            invalido.remove();
        }, 5000);
    }
}

// nombre 
const validateName = () => {
    const nombre = $d.querySelector("#nombre");
    let numeros = /[0-9]+/i;
    if (numeros.test(nombre.value) || nombre.value.length>80 ||nombre.value==" " || nombre.value=="") {
        mostrarMensaje(false,"¡No puede haber números, no puede estar vacío y como máximo 80 caracteres!",nombre);
       
            return false;
        
    }else{
        mostrarMensaje(true,"Nombre valido",nombre);
        return true;
    }
      
}

nombre.addEventListener("blur", validateName);

// email
const validarCorreo = () => {
    const correo = $d.querySelector("#correo");
    let emailValido =  /^[a-z0-9]+@{1}[a-z0-9-]+\.{1}[a-z]{2,15}$/i; 
   
    console.log (correo.value);
    console.log (emailValido.test(correo.value));
    if (!emailValido.test(correo.value)) {
        mostrarMensaje(false,"¡Correo Incorrecto! FORMATO: << loquesea@loquesea.loquesea >>",correo);
        return false;
        
    } else {
        mostrarMensaje(true,"Email valido",correo);
        return true;
    }

}

correo.addEventListener("blur", validarCorreo);

// mensaje
const validarMensaje = () => {
    const mensaje = $d.querySelector("#mensaje");
    if (mensaje.value.length<5 || mensaje.value=="" || mensaje.value==" ") {
        mostrarMensaje(false,"¡No puede estar vacío y al menos 5 caracteres!", mensaje);
        return false;
        
    } else {
        mostrarMensaje(true,"Mensaje valido",mensaje);
        return true;
    }

}

mensaje.addEventListener("blur", validarMensaje);

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function(e){
    if (!validatenombre() || !validarCorreo() || !validarTelefono() || !validarAsunto() || !validarMensaje()) {
        e.preventDefault();
    } 
})