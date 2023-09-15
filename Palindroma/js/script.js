const parola = prompt("Inserisci una parola");

if (parola.length % 2 === 0){
  const parolaArr = parola.split("");
  console.log(parolaArr);

  const primaParte = parolaArr.slice(0, (parola.length / 2));
  const secondaParte = parolaArr.slice((parola.length / 2), parola.length);
  console.log(primaParte)
  console.log(secondaParte)
  
  const reverse = secondaParte.reverse()
  console.log(reverse)

  for(i = 0; i < (parola.length / 2); i++)
    if(primaParte[i] === reverse[i]){
      console.log("è palindroma")
    }else{
      console.log("non è palindroma")
    }
}

