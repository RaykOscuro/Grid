const docBody = document.children[0].children[1];

const todos = [
  { id: 1, text: "HTML", done: true },
  { id: 2, text: "CSS", done: true },
  { id: 3, text: "Javascript", done: true },
  { id: 4, text: "Tailwind CSS", done: false },
  { id: 5, text: "React", done: false },
];

const containerElement = document.createElement("div");
containerElement.classList.add("todos-container");
docBody.prepend(containerElement);

for (const todo of todos) {
  const newContainer = document.createElement("div");
  newContainer.classList.add("todo");
  let htmlTag = `
    <h3>${todo.text}</h3>
    <p>Is done: ${todo.done ? "yes" : "no"}</p>
  `;
  newContainer.innerHTML = htmlTag;
  containerElement.append(newContainer);
}