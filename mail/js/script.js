/* 
*Mail*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
 */


var nome = prompt('Come ti dobbiamo chiamare?');

var elencoMail = [
  "giovanna@libero.1",
  "giacomo@libero.2",
  "aldo@libero.3",
  "giovanni@libero.4",
  "emanuele@libero.5",
  "ruggero@libero.6"
]

var mailIdentificata = prompt('favorisca la mail')

var trovata = false;

for(var i=0; i<elencoMail.length; i++){
  var mail = elencoMail[i];
  
  if( mailIdentificata === mail ){
    trovata = true
    console.log("TROVATO");
    break;
  }
}
if(trovata){
  console.log("Sei dei nostri BRUH")
}else{
  console.log("666 FUORI cocco")
}

document.getElementById("output").innerHTML=" Bella " + nome + " 666 dei nostri";