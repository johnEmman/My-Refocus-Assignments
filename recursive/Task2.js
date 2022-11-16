//task 2
const InvoiceList = [ "Invoice 008", "Invoice 007", "Invoice 006", "Invoice 005" ];

//insertToBottom, which adds invoices at the bottom of the list
function insertToBottom(n){
    if(n === 1){
        return 1;
        
    }else{
        InvoiceList.push("Invoice 004", "Invoice 003", "Invoice 002", "Invoice 001");
        insertToBottom(n + 1)
    }
}   
insertToBottom(0)


//reverseStack, which reverses the order of the invoices
function reverseList(n){
    if(n === 1){
        return 1;
        
    }else{
        InvoiceList.reverse();
        insertToBottom(n + 1)
    }
}



console.log(InvoiceList.join(" "));
reverseList(0);
console.log(InvoiceList.join(" "));


//I'm not sure po if tama po ang pag-edit code.  
// im coachable naman po.
