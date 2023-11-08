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
