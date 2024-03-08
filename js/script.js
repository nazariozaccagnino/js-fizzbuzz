/*
*Consegna:*
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*BONUS 1:*
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
*BONUS 2:*
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
*/
// const wrapper = document.createElement('div');
// wrapper.className = 'd-flex justify-content-between align-content-center';
//const boxes = document.createElement('div');
//boxes.className = 'square';
//wrapper.setAttribute =('class, square');
//console.log(wrapper);
// const container = document.querySelector('.container');
// container.append(wrapper)

let buzz;
let fizzbuzz;
let box = document.createElement('div');
box.setAttribute('class','square')
const wrapper = document.querySelector('.container-fluid');
wrapper.className = 'd-flex flex-wrap'
// wrapper.append(box)


let maxnum = 100;
let tmpHtml = '';

for(let i = 1; i<=maxnum; i++){
    // console.log(i)
    if((i % 3 ===0)&&(i % 5 === 0)){
        tmpHtml += `<div class="square"> ${'fizzbuzz'} </div>`
    }
    else if (i % 3 === 0){
        // console.log(i, 'divisibile per 3')
        tmpHtml += `<div class="square"> ${'fizz'} </div>`        

    }else if(i % 5 === 0){
        // console.log(i, 'divisibile per 5')
        tmpHtml += `<div class="square"> ${'buzz'} </div>`
    }
    else{
        tmpHtml += `<div class="square"> ${i} </div>`
    }
    wrapper.innerHTML = tmpHtml;
}
