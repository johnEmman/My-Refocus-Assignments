let menu = {
    restaurantName: 'JeSM',
    dishes : [
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
    displayRestaurantName: function (){
        console.log(this.restaurantName)
    },
    displayMenu: function(){
        this.dishes.forEach((e) => {
            console.log(e);
        })
    }
}

menu.displayRestaurantName();
menu.displayMenu()



