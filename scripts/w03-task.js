/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Declaration - addNumbers */
function addNumbers() {
    // Get values from HTML form controls with IDs add1 and add2
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    // Call the add function with the obtained values and assign the result to the HTML form element with ID sum
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add a "click" event listener to the HTML button with ID addNumbers
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtraction Feature */
var subtract = function(number1, number2) {
    return number1 - number2;
};

/* Function Expression - subtractNumbers */
var subtractNumbers = function() {
    // Get values from HTML form controls with IDs subtract1 and subtract2
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    // Call the subtract function with the obtained values and assign the result to the HTML form element with ID difference
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Add a "click" event listener to the HTML button with ID subtractNumbers
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiplication Feature */
var multiply = (number1, number2) => number1 * number2;

/* Arrow Function - multiplyNumbers */
var multiplyNumbers = () => {
    // Get values from HTML form controls with IDs factor1 and factor2
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    // Call the multiply function with the obtained values and assign the result to the HTML form element with ID product
    document.querySelector('#product').value = multiply(factor1, factor2);
};

// Add a "click" event listener to the HTML button with ID multiplyNumbers
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Function Expression - Subtract Numbers */
function divide(dividend, divisor) {
    // Check for division by zero
    if (divisor === 0) {
        alert("Cannot divide by zero!");
        return;
    }

    return dividend / divisor;
}

/* Arrow Function - Multiply Numbers */

/* Open Function Use - Divide Numbers */
function divideNumbers() {
    // Get values from HTML form controls with IDs dividend and divisor
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    // Call the divide function with the obtained values and assign the result to the HTML form element with ID quotient
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

// Add a "click" event listener to the HTML button with ID divideNumbers
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.getElementById('getTotal').addEventListener('click', function() {
    // Declare and instantiate a variable that stores the numeric value entered by the user in the subtotal field
    let subtotal = parseFloat(document.getElementById('subtotal').value);

    // User input validation is not required in this task, however, input validation is best practice.
    // Consider adding it as a stretch goal by checking that the input value is a valid, numeric amount.

    // Check IF the membership checkbox has been checked by the user to apply a 20% discount to the subtotal amount
    let isMember = document.getElementById('member').checked;

    // Output the total to the total span in the format shown with two decimals using a template string
    let total = isMember ? subtotal * 0.8 : subtotal;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
// Declare and instantiate an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById('array').textContent = numbersArray;

// Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of odds
document.getElementById('odds').textContent = numbersArray.filter(number => number % 2 === 1);

// Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of evens
document.getElementById('evens').textContent = numbersArray.filter(number => number % 2 === 0);

// Use the reduce() array method to sum the array elements and assign the result to the HTML element with an ID of sumOfArray
document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number, 0);

// Use the map() array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2);

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied
document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);