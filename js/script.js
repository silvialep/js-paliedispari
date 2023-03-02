

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// ESERCIZIO 1 Palindroma

// Chiedere all’utente di inserire una parola
let userWord = document.getElementById('user-word').value;
let buttonCheck = document.getElementById('user-word-check');
let paliOutcome = document.getElementById('pali-outcome');

buttonCheck.addEventListener('click', function() {
    paliOutcome.innerHTML = paliWord(userWord);

})
// console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
function paliWord(word) {
    // debugger;
    // console.log(userWord);

    // creo variabile per dividere gli elementi della stringa
    let wordSplit = word.split('');
    // console.log(wordSplit);

    // creo variabile per invertire gli elementi della stringa
    let newWord = wordSplit.reverse();
    // console.log(word);

    // creo variabile per riunire gli elementi della nuova stringa invertita
    let inverseWord = newWord.join('');
    // console.log(inverseWord);

    // verifico che le due parole siano uguali e stampo a console il risultato
    if(word == inverseWord) {
        return `La parola ${word} è palindroma`;
    } else {
        return `La parola ${word} non è palindroma`;
    }
    
}


//_________________________________________________________________


// ESERCIZIO 2 Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.

let userChoice = document.getElementById('user-choice').value;
let userNumber = document.getElementById('user-number').value;
let numbersButton = document.getElementById('generate-numbers');
let pcNumber = document.getElementById('pc-number');

// let sum = 
let min = 0;
let max = 5;

numbersButton.addEventListener('click', function() {
    pcNumber.innerHTML = pcRandomNumber(min, max);
})
// creo funzione per generare numero random da 1 a 5
function pcRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) + 1);
    return `Il numero scelto dal computer è: ${randomNumber}`;
}