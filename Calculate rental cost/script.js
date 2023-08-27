
     // rental cost----

function calculateRentalCost(daysRented, carType) {
    const dailyRates = {
        economy: 30,
        standard: 200,
        luxury: 500
    } ;
    const rentalCostPerDay = dailyRates[carType] || 0;
    
    if(!isNaN(daysRented) && daysRented >= 1 && rentalCostPerDay >0) {
        const  totalCost = rentalCostPerDay * daysRented;
        return totalCost;
    } else {
        return 0;
    }
}

const daysRented = 50;
const  carType = 'standard';
const totalCost = calculateRentalCost(daysRented, carType);
console.log(`Total cost for ${daysRented} days of ${carType} car rental: $${totalCost}`);