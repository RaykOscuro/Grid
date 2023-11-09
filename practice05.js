const [slideLeft, slideRight] = document.querySelectorAll("button");
console.log(slideLeft, slideRight);
const arr = [1, 2, 3, 4, 5];

const [one, two, three, ...restOfNum] = arr;
console.log(restOfNum);
console.log(one, two, three); // 1 2 3
console.log(one + three);

const john = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  email: "john@web.de",
};

const { age, eyeColor, ...restOfJohn} = john;
console.log(age, eyeColor, restOfJohn);

function greet({firstName, lastName}) {
    let test = "Hello"
  return `${test} ${firstName} ${lastName}!`;
}

// console.log(greet(john));

function firstTwoNumbers([numOne, numTwo, ...restOfArray]){
    console.log(restOfArray);
    return `The first two numbers of the array are ${numOne} and ${numTwo}.`
}

console.log(firstTwoNumbers(arr))