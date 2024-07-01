//Dichiaro una costante a cui assegno un valore con metodo prompt in cui chiedo all'utente di inserire 4 cifre//
const userNumber = prompt("Inserisci un numero di 4 cifre")

//Uso il metodo split("") salvando il risultante array in una variabile//
let split = userNumber.split("");

if(split.length !== 4) {
    console.log("Il numero inserito non è valido")
} 

else {

// Dichiaro una variabile per la somma, inizializzandola a 0
    let somma = 0;
// Ciclo ogni cifra inserita fino alla lunghezza dell'array risultante dallo split()
    for(let i=0; i < split.length; i++) {
// Dichiaro una variabile per trasformare i caratteri in numeri
        let splitNumber = parseInt(split[i]);
// Per ogni iterazione, aggiungo il valore di ogni numero alla somma
        somma += splitNumber
    }   
//  Stampo il risultato sulla console 
    console.log(`La somma totale dei numeri da te inserita è ${somma}`)
}