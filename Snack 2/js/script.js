// CREO ARRAY VUOTO//
let odd = [];

// APRO CICLO FOR//
for (i = 0; i < 6; i++) {
    let num = parseInt(prompt("Inserisci un numero"));


// IF //
if (num % 2 !== 0) {
    odd.push(num);

}
// CONSOLE//
console.log(odd)}