// ----------------------------------------
// Inserting Products
// ----------------------------------------

// 1.

db.products.insert({
  name: "Hammer",
  price: 9.99,
  department: "Hardware",
  color: "red",
  sales: 80,
  stock: 50
});

// 2. 

db.products.insert({
  name: "Screwdriver",
  price: 19.99,
  department: "Hardware",
  color: "green",
  sales: 75,
  stock: 50
});

db.products.insert({
  name: "Wrench",
  price: 21.99,
  department: "Hardware",
  color: "orange",
  sales: 70,
  stock: 50
});

// ----------------------------------------
// Updating Products
// ----------------------------------------

// 1.
// invalid property id

db.products.update({
  { department: "Hardware" },
  { $inc: { price: 10 } },
  { multi: true }
});