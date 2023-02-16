"use strict"
let menuResponsivo = document.querySelector(".menuResp");
menuResponsivo.addEventListener("click",gestionarMenuResponsivo);

function gestionarMenuResponsivo(evento) {
    evento.preventDefault();//muy importante, si no no aparece, también he visto poner en el href del html del a class="menuResp": javascript:void(0);
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }