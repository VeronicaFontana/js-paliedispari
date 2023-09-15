const parola = prompt("Inserisci una parola");
const parolaArr = parola.split("");
console.log(parolaArr);

if (parola.length % 2 === 0){
  const primaParte = parolaArr.slice(0, (parola.length / 2));
  const secondaParte = parolaArr.slice((parola.length / 2), parola.length);
  
  const reverse = secondaParte.reverse()

  const primaParola = primaParte.join(" ");
  const secondaParola = reverse.join(" ");

  if(primaParola === secondaParola){
    console.log("è palindroma")
  }else{
    console.log("non è palindroma")
  }
}else{
  const primaParte = parolaArr.slice(0, (parola.length / 2));
  const secondaParte = parolaArr.slice((parola.length / 2) + 1, parola.length);

  const reverse = secondaParte.reverse()

  const primaParola = primaParte.join(" ");
  const secondaParola = reverse.join(" ");

  if(primaParola === secondaParola){
    console.log("è palindroma")
  }else{
    console.log("non è palindroma")
  }
}

