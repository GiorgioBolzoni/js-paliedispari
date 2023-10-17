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

        // variabili: messaggio da stampare,array e valore inserito dall'utente
        let msg;
        let parolaInserita = inputEl.value;
        let parolaInseritaEl = parolaInserita.toLocaleLowerCase().trim();

        // console.log(parolaInseritaEl)

        let reversed;
        for (let i = parolaInseritaEl.length - 1; i >= 0; i--) {
            console.log(parolaInseritaEl[i])
            //controllo che la parola sia palindroma
            // if (reversed += parolaInseritaEl[i]) {
            //     msg = reversed + ' è una parola palindroma!'
            //     console.log(msg)
            // } else {

            //     //se la parola inserita non è palindroma aggiungo in msg il messaggio di errore
            //     msg = 'NB: La parola inserita non è palindroma!'
            //     console.log(msg)
            // }


        }

        // console.log(arr.reverse)


        // //controllo che la parola sia palindroma
        // if (arr === arr.reverse) {

        //     msg = arr
        //     console.log(msg)


        // } else {

        //     //se la parola inserita non è palindroma aggiungo in msg il messaggio di errore
        //     msg = 'NB: La parola inserita non è palindroma!'
        //     console.log(msg)
        // }
    }
}

