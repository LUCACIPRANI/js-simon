//  Un alert() espone 5 numeri generati casualmente.
let rdmArray = [];
let numberToGenerate = 5;

for(let i = 0; i < numberToGenerate; i++){
    rdmArray.push(getRandomNumberBetween(1,100));
}

console.log(rdmArray);
document.getElementById("randomN").innerHTML = rdmArray;
alert(rdmArray);

// funzione getRandom;
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Da li parte un countdown di 30 secondi.

// invoco la funzione setInterval e la salvo in una variabile;
let idInterval = setInterval(countdown, 1000);
let seconds = 5;

// function countdown;
function countdown(){
    console.log(seconds);
    document.getElementById("countdown").innerHTML = seconds;
    if(seconds == 0){
        clearInterval(idInterval);
        document.getElementById("countdown").innerHTML = "Tempo scaduto";
    }
    seconds--;
}

//  Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
userArray = [];

function funzioneProva() {
    for(let i = 0; i < numberToGenerate; i++){
        let userNumber = parseInt(prompt("inserisci un numero"));
        userArray.push(userNumber);
    }  
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

    for (let i = 0; i < userArray.length; i++) {
        if(rdmArray.includes(userArray[i])){   // includes
            console.log("numero indovinato" + userArray[i]);
        } 
    }
}

setTimeout(funzioneProva, 6500);

console.log(userArray);
document.getElementById("randomU").innerHTML = userArray;