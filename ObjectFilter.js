let users = [
    { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
    { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
    { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
  ];
  const namesInBanglore = users
    .filter((user) => user.place === "Banglore")
    .map((user) => `${user.firstName} ${user.lastName}`);
  console.log(namesInBanglore);
  