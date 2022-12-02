// Task 2. Saving app

// You are now working on a finance app that helps users save money. To encourage
// users to continue saving, you are adding a feature to show how much money they
// have already saved.
// Suppose that Sam wants to save ₱10,000 and has already saved ₱7,500.


let goal = 10000;
let saved = 7500;
let percentageLeft = (1 - (saved / goal)) * 100;

console.log(percentageLeft.toFixed()+ "%");