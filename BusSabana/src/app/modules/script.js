document.getElementById("btn__register").addEventListener("click", register);



var formulario_login_register =document.querySelector(".contenerdor__login_register");
var formulario_login =document.querySelector(".formulario__login");
var formulario_register =document.querySelector(".formulario__register");
var caja_trasera_login =document.querySelector(".caja_trasera-login");
var caja_trasera_register =document.querySelector(".caja_trasera-register");

function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left ="410px";
    formulario_login.style.display ="none";
    caja_trasera_register.style.opacity ="0";
    caja_trasera_login.style.opacity ="1";
}