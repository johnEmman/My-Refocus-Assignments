const bankApplication = {
    balance : 100,
    createBankAccount : function(name){
        console.log("hi " + name + "!")
        let bal = this.balance;
        
        function depositAmount(amount){
            if(!(amount < 0)){
                bal += amount;
                console.log("balance " + bal)
            }else{
                console.log("Invalid")
            }
        }

        function checkBalance(){
            console.log("Balance:" + bal)
        }

        function withDraw(amount) {
            if(!(amount > bal)){
                bal -= amount;
                console.log("Amount:" + amount)
                console.log("Balance:" + bal)
                
            }else{
                console.log("Invalid")
            }
        }

        
        return {
            depositAmount,
            checkBalance,
            withDraw
        };
    }
}


let bank = bankApplication.createBankAccount("john");
bank.withDraw(100)
