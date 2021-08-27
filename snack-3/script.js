// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

var nomi = ["Jennifer", "June", "Andrew"];
var cognomi = ["Smith", "Pitt", "Lawrence"];
var invitati = [];

for ( var i = 0; i < 3; i++){

    var randomNomi = [Math.floor(Math.random() * nomi.length)];

    var randomCognomi = [Math.floor(Math.random() * cognomi.length)];

    var nomeCompleto = nomi[randomNomi] + " " + cognomi[randomCognomi];
    invitati.push(nomeCompleto);
}
 
console.log(invitati);



