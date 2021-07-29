// Descrizione:

// Un alert() espone 5 numeri generati casualmente.

for(let i = 0; i < 5; i++){
    alert(getRandomNumberBetween(1,100)); 
}

// funzione get random;
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Da li parte un timer di 30 secondi.
let seconds = 5;

// function countdown;
function timer(){
    console.log(seconds);
    document.getElementById("countdown").innerHTML = seconds;
    if(seconds == 0){
        clearInterval(idInterval);
        document.getElementById("countdown").innerHTML = "Tempo scaduto";
    }
    seconds--;
}

// invoco la funzione setInterval e la salvo in una variabile;
let idInterval = setInterval(timer, 1000);


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


    for(let i = 0; i < seconds; i++){
        let userNumber = 0;
         userNumber = parseInt(prompt("inserisci un numero"));
         console.log(userNumber);
    }  


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

