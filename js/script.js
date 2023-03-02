

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// ESERCIZIO 1 Palindroma

// Chiedere all’utente di inserire una parola
let userWord = document.getElementById('user-word');
let buttonCheck = document.getElementById('user-word-check');
let paliOutcome = document.getElementById('pali-outcome');

// creo l'evento al click del bottone
buttonCheck.addEventListener('click', function() {
    paliOutcome.innerHTML = paliWord(userWord.value);
})
// console.log(userWord);

// Creare una funzione per capire se la parola inserita è palindroma
function paliWord(word) {
    // debugger;
    // console.log(userWord);

    // controllo che la parola inserita sia valida ai fini del gioco
    if (!isNaN(word) || word == '' || word.length < 2) {
        return `Inserisci una parola valida`;
    } else {
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
}


//_________________________________________________________________


// ESERCIZIO 2 Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.


// creo variabili per ogni elemento HTML che mi serve manipolare
let userChoiceBinary = document.getElementById('user-choice-binary');
let userChoiceNumber = document.getElementById('user-choice-number');
let numbersButton = document.getElementById('generate-numbers');
let pcNumber = document.getElementById('pc-number');
let userNumber = document.getElementById('user-number');
let numbersSum = document.getElementById('numbers-sum');
let finalResults = document.getElementById('final-results');


// creo le variabili per la funzione del numero random
let min = 0;
let max = 5;

// creo l'evento al click del button
numbersButton.addEventListener('click', function() {
    // console.log(userChoiceNumber.value);

    // visualizzo in HTML i due numeri scelti dall'utente e dalla funzione
    let pcNumberRandom = pcRandomNumber(min, max);
    userNumber.innerHTML = `Il numero scelto dall'utente è: ${userChoiceNumber.value}`;
    pcNumber.innerHTML = `Il numero scelto dal computer è: ${pcNumberRandom}`;

    // creo la variabile somma
    let sum = parseInt(userChoiceNumber.value) + pcNumberRandom;
    console.log(sum);

    let finalSum = sumEvenOrOdd(sum);
    numbersSum.innerHTML = `La somma dei due numeri è: ${finalSum}`;

    if (userChoiceBinary.value == 'even' && finalSum == 'pari') {
        finalResults.innerHTML = `Complimenti, hai vinto!`;
    } else if (userChoiceBinary.value == 'odd' && finalSum == 'dispari') {
        finalResults.innerHTML = `Complimenti, hai vinto!`;
    } else {
        finalResults.innerHTML = `Ritenta, sarai più fortunato`;
    }


    
})


// creo funzione per generare numero random da 1 a 5
function pcRandomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min) + 1);
    return randomNumber;
}

function sumEvenOrOdd(number) {
    if(number % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}



