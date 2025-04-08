let esSilla = prompt("¿Es una silla? (s/n)").toLowerCase();
let esIKEA = prompt("¿Es de IKEA? (s/n)").toLowerCase();

if (esSilla === "s") {
    if (esIKEA === "s") { alert("El mueble es: Silla IKEA");} 
    else { alert("El mueble es: Silla Mackintosh");}} 
else {
    if (esIKEA === "s") { alert("El mueble es: Mesa IKEA");} 
    else { alert("El mueble es: Mesa Roble");}}
