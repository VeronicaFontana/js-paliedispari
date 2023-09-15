const pariDispari = prompt("Scrivi pari o dispari");
const numero = parseInt(prompt("Scrivi un numero da 1 a 5"));

console.log(pariDispari)

if(pariDispari !== "pari" && pariDispari !== "dispari"){
  console.log("Devi scrivere pari o dispari");
}

if(numero < 1 || numero > 5){
  console.log("Il numero deve essere compreso fra 1 e 5");
}

const myRandom = randomizer(1, 5);
console.log(myRandom);


/**
 * 
 * @param {number} max 
 * @param {number} min 
 */
function randomizer(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}

const somma = myRandom + numero;

if(somma % 2 == 0 && pariDispari === "pari"){
  console.log("La somma è " + somma + " ed è pari. Vince il giocatore!");
}else if(somma % 2 == 0 && pariDispari === "dispari"){
  console.log("La somma è " + somma + " ed è dispari. Vince il giocatore!");
}else if(somma % 2 == 0 && pariDispari === "dispari"){
  console.log("La somma è " + somma + " ed è pari. Vince il computer!");
}else{
  console.log("La somma è " + somma + " ed è dispari. Vince il computer!");
}



