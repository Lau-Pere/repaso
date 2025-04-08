let personaje = "";
let estado = "";
let lugar = "";

const botones = document.querySelectorAll(".option");
const fraseElemento = document.getElementById("frase");

botones.forEach(function(boton) {boton.addEventListener("click", function() {
    const tipo = boton.getAttribute("data-type");
    const valor = boton.getAttribute("data-value");

        if (tipo === "personaje") {personaje = valor;
            document.querySelectorAll(".personaje").forEach(function(b) {b.classList.remove("selected");});}
            else if (tipo === "estado") {estado = valor;
            document.querySelectorAll(".estado").forEach(function(b) {b.classList.remove("selected");});}
            else if (tipo === "lugar") {lugar = valor;
            document.querySelectorAll(".lugar").forEach(function(b) {b.classList.remove("selected");});} 


        boton.classList.add("selected");

        if (personaje && estado && lugar) {
            fraseElemento.textContent = "Estaba " + personaje + " " + estado + " en " + lugar + "!";} 
            else {fraseElemento.textContent = "Selecciona un personaje, un estado de ánimo y un lugar para ver la frase.";}});});