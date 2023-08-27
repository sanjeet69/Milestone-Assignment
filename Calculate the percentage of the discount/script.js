function calculateDiscountPercentage(orignalPrice, discountPrice) {

    if (orignalPrice > 0 && discountPrice > 0 && discountPrice < orignalPrice){
    const discountAmount =  orignalPrice - discountPrice ;
    const discountPercantage = (discountAmount / orignalPrice) * 100;
    return discountPercantage;
} else {
    return null;
}
}

const orignalPrice =200; 
const discountPrice = 80;
const discountPercantage = calculateDiscountPercentage(orignalPrice, discountPrice);


 if (discountPercantage !== null) {
    console.log(`Discount Percetage: ${discountPercantage.toFixed(2)}%`);
 } else {
    console.log("Invalid input")
 }