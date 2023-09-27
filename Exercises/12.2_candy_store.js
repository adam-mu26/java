const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

// 1 //
function getCandy(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);
  return candy || null;
}
const candy = getCandy(candyStore, "5hd7y");
if (candy) {
  console.log("Found candy:", candy.name);
} else {
  console.log("Candy not found.");
}




// 2 //
function getPrice(candyStore, id) {
  const candy = candyStore.candies.find((candy) => candy.id === id);
  return candy || null;
}
const candy2 = getPrice(candyStore, "as12f");
if (candy) {
  console.log(`price is:`, candy.price);
} else {
  console.log(`price not found`);
}




// 3 //
function addCandy(candyStore, id, name, price) {
  const newCandy = {
    id: id,
    name: name,
    price: price,
    amount: 1,
  };

  candyStore.candies.push(newCandy);
}
addCandy(candyStore, "as432", "crazy", 3);
console.log(candyStore);


// 4 // 
