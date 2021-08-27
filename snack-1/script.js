// Il software deve chiedere per 5 volte all’utente di inserire un numero.
var somma = 0;

for ( var i = 0; i < 5; i++ ) {
    var numero = parseInt(prompt("Scegli un numero"));
    var somma = somma + numero;
}
console.log(somma);


// Il programma stampa la somma di tutti i numeri inseriti.


// Esegui questo programma in due versioni, con il for e con il while.