// //sort 
// const nums = [2, 1000, 49];
// nums.sort();
// console.log(`nums`, nums);



// const letters = ["b", "n", "a", "c"]
// letters.sort();
// console.log(`letters`, letters);


// const nums2 = [2, 1000, 49, 55, 99, -23];
// nums2.sort((el1, el2) => {
//     return el1 - el2

// })
// console.log(`nums2`, nums2);

// function vowelCount(str){
//     const whatever = {};
//     str.toLowerCase();
//     str = str.split("");
//     str.forEach(char => {
//         if(char === "a" || char === "e" || char === "i" || char === "u" || char === "o"){
//           if (whatever[char]=== undefined){
//             whatever[char] = 1
//           }else {
//             whatever[char]++
//           } 
//         }
//     })
// }

// const  pattern = new RegExp(/[a-z]/)





const formData = {}

const input = document.querySelector("input")

input.addEventListener("input", (e) => {
    formData["username"] = e.target.value
    console.log(("formData", formData));
})

const section = document.querySelector("section")
const showBtn = document.getElementById("show")
showBtn.addEventListener("click", () => {
     section.innerText = `username is: ${input.value}`
});


