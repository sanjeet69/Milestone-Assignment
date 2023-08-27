


// Genrate a random number 

const randomDecimal = Math.random();
console.log(`Random Decimal: ${randomDecimal}`);



// Genrate a random integer between min  and max 

function getRandomInti(min, max) {
    return Math.floor(Math.random()* (max - min + 1)+min);
}

const randomInti = getRandomInti(8,100)
console.log(`Random inti between 1 and  100: ${randomInti}`);



