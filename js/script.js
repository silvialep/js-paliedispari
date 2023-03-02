
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// Palindroma

// Chiedere all’utente di inserire una parola
let userWord = prompt('Inserisci una parola');

// Creare una funzione per capire se la parola inserita è palindroma
function paliWord() {
    // debugger;
    // console.log(userWord);

    // creo variabile per dividere gli elementi della stringa
    let wordSplit = userWord.split('');
    // console.log(wordSplit);

    // creo variabile per invertire gli elementi della stringa
    let word = wordSplit.reverse();
    // console.log(word);

    // creo variabile per riunire gli elementi della nuova stringa invertita
    let inverseWord = word.join('');
    // console.log(inverseWord);

    // verifico che le due parole siano uguali e stampo a console il risultato
    if(userWord == inverseWord) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }

}

paliWord();