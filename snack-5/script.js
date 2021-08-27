// Crea due array che hanno un numero di elementi diversi.
var elementoUno = [24, 45, 36, 90, 55, 77];
var elementoDue = [3, 86, 54];
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.


while (elementoDue.length < elementoUno.length){
    var randomNumeri = Math.floor(Math.random() * 100);
    elementoDue.push(randomNumeri);
}

console.log(elementoDue);




