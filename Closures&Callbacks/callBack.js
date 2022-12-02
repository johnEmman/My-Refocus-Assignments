const bankApplication = {
    main : function(name, balance, amount, callBack){
        console.log("HI " + name + "!")
        callBack(balance, amount)
    },

    depositAmount : function(balance, amount){
        if(!(amount < 0)){
            balance += amount;
            console.log("balance " + balance)
        }else{
            console.log("Invalid")
        }
    },

    checkBalance : function(balance){
        console.log("Balance:" + balance)
    },

    withDraw : function(balance, amount){
        console.log("Before:" + balance)
        console.log("=======================")
        if(!(amount > balance)){
            balance -= amount;
            console.log("Amount You Withdraw:" + amount)
            console.log("Balance:" + balance)
            
        }else{
            console.log("Invalid")
        }
    }
}
bankApplication.main("john", 1000, 500, bankApplication.checkBalance)