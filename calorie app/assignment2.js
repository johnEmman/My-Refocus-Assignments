//task 1
console.log("calorie app");
function caloriesTrackingApp(minutes, days, calories){
    const totalCalories = days * calories;
    console.log(totalCalories)
}
caloriesTrackingApp(30, 15, 225);


//task 2
console.log("saving app")
function savingApp(){
    const goal = 10000;
    let balance = 7500; 
    
    console.log(`Thank you for your discipline and hardwork, Sam! You are now ${(goal - balance) / 100}% away from your goal of saving ₱${goal}`)    
}
savingApp();

//I'm not good at naming a variables. Sorry