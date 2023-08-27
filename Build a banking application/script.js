

const customer =  {
    name: "Mohan",
    balance: 1000,
};

 

function deposit(amount){
     if(amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
     }else{
        console.log("Invalid amount for deposit.");
     }
}


function withdraw(amount) {
    if (amount > 0 && amount <= this.balance){
        this.balance -= amount;
        console.log(`Withraw $${amount}. New balance: $${this.balance}`);
    }else{
        console.log("Invalid amount for withdraw or  inufficient balance.");
    }
}


customer.deposit = deposit;
customer.withdraw = withdraw;



console.log(`Initial balance  for ${customer.name}: $${customer.balance}`);

customer.deposit(500);
customer.withdraw(453);

