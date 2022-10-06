"use strict";

// x Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// x Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// x il prezzo del biglietto è definito in base ai km (0.21 € al km)
// x va applicato uno sconto del 20% per i minorenni
// x va applicato uno sconto del 40% per gli over 65.
// x L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const kmDesiderati = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
console.log(kmDesiderati);

const etaUtente = parseInt(prompt('Quanti anni hai?'));
console.log(etaUtente);


console.log(isNaN(kmDesiderati), isNaN(etaUtente));
if(isNaN(kmDesiderati) || isNaN(etaUtente)){
    alert('Puoi inserire solo numeri');
}


let prezzoKm = 0.21;

let prezzoFinale = 0;

let prezzoBiglietto = prezzoKm * kmDesiderati;
prezzoBiglietto = prezzoBiglietto.toFixed(2);
console.log(prezzoBiglietto);


if(etaUtente < 18){
     prezzoFinale = (prezzoBiglietto * 20) / 100;
     prezzoFinale = prezzoFinale.toFixed(2);
     alert('Sei minorenne, hai uno sconto del 20%!');
     console.log (prezzoFinale);
  }  else if(etaUtente > 65){
         prezzoFinale = (prezzoBiglietto * 40) / 100;
         prezzoFinale = prezzoFinale.toFixed(2);
         alert('Hai più di 65 anni, hai uno sconto del 40%!');
         console.log (prezzoFinale);
    } else{
         prezzoFinale = prezzoBiglietto;
         console.log(prezzoFinale);
    }


let elemento = document.getElementById('risultato');
elemento.innerHTML = 'Prezzo del biglietto: ' + prezzoFinale + ' €';

let elemento2 = document.getElementById('eta-utente');
elemento2.innerHTML = 'La tua età: ' + etaUtente;

let elemento3 = document.getElementById('km-desiderati');
elemento3.innerHTML = 'I chilometri che vuoi percorrere: ' + kmDesiderati;









