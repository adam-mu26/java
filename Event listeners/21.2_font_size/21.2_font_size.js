const btn1 = document.getElementsByClassName("b1")[0]
const btn2 = document.getElementsByClassName("b2")[0]
const paragraph = document.querySelector("p")
const paragraphstyle = window.getComputedStyle(paragraph)
let fontsize = parseInt(paragraphstyle.fontSize)
console.log(fontsize);
// console.log(paragraphstyle);


console.log(btn1);


const button = document.querySelector("button")
btn1.addEventListener("click", () => {
    fontsize += 1 
    console.log(fontsize); 
    paragraph.style.fontSize = `${fontsize}px`
})
console.log(btn1);


btn2.addEventListener("click", () => {
    fontsize -= 1
    paragraph.style.fontSize = `${fontsize}px`
})

