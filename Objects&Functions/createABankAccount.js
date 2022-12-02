let userName = "johnEmman";
let pw = 11011011;
let accNum = 238232334893988

let bal = 212;



const userAccount = {
    bankAccount: {
        bankAccountID: 819,
        accountNumber: accNum,
        credentials: [userName, pw, pin],
        balance: bal,
        createdAt: "November 05, 2002"
    },
    debitCard: 2983108201,
    firstName: "John",
    lastName: "Marco",
    birthDate: "Nov 05, 2002",
    validID: ["ID—passport", "driver's license—"],
    address: "Lucena City",
    getBankAccountDetails: function(usrN, passw){
        let cred = this.bankAccount.credentials;
        if((cred[0] == usrN) && (cred[1] == passw)){
            console.log(this.bankAccount)
        }
    },
    withdrawMoney: function(usrN, passw, accN, amount){
        let cred = this.bankAccount.credentials
        if((cred[0] == usrN) && (cred[1] == passw)){
            if(this.bankAccount.accountNumber == accN){
                amount > bal ? console.log("Invalid") : console.log(bal -= amount)
            }
        }
    },
    depositMoney: function(accN, amount){
        if(accN == accNum){
            amount < 0 ? console.log("Invalid") : console.log(bal += amount)
        }
    }
}
