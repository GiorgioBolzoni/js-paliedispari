/* 
* Chiedere all’utente di inserire un numero da 1 a 5
* Il computer genera randomicamente un numero da 1 a 5
fare somma dei 2 numeri

prendere la somma
l'utente clicca su btn pari o btn dispari (entrambi i btn generano la somma)
se l'utente indovina se è pari/dispari vince
 msg = hai vinto
    
    
altrimenti perde
 msg = hai perso
stampo
 */

//chiamo funzione principale (main)


//prendo i diversi elementi (btn, input e div in cui stampare msg)
const divPC = document.getElementById('divComputer');
const btnPari = document.querySelector('.btn-pari');
const btnDispari = document.querySelector('.btn-dispari');


// console.log(inputEl);
// console.log(btn);
// console.log(resultEl);


//aggiungo eventListener al bottone
btnPari.addEventListener('click', function () {
    let inputEl = document.querySelector('input');
    const resultEl = document.querySelector('.alert');
    let valoreInserito = parseInt(inputEl.value)
    console.log(valoreInserito)
    const numberPC = getRndInteger(1, 100);
    let sumNum = valoreInserito + numberPC;
    // console.log(inputEl)
    divPC.innerHTML = numberPC;

    if (isNaN(valoreInserito)) {
        alert('Devi inserire un numero!');
    } else {
        if (sumNum % 2 === 0) {
            resultEl.innerHTML = `
            La somma è ${sumNum}
            <br>
            Hai vinto!
                `
            resultEl.classList.remove('d-none')

        } else {

            resultEl.innerHTML = `
            La somma è ${sumNum}
            <br>
            Hai perso!
                `
            resultEl.classList.remove('d-none')

        }
    }

    // console.log(sumNum)


});
btnDispari.addEventListener('click', function () {
    let inputEl = document.querySelector('input');
    const resultEl = document.querySelector('.alert');
    let valoreInserito = parseInt(inputEl.value)
    console.log(valoreInserito)
    const numberPC = getRndInteger(1, 100);
    divPC.innerHTML = numberPC;
    let sumNum = valoreInserito + numberPC;

    if (isNaN(valoreInserito)) {
        alert('Devi inserire un numero!');
    } else {
        if (!sumNum % 2 === 0) {
            resultEl.innerHTML = `
            La somma è ${sumNum}
            <br>
            Hai vinto!
                `;
            resultEl.classList.remove('d-none')
        } else {
            resultEl.innerHTML = `
            La somma è ${sumNum}
            <br>
            Hai perso!
                `
            resultEl.classList.remove('d-none')

        }
    }

    // console.log(sumNum)


});




