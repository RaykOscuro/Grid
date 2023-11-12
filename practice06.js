//spread operator

const user = {
  firstName: "John",
  lastName: "Doe",
};

const hobbies = ["Sports", "Cooking"];

const extendedUser = {
  ...user,
  age: 50,
  eyeColor: "brown",
  hobbies: [...hobbies, "Reading"],
};

console.log(extendedUser);

const tree = {
  name: "folder1",
  type: "folder",
  children: [
    {
      name: "folder2",
      type: "folder",
      children: [
        {
          name: "file1",
          type: "file",
          children: [],
        },
        {
          name: "file2",
          type: "file",
          children: [],
        },
      ],
    },
    {
      name: "folder3",
      type: "folder",
      children: [],
    },
  ],
};

const ul = document.querySelector("ul");

function treeRecursion(tree, parent) {
  if (!tree || tree.length === 0) return; // abort if not empty or undefined
  const li = document.createElement("li"); // create the new li element for the current node
  li.innerHTML = `${tree.name} (${tree.type})`; // add the name and type
  parent.appendChild(li); // append it to the parent html element (ul)
  if (tree.type === "folder" && tree.children.length !== 0) {
    // if current element is a non-empty folder we need to:
    const ul = document.createElement("ul"); // 1. create a new ul-element for the children
    parent.appendChild(ul); // 2. append it to the parent ul-element
    for (const child of tree.children) {
      // 3. for all children of the current node:
      treeRecursion(child, ul); // 4. run the recursion
    }
  }
}

treeRecursion(tree, ul);

// console.dir(document.body.children[0].children[0]);
// console.dir(window.document.body.children[0]);

const heading = document.querySelector("h2");
const btn = document.querySelector("button");
console.log(heading, btn);
const input = document.querySelector('input[id="pwd"]');
const input2 = document.querySelector('input[id="eml"]');

/*
btn.addEventListener("click", ()=>{
    heading.innerText = "Moo!"
})
*/

function eventHandler() {
  heading.innerText = "Moo!";
}

btn.addEventListener("click", eventHandler);

input.addEventListener("blur", (event) =>
  validate(event, {
    min: 5,
    max: 15,
    isString: true,
  })
);

input2.addEventListener("blur", (event) =>
  validate(event, {
    isEmail: true,
  })
);

function validate(inputVal, params) {
  const inputValue = inputVal.target.value;
  if (inputValue) {
    if (params.min && inputValue.length < params.min) {
      inputVal.target.style.background = "red";
      console.log("A");
      return;
    }
    else if (params.max && inputValue.length > params.max) {
      inputVal.target.style.background = "red";
      console.log("B");
      return;
    }
    else if (params.isString && typeof inputValue != 'string') {
      inputVal.target.style.background = "red";
      console.log("C");
      return;
    }
    else {
      inputVal.target.style.background = "none";
    }
  }
}
