const products = [
  { name: "T-shirt",    price: 800,  stock: 12,  category: "clothing"    },
  { name: "Headphones", price: 2500, stock: 0,   category: "electronics" },
  { name: "Notebook",   price: 150,  stock: 45,  category: "stationery"  },
  { name: "Sneakers",   price: 3200, stock: 5,   category: "clothing"    },
  { name: "Pen",        price: 50,   stock: 200, category: "stationery"  },
];


//Question 1
for (let i = 0; i < products.length; i++) {
  if (products[i].stock > 0) {
    console.log(products[i].name);
  }
}

//Question 2
for (let i = 0; i < products.length; i++) {
  if (products[i].price < 1000) {
    console.log(products[i].name);
  }
}

//Question 3
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "clothing") {
    console.log(products[i].name);
  }
}

//Question 4
let totalValue = 0;

for (let i = 0; i < products.length; i++) {
  totalValue += products[i].price * products[i].stock;
}

console.log(totalValue);

//Question 5
for (let i = 0; i < products.length; i++) {
  if (products[i].category === "clothing" && products[i].stock > 0) {
    console.log(products[i].name);
  }
}








