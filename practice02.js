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

for (const user of users) {
  console.log(user);
}

for (const user of users) {
  console.log(user.firstName, user.address.street);
}

for (const user of users) {
  if (typeof user.age === "number") {
    console.log(user.age);
  }
}

for (const user of users) {
  let greeting = "";
  for (let x = 0; user.friends.length > x; x++) {
    if (x === user.friends.length - 1) {
      greeting += `Hello ${user.friends[x]}!`;
    } else {
      greeting += `Hello ${user.friends[x]}, `;
    }
  }
  console.log(greeting);
}

for (const user of users) {
  for (const addressPart in user.address) {
    console.log(user.address[addressPart]);
  }
}

for (const user of users) {
  if (user.hobbies.length < 2) {
    console.log(user);
  }
}

for (const user of users) {
  for (const hobby of user.hobbies) {
    console.log(hobby);
  }
}
