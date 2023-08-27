const card = [ 5, 2, 1, 7];

function correctCardQuanties(cardArray) {
    const correctCard =cardArray.map(quantity => quantity * 2);
    return correctCard; 
}
 const correctCard = correctCardQuanties (card);
   

 console.log("original card: card");
 console.log('corrected card:',correctCard);