// Crea un array di numeri interi
var numeri = [10, 15, 17, 24, 56, 78];
var numeriDispari = [];
var sum = 0;

// Fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

for (var i = 0; i < numeri.length; i++) {
    if(i % 2 === 1) { 
        numeriDispari.push(numeri[i]);
        sum += numeri[i];
    }
}
console.log(numeriDispari);
console.log(sum);





