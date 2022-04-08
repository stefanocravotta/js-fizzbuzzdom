
/* **Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100.
**MILESTONE 1**
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
**MILESTONE 2**
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
**MILESTONE 3**
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5 */

const container = document.querySelector('.container');
const limit = 100;

/* CICLO */

for(let i = 1; i <= limit; i++){
    const elBox = document.createElement('div')
    

    /* **MILESTONE 1** */
    
    const dividendo3 = 3;
    const dividendo5 = 5;

    if(i % dividendo3 === 0){
        elBox.append("Fizz")
    }else if(i % dividendo5 === 0){
        elBox.prepend("Buzz")
    }else {
        elBox.append(i)
    }

    if(i % dividendo3 ===0 && i % dividendo5 === 0 ){
        elBox.innerHTML = "FizzBuzz"
    }
    
    console.log(elBox);
}

