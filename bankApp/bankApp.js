//task 1
// nested function/closure

function createBankAccount(name){
    let balance = 100;
    console.log(`Yey, Welcome ${name}!`)

    function depositAmount(amount){
        balance += amount;
        console.log("You deposit $" + amount + " your balance is now $" + balance)
    }
    
    function withdraw(amount){
        if(amount > balance){
            console.log("Invalid")
        }else if(amount <= balance){
            balance -= amount;
            console.log("you withdraw $" + amount + " your balance is now $" + balance)
        }
    }
    
    function checkBalance(){
        console.log(balance)
    }

    return {
        depositAmount,
        withdraw,
        checkBalance
    }
}
const bank = createBankAccount("jay jo")
bank.checkBalance()
bank.depositAmount(200)
bank.withdraw(300)



console.log("======================================================================")
//task 2
//callbacks

function createBankAccountII(name, balance, callBacks, amount ){     //main funtion
    console.log("Hi, " + name + "!")

    return callBacks(balance, amount);   
}

function depositAmountII(balance, amount){                         // Deposit Function
    if(!amount < 0){
        return console.log("invallid");
    }else{
        
        return console.log(balance += amount);

    }
}

function withdrawII(balance, amount){                               // withdraw Funtion
    if(amount > balance){
        return console.log("Invalid");
    }else if(amount <= balance){
        balance -= amount;
        return console.log("you withdraw $" + amount + " your balance is now $" + balance)
    }
}

function checkBalanceII(balance){                               // balance funtion
    return console.log("Your balance $" + balance)
}


createBankAccountII("john", 400, checkBalanceII)
createBankAccountII("john", 400, withdrawII, 20)
createBankAccountII("john", 400, depositAmountII, 100)
