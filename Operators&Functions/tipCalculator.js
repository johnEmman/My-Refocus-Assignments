// Task 2. Tip calculator

// You are asked to design an app that enables you to leave a tip. The tip should be
// 10% of a meal cost. Write a code that shows the total tip to be paid based on the
// food price.


function totalBill(params) {
    return (params / 100) * 10;
}
console.log(totalBill(10000))