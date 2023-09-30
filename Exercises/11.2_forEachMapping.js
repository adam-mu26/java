// 1 //
const arry = [36, 83, 53, 5, 8, 200];
arry.forEach(function (num) {
  console.log(num * 2);
});






// 2 //
const nums = [4, 9, 5, 2, 6, 10, 12]
function onlyEvenValues(nums) {
  const even = [];
  nums.forEach((nums) => {
    if (nums % 2 === 0) {
      even.push(nums);
    }
  });
  return even;
}
console.log(onlyEvenValues(nums))








// 3 //
const arry1 = [`adam`,`fawzi`,`ward`]
function showFirstAndLast(arry1)  {
const firstLast = []
arry1.forEach((item,index) => {
    if (index === 0 || index === arry1.length -1) {
        firstLast.push(item);
    }

})
return firstLast
}

console.log(showFirstAndLast(arry1));






// 4 //
function vowelCount(str) {
  const count = {};
  str = str.toLowerCase();
  str = str.split(""); // str = [...str]
  str.forEach((char) => {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      if (count[char] === undefined) {
        count[char] = 1;
      } else {
        count[char]++;
      }
    }
  });
  return count;
}

//  vowelCount("hello world my name is yoo how are you")
console.log(vowelCount("hello world my name is yoo how are you"));








 // 5 //
const str = "what does the fox say"
function capitalize(str){
 str = str.split("")
 str = str.map((char) => {
 return char.toUpperCase()
})
return str.join("")
}
console.log(capitalize(str));






