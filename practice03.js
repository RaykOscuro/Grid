function jsonReader(input) {
  console.log(`${input.title} - ${input.description}`);
  for (course of input.children) jsonReader(course);
}

async function logText() {
  const response = await fetch("./file.json");
  const text = await response.json();
  console.log(text);
  for (course of text.courses) jsonReader(course);
}

logText();

/*
console.log(response);

for (x of Object.entries(response)) {
  console.log(x);
}
*/
