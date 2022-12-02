let invoiceList = ["Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005"];

function insertToBottom(i){
    if(i == 0){
        return invoiceList.push("Invoice 004", "Invoice 003", "Invoice 002", "Invoice 001");
    }
    else{
        return insertToBottom(i - 1)
    } 
}

insertToBottom(invoiceList.length)

//              =============================================              //

function reverseList(i){
    if(i == 0){
        return invoiceList.reverse()
    } else {
        return reverseList(i - 1);
    }
}

console.log(invoiceList.join(" "))

reverseList(invoiceList.length)

console.log(invoiceList.join(" "))

