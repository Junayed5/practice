// find small to large number an array
const arr = [9, 5, 10, 7, 3, 6, 2];

const number = arr.sort((a, b) => {
  return a - b;
});

// find small to large number an array
const number2 = arr.sort((a, b) => {
  return b - a;
});

// End this part

// Generate a random number

const randomNumber = Math.random() * (10 - 1) + 1;

// to integer
const integer = Math.floor(randomNumber);

// Filtering the name
// const search = prompt("Enter your search!");
// console.log(search)

const array = ["junayed", "mozahid", "josim", "korim", "rohim"];

// const data = arr.filter((value) => search == value);
// console.log("Result:", data)

//finding the last number of array

arr[arr.length - 1];

//find max number

Math.max(1, 2, 3);
Math.min(1, 2, 3);

// finding the Max and Min number of array

Math.max.apply(null, [12, 434, 53, 65, 67]);
Math.min.apply(null, [12, 434, 53, 6567]);

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

// array object numeric sort

cars.sort((a, b) => {
  return a.year - b.year;
});

//finding array object string sorting

cars.sort((a, b) => {
  const x = a.type.toLocaleLowerCase();
  const y = b.type.toLocaleLowerCase();

  if (x > y) {
    return -1;
  }
  if (x < y) {
    return -1;
  }
  return 0;
});

// end

const countries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const country = await res.json();
  const name = country.map((c) => c.name.common);
  document.getElementById("name").innerHTML = name;
};

countries();

// array reduce method ----

const brothers = [
  { name: "Junayed", age: 20 },
  { name: "Bayjid", age: 25 },
  { name: "Neser", age: 23 },
];

const totalAge = brothers?.reduce((prev, current) => {
  return prev + current.age;
}, 0);

console.log(totalAge);

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((a, b) => a + b);
console.log(sum);

//---- end ----

//---Local storage--

const formSubmit = (event) => {

  event.preventDefault();

  const name = event.target["name"].value;
  const age = event.target["age"].value;
  let newAge = parseInt(age)

  const user = { name, age: newAge };
  const db = localStorage.getItem("users");
  const parseDb = JSON.parse(db);
  const newArr = [...parseDb, user];
  const arrJson = JSON.stringify(newArr);
  localStorage.setItem("users", arrJson);

  
};


