const parolaUtente = prompt("Inserisci una parola");

palindroma(parolaUtente);

function palindroma(parola){
  const parolaArr = parola.split("");
  const primaParte = parolaArr.slice(0, (parola.length / 2));
  let secondaParte;
  
  if(parola.length % 2 === 0){
    secondaParte = parolaArr.slice((parola.length / 2), parola.length);
  }else{
    secondaParte = parolaArr.slice((parola.length / 2) + 1, parola.length);
  }
  
  const reverse = secondaParte.reverse()
  
  const primaParola = primaParte.join(" ");
  const secondaParola = reverse.join(" ");
  
  if(primaParola === secondaParola){
    console.log("è palindroma")
  }else{
    console.log("non è palindroma")
  }
}
