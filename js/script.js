/* 
* Chiedere all’utente di inserire una parola
* Creare una funzione per capire se la parola inserita è palindroma
let msg;
prendere la stringa let parolaInserita
se è una stringa
    se la parola è palindroma msg = palindroma
    altrimenti msg = msg = la tua parola non è palindroma
    
altrimenti (se non è una stringa ma un numero)
 msg = errore
stampo
 */

//chiamo funzione principale (main)
parolaPali();


/**
 * Main Function 
 */
function parolaPali() {

    //prendo i diversi elementi (btn, input e div in cui stampare msg)
    const inputEl = document.getElementById('data');
    const btn = document.querySelector('button');
    const resultEl = document.querySelector('.alert');

    // console.log(inputEl);
    // console.log(btn);
    // console.log(resultEl);

    //aggiungo eventListener al bottone
    btn.addEventListener('click', printPali);

    /**
     * Funzione che parte al click sul bottone
     */
    function printPali() {

        // variabili: messaggio da stampare e valore inserito dall'utente
        let msg;
        let parolaInserita = inputEl.value;


    }
}

