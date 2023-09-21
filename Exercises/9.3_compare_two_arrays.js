const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const matches = (arr, arr2) => {
  const matched = [];

  for (let i = 0; i < food1.length; i++) {
    for (let j = 0; j < food2.length; j++) {
      if (arr[i] === arr2[j]) {
        matched.push(arr[i]);
      }
    }
  }

  return matched.length ? true : false;
};
