/*
The story: You are Ahmed, a broke university student.
It's 2 AM. You ordered pizza 45 minutes ago. The delivery guy, Khaled, just called — his GPS died and he's lost.
Your mission: write a JavaScript program to help Khaled deliver your pizza before it turns into a frisbee.
*/

//Values & Variables

let studentName="Ahmed";
const pizzaFlavor="pepperoni";

//Data Types

let hungerLevel=10;
let  isPizzaHot=true;
let deliveryAddress="Cairo";

//Log each one with typeof 

console.log(typeof(hungerLevel));
console.log(typeof(isPizzaHot));
console.log(typeof(deliveryAddress));

//Type Conversion & Coercion

let orderTotal="85";
const tip=15;
let extraPound = Number(true); 
let convertedCost = Number(orderTotal);
let totalBill = convertedCost + tip + extraPound;
console.log(`Total : ${totalBill}`);

//Basic Operators

let minutesWaiting = 45 + 15;

if (minutesWaiting %2==0)

    console.log("minutesWaiting is even"); 

else
    console.log("minutesWaiting is odd");

//Operator Precedence

//2 + 3 * 4 - 1
//3*4 =12,2+12=14,14-1=13
console.log("the result 2 + 3 * 4 - 1 is =" ,2 + 3 * 4 - 1);
//(2 + 3) * (4 - 1)
//2+3=5,4-1=3,5*3=15;
console.log("the result (2 + 3) * (4 - 1) is =" ,(2 + 3) * (4 - 1));

// If / Else Statements

if (isPizzaHot&&hungerLevel > 7 )
    console.log("OPEN THE DOOR AND SPRINT");
else if(hungerLevel<=7&&hungerLevel>=5)
    console.log("Walk, you have dignity");
else
    console.log("Order sushi next time");

//Statements & Expressions

// this is an Expression because it produces a value
45 + 15;

//this is a statement because it performs an action 
if (minutesWaiting > 30) {
    console.log("the pizza is going to arrive cold");
}

/* Explanation & Comparison:
    Expression is a piece of code that the computer evaluates to produce a single value at the end
    Statement acts as a complete command that tells the computer to perform an action and it cannot be stored inside a variable
*/

// Strings

console.log("the result Call .toUpperCase() is ",pizzaFlavor.toUpperCase() );
console.log("the length is ",pizzaFlavor.length );
console.log(pizzaFlavor.includes("pepper"))

//Template Literals

console.log(`the full order summary : \n the name ${studentName}\n the pizzaFlavoris ${pizzaFlavor}\n the totalBill is ${totalBill} EGP\n the time is ${minutesWaiting} minutes`);

//Intro to Arrays & Objects

let arrToppings=["pepperoni","extra cheese", "chili flakes"];
let order={
    customer:studentName,
    flavor :pizzaFlavor,
    isDelivered:false
}

// Pizza arrives

order.isDelivered = true;

// Functions & Arrow Functions

// This function calculates the final order price by adding the pizza cost and the tip
function calculateTotal( price, tip){
    return price + tip;
}
 
const calculateTotalArrow = (price, tip) => price + tip;

console.log(calculateTotal(85, 15));
console.log(calculateTotalArrow(85, 15));

//Loops

const deliveryList = ["Ahmed", "Sara", "Mona", "Tarek"];

for (let i = 0; i < deliveryList.length; i++) {

    console.log(`Delivering to ${deliveryList[i]}`);
    if (deliveryList[i] === "Ahmed") {
        break; 
        }
    }







