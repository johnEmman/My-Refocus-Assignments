let randomNum = '';
randomNum += Math.round(Math.random() * 9999);

const  dateCreated= new Date("October 13, 2014 11:13:00");




//task 1
let bankAccount = {             //i dont know what you mean by autogenerated(bankAccountID), so this is what i did 
    "bankAccountID" :"GE" + (Math.round(Math.random() * 99)) + "-"+ randomNum + "-" + randomNum + "-" + randomNum +"-"+(Math.round(Math.random() * 99)),
    "accountNumber" : 1234123412341234,
    "credentials" : ["ty.John", "helloWorld", "10110100"],
    "balance" : 500,
    "createdAt" :dateCreated 
}


//task 2
let myBackAcc = {
    "bankAccount" : bankAccount,
    "debitCard" : "BPI Debit Mastercard",
    "firstName" : "John Emmanuel",
    "lastName" : "Marco",
    "birthDate" : "Novomber 05, 2002",
    "validID" : ["Passport", "Driver's License", "Postal-ID" ],
    "address" : "New York"
}



// task 3
//getBankAccountDetails funtion
//which checks if the username and password are correct and shows the bank account details
function getBankAccountDetails(pwd, usrN){
    if(bankAccount.credentials[0] == usrN && bankAccount.credentials[1] == pwd){
        console.log(myBackAcc)
    }else{
        console.log("Access Denied!")
    }
}
getBankAccountDetails("helloWorld", "ty.John")


//withdrawMoney
//which checks if the username and password are correct and 
//enables getting money from the bank account using the account number
function withdrawMoney(pwd, usrN, accNum, amount){
    if(bankAccount.credentials[0] == usrN && bankAccount.credentials[1] == pwd){
        if(bankAccount.accountNumber == accNum){
            if(amount < bankAccount.balance){
                bankAccount.balance -= amount;
                console.log(bankAccount.balance)
            }
        }else{
            console.log("Wrong Bank Account Number")
        }
    }else{
        console.log("Access Denied")
    }
}
withdrawMoney("helloWorld", "ty.John", 1234123412341234, 200)



//depositMoney
//which allows putting money in the bank account using
//the account number
function depositMoney(amount, accNum){
    if(accNum == bankAccount.accountNumber){
        bankAccount.balance += amount;
        console.log(bankAccount.balance)
    }
}
depositMoney(700, 1234123412341234)

