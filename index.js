


//VARIABLES & DATA TYPES


let name = "Sam";
const age = 18;
var isStudent = true;

console.log(typeof name);      // string
console.log(typeof age);       // number
console.log(typeof isStudent); // boolean



// OPERATORS


let a = 10;
let b = 3;


console.log(a + b);   // addition
console.log(a - b);   // subtraction
console.log(a * b);   // multiplication
console.log(a / b);   // division
console.log(a % b);   // modulus



//CONDITIONAL STATEMENTS


function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));



//4. LOOPS


// for loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

// while loop
let count = 3;
while (count > 0) {
    console.log("While loop:", count);
    count--;
}

//FUNCTIONS

function add(x, y) {
    return x + y;
}

const multiply = (x, y) => x * y;

console.log(add(2, 3));
console.log(multiply(4, 5));



//ARRAYS


let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.pop();

console.log(numbers);

let doubled = numbers.map(n => n * 2);
let evens = numbers.filter(n => n % 2 === 0);

console.log(doubled);
console.log(evens);



//OBJECTS

let user = {
    username: "Sammy",
    skills: ["JavaScript", "HTML", "CSS"],
    isActive: true
};

console.log(user.username);
console.log(user.skills.join(", "));



//STRING METHODS


let message = "JavaScript is powerful";

console.log(message.toUpperCase());
console.log(message.includes("powerful"));
console.log(message.split(" "));



//BASIC ALGORITHMS


// Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


// Find max in array
function findMax(arr) {
    return Math.max(...arr);
}

console.log(findMax([5, 1, 9, 3]));



//ERROR HANDLING


try {
    let x = y + 1; // y is not defined
} catch (error) {
    console.log("Error caught:", error.message);
}



//PROMISES & ASYNC/AWAIT


function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();



//DOM BASIC 



