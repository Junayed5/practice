// find small to large number an array 
const arr = [9,5,10,7,3,6,2];

const number = arr.sort((a,b) => {
    return a - b;
});

// find small to large number an array 
const number2 = arr.sort((a,b) => {
    return b - a;
});

// End this part

// Generate a random number

const randomNumber = Math.random() * (10 - 1) + 1 ;

// to integer 
const integer = Math.floor(randomNumber)

// Filtering the name
const search = prompt("Enter your search!");
// console.log(search)

const array = ["junayed", "mozahid", "josim", "korim", "rohim"];

const data = arr.filter(value => search == value);
// console.log("Result:", data)

//finding the last number of array

console.log(arr[arr.length - 1])

