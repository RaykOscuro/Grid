const users = [
  {
    firstName: "Julian",
    lastName: "Hernandez",
    age: 25,
    friends: ["Batman", "Catwomen", "Joker"],
    hobbies: ["Coding", "Gaming", "Reading"],
    address: {
      street: "123 Street",
      city: "Gotham",
      state: "NY",
      postalCode: "12345",
    },
  },
  {
    firstName: "Jennifer",
    lastName: "Lopez",
    age: 25,
    friends: ["Birdman", "Pikatchu", "Joker"],
    hobbies: ["Coding", "Sports", "Reading", "Gaming", "Movies"],
    address: {
      street: "Street 123",
      city: "Hollywood",
      state: "CA",
      postalCode: "54321",
    },
  },
  {
    firstName: "Bryan",
    lastName: "Cranston",
    age: null,
    friends: ["Birdman", "Pikatchu", "Joker"],
    hobbies: [],
    address: {
      street: "Street 123",
      city: "Hollywood",
      state: "CA",
      postalCode: "54321",
    },
  },
];
console.log(users[0].firstName, users[0].address);
console.log(users[1].hobbies[2], users[1].address.postalCode);
console.log(users[2].age, users[2].friends[2], users[2].firstName);

// functions

function sayHelloTo(name = "Stranger") {
  console.log(`Hello ${name}!`);
}

function makeCoffee(size = "medium", typeOfCoffee = "black", ingredients = []) {
  console.log(
    `Making some coffee: The size is ${size}, the type is ${typeOfCoffee} and 
    the ingredients are ${ingredients.join(", ")}.`
  );
}

function add(num1,num2){
  console.log(`Addition: ${num1} + ${num2} = ${num1+num2}`);
  return num1 + num2;
}

function subtract(num1,num2){
  console.log(`Subtraction: ${num1} - ${num2} = ${num1-num2}`);
  return num1 - num2;
}

function multiply(num1,num2){
  console.log(`Multiplication: ${num1} * ${num2} = ${num1*num2}`);
  return num1 * num2;
}

function divide(num1,num2){
  console.log(`Division: ${num1} / ${num2} = ${num1/num2}`);
  return num1 / num2;
}

function totalResult(num1,num2,mathFunction){
  const result = mathFunction(num1,num2);
  console.log(`Result: ${result}`);
  return result;
} 

// sayHelloTo();
// sayHelloTo("Julian");
// makeCoffee("small", "cappuccino", ["sugar", "cinnamon"]);

/*
const sum1 = add(3,4);
const sum2 = add(5,6);
const totalSum = add(sum1,sum2);
console.log(totalSum);
*/

// Arrow Functions
const addArrow = (num1,num2) => {
  return num1 + num2;
}

function clicked() {
  console.log("clicked");
}

const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
  console.log("click");
})

const testObj = {
  myMethod: () => {
    return "bla bla too hard!";
  }
}

const test = testObj.myMethod();
console.log(test);

addArrow(1,4);
//add(9,3);
//subtract(9,3);
//multiply(9,3);
//divide(9,3);
const resultArrow = addArrow();
console.log(resultArrow);
console.log("Hi!")