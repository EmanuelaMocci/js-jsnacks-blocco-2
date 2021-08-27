// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
var somma = 0;

for ( var i = 0; i < 5; i++ ) {
    var numero = parseInt(prompt("Scegli un numero"));
    while (isNaN(numero)) {
        numero =parseInt(prompt("Attento! Inserisci un numero"));
    }
    var somma = somma + numero;
}
console.log(somma);


// Esegui questo programma in due versioni, con il for e con il while.
// var somma = 0;
// var i = 1;

// while (i <= 5){
//     var numero = parseInt(prompt("Scegli un numero"));
//     var somma = somma + numero;
//     i++
// }
// console.log(somma);

