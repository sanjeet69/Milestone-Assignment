function calculateTotalBill(costPerDish,  numberOfPeople) {
  if (!isNaN(costPerDish) && !isNaN(numberOfPeople) && costPerDish >= 0 && numberOfPeople) {
    const totalBill = costPerDish * numberOfPeople;
    const billPerPerso = totalBill / numberOfPeople;
    const billDetails = {
      totalBill: totalBill,
      billPerPerso: billPerPerso
    
  };
  return billDetails;

} else {
  return null;
}
}

const  costPerDish = 22;
 const numberOfPeople = 5;
  const billInfo = calculateTotalBill(costPerDish, numberOfPeople);

  if (billInfo !== null) {
    console.log(`Total Bill: $${billInfo.totalBill.toFixed(2)}`);
    console.log(`Bill per perso: $${billInfo.billPerPerso.toFixed(2)}`);
  }else {
    console.log("Please enter valid values.");
  }