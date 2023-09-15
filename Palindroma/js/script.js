const parola = prompt("Inserisci una parola");
const parolaArr = parola.split("");
console.log(parolaArr);

if (parola.length % 2 === 0){
  const primaParte = parolaArr.slice(0, (parola.length / 2));
  const secondaParte = parolaArr.slice((parola.length / 2), parola.length);
  
  const reverse = secondaParte.reverse()

  for(i = 0; i < (parola.length / 2); i++)
    if(primaParte[i] === reverse[i]){
      console.log("è palindroma")
    }else{
      console.log("non è palindroma")
    }
}else{
  const primaParte = parolaArr.slice(0, (parola.length / 2));
  const secondaParte = parolaArr.slice((parola.length / 2) + 1, parola.length);

  const reverse = secondaParte.reverse()

  for(i = 0; i < (parola.length / 2) - 1; i++)
    if(primaParte[i] === reverse[i]){
      console.log("è palindroma")
    }else{
      console.log("non è palindroma")
    }
}

