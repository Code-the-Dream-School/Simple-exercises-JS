/* Example Challenge
 * Print out "hello world" in the console
 *
 * Steps:
 * 1. Use `console.log` to print out "hello world"
 *
 * Example Output: "hello world"
 */

console.log('hello world')

/* Challenge #1
 * Create a variable and print the value
 *
 * Steps:
 * 1. Create a variable and assign it any value
 * 2. Use `console.log` to print out your variable
 *
 * Example Output: n/a
 */

 var greeting = "Hello there!";
 console.log(greeting);

/* Challenge #2
 * Create variables for your first and last name then print your full name
 *
 * Steps:
 * 1. Create a variable called `firstName` and assign your first name as the string value
 * 2. Create a variable called `lastName` and assign your last name as the string value
 * 3. Use `console.log` to print out your full name (make sure there's a space!)
 *
 * Example Output: "Elizabeth Thompson"
 */

 var firstName = "Sheila ";
 var lastName = "Hernandez";
 // firstName+=lastName;
 console.log(firstName + " " + lastName);


/* Challenge #3
 * Calculate the total price rounded to two decimals
 *
 * Steps:
 * 1. Create a variable called `price` and assign a float value (ex. 9.98)
 * 2. Create a variable called `quantity` and assign an integer value (ex. 5)
 * 3. Create a variable called `total` and assign the value of `price` multiplied by `quantity`
 * 4. Use `console.log` to print out the `total` (rounded to the nearest two decimals)
 *
 * Example Output: "$49.90"
 */

 let price = 9.98;
 let quantity = 5;
 let total = price * quantity;
 console.log(total.toFixed(2));


/* Challenge #4
 * Declare a variable and conditionally assign it a value
 *
 * Steps:
 * 1. Create a variable called `weather` and assign "Rainy" as the string value
 * 2. Declare a variable called `message` and don't assign it a value
 * 3. Create a conditional statement that checks if `weather` is equal to "Sunny"
 * 4. If `weather` meets the condition above, then set `message` equal to "Yay! It's sunny outside"
 * 5. Add an `else` clause that sets `message` equal to "Aww! It's not sunny outside"
 * 6. Use `console.log` to print out the value of `message`
 *
 * Example Output: "Aww! It's not sunny outside"
 */

 let weather = "Rainy";
   let message ="";
   if ( weather === "Sunny") {
     message = "Yay! It's sunny outside";
   }else
     console.log(message = "Aww! It's not sunny outside");

/* Challenge #5
 * Create a function that returns any string
 *
 * Steps:
 * 1. Create a function called `myFunction` using the function keyword
 * 2. Add a return statement in your function which returns a random string
 * 3. Use `console.log` to print out the output of `myFunction()`
 *
 * Example Output: "I called a function!"
 */


 function myFunction() {
   return "I called a function!";
 }
  console.log(myFunction());

/* Challenge #6
 * Rewrite the function in Challenge #5 as an arrow function
 *
 * Steps:
 * 1. Create a function called `myArrowFunction` using the arrow syntax
 * 2. Add a return statement in your function which returns a random string
 * 3. Use `console.log` to print out the output of `myArrowFunction()`
 *
 * Example Output: "I called an arrow function!"
 */

 // const myArrowFunction = () => {
 //   return "I called an arrow function!";
 // };
 // console.log(myArrowFunction());

 // const myArrowFunction = string => string;
 // console.log(myArrowFunction("I called an arrow function!"));

 const myArrowFunction = string => {
   return string;
 };
 console.log(myArrowFunction("I called an arrow function!"));

/* Challenge #7
 * Create a function that accepts a string argument and returns it in all uppercase
 *
 * Steps:
 * 1. Create a function called `stringToUpper`
 * 2. Add a parameter called `str` in your function signature
 * 3. Add a return statement in your function which returns the input string in all uppercase letters
 * 4. Use `console.log` to print out the output of `stringToUpper(str)`
 *
 * Example Output: "WHY AM I SCREAMING"
 */

 function stringToUpper(str) {
   return str.toUpperCase();
 }
 console.log(stringToUpper("Why am I screaming"));
/* Challenge #8
 * Create a function that accepts a number argument and returns double its value
 *
 * Steps:
 * 1. Create a function called `multiplyByTwo`
 * 2. Add a parameter called `number` in your function signature
 * 3. Add a return statement in your function which returns `number` times two
 * 4. Create a variable called `num1` and assign it to the result of `multiplyByTwo(1)`
 * 5. Create a variable called `num2` and assign it to the result of `multiplyByTwo(5)`
 * 6. Create a variable called `num3` and assign it to the result of `multiplyByTwo(10)`
 * 7. Use `console.log` to print out the value of `num1`, `num2`, and `num3`
 *
 * Example Output: 2, 10, 20
 */


 function multiplyByTwo(number) {
   return number * 2;
 }
 let num1 = multiplyByTwo(1);
 let num2 = multiplyByTwo(5);
 let num3 = multiplyByTwo(10);

 console.log(num1, num2, num3);
