// This is my journal about completing objects goals & challenges on alchemy

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

/*Given an array of pizza orders, return the total number of pizzas ordered.
  The orders are an array of objects, each with pizzas key inside:*/
const orders = [
    { pizzas: 3 },
    { pizzas: 5 },
    { pizzas: 10 }
];


function numberOfPizzas(orders) {
    let count = 0;
    for(let i = 0; i< orders.length; i++){
       
         count += orders[i].pizzas;
     
    }
    return count;
    
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//Modify the numberOfPizzas function to only count pizzas when the order.type is equal to ORDER_TYPES.PIZZA.

//ordersList-->

const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];


//orderType.js

const ORDER_TYPES = {
    PIZZA : 0,
    WRAPS : 2,
    CHIKEN_DRUMSTICK : 4,
    BURGERS : 1
    }

//numberOfPizzas.js

const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let total = 0;
    for(let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            total += orders[i].pizzas;
        }
    }
    return total;
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------







