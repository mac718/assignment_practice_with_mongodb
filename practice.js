// ----------------------------------------
// Inserting Products
// ----------------------------------------

// 1. Insert a product with the following properties

//        name: "Hammer"
//        price: 9.99
//        department: "Hardware"
//        color: "red"
//        sales: 80
 //       stock: 50

db.products.insert({
  name: "Hammer",
  price: 9.99,
  department: "Hardware",
  color: "red",
  sales: 80,
  stock: 50
});

// 2. Insert the following products in a single query

//        -
//        name: "Screwdriver"
//        price: 19.99
//        department: "Hardware"
//        color: "green"
//        sales: 75
//        stock: 50
//        -
//        name: "Wrench"
//        price: 21.99
//        department: "Hardware"
//        color: "orange"
//        sales: 70
//         stock: 50


db.products.insert([{
  name: "Screwdriver",
  price: 19.99,
  department: "Hardware",
  color: "green",
  sales: 75,
  stock: 50
},

{
  name: "Wrench",
  price: 21.99,
  department: "Hardware",
  color: "orange",
  sales: 70,
  stock: 50
}]);

// ----------------------------------------
// Updating Products
// ----------------------------------------

// 1. Change the department of all products in the "Hardware" department to "Hardware Tools"

db.products.update(
  { department: "Hardware" },
  { $set: { department: "Hardware Tools" } },
  { multi: true }
);

// 2. Change the price of all products in the "Hardware Tools" department to cost $10 more than their current price

db.products.update(
  { department: "Hardware Tools" },
  { $inc: { price: 10 } },
  { multi: true }
);

// 3. Update the sales of all the products in the "Hardware Tools" department to be at least 50

db.products.update(
  { department: "Hardware Tools"},
  { $max: { sales: 50 } },
  { multi: true }
);

// 4. Change the department of all the products in the "Hardware Tools" department to be "Hardware" again

db.products.update(
  { department: "Hardware Tool" },
  { $set: { department: "Hardware" } },
  { multi: true }
);

// 5. Change the price of all the products in the "Hardware" department to be $10 less than their current price

db.products.update(
  { department: "Tools" },
  { $inc: { price: -10 } },
  { multi: true }
);

// 6. Change the sales of all the products in the "Hardware" department to be at most 10

db.products.update(
  { department: "Hardware"},
  { $min: { sales: 10 } },
  { multi: true }
);

// 7. Update the first product in the "Hardware" department to have one more sale

db.products.update(
  { department: "Hardware"},
  { $inc: { sales: 1 } }
);