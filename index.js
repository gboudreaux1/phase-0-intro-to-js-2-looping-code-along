// Code your solutions in this file
const cardNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards(Cardnames, event) {
    let messages = []
    for (let i = 0; i < Cardnames.length; i++) {
      messages.push(`Thank you, ${Cardnames[i]}, for the wonderful ${event} gift!`)
    }
    return messages;
  }

 function countDown(positiveNumber) {
    while (positiveNumber >= 0) { 
        console.log(positiveNumber);
        positiveNumber--;
        
    }
 }