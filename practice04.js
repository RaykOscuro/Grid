const array = Array(100)
  .fill(1)
  .map((n, i) => n + i);
/*
for (x of array) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("fizz buzz");
  } else if (x % 3 == 0) {
    console.log("fizz");
  } else if (x % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }
}
*/

for (x of array) {
  switch (true) {
    case x % 3 === 0 && x % 5 === 0:
      console.log("fizz buzz");
    case x % 3 === 0 && x % 5 !== 0:
      console.log("fizz");
    case x % 3 !== 0 && x % 5 === 0:
      console.log("buzz");
    case x % 3 !== 0 && x % 5 !== 0:
      console.log(x);
  }
}
