let stock = 150;

while (stock > 0) {
    let regalosRepartidos = parseInt(prompt("¿Cuántos regalos has repartido hoy?")); // Pregunta a Papá Noel
    
    if (regalosRepartidos > stock) {
        alert("No puedes repartir más de lo que queda: " + stock);
    } else {
        stock = stock - regalosRepartidos;
        alert("Quedan " + stock + " regalos");
        
        if (stock < 100 && stock > 0) {
            alert("Ojo, quedan menos de 100 regalos");
        }
    }
}

alert("Misión cumplida. ¡Hasta el año que viene!");