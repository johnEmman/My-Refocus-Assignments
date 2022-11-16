// Task 2. A restaurant menu

let restaurant = {
    "restaurantName" : "Jay Jo",
    "dishes" : [                                            // <== Task 1 :  array named “dishes”
        {
            "dishID" : 101,
            "dishName" : "Fries",
            "dishPrice" : 99,
            "ingredients" : ["Potato", "flour", "pepper", "salt"],
        },
        
        {
            "dishID" : 102,
            "dishName" : "Burger",
            "dishPrice" : 149,
            "ingredients" : ["Bun", "Sauce", "Tomatoes", "Cheese", "Meat", "Lettuce"],
        },
        
        {
            "dishID" : 103,
            "dishName" : "Pizza",
            "dishPrice" : 399,
            "ingredients" : ["Tomatoes", "Mint", "Onion", "Cheese", "Sausage", "Mushrooms", "Peppers"],
        }
    ],
    "displayRestaurantName" : function(){
        console.log(this.restaurantName)
    },
    "displayMenu" : function() {
        for(dish of this.dishes){
            console.log(dish)
        }
        // console.log(dishes)
    }
}
restaurant.displayRestaurantName();
restaurant.displayMenu();