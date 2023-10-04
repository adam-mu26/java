const input = document.querySelector("input");
const smileyContainer = document.querySelector("#smileyContainer")
const btn = document.querySelector("button")



let inputNum;

input.addEventListener("input",(event) => {
   inputNum = parseInt(event.target.value)
// console.log('inputNum', inputNum)
})


btn.addEventListener("click",(event) => {
    console.log('inputNum', inputNum)
    smileyContainer.innerHTML = ''
    while (inputNum > 0){
        inputNum -= 1
        const p = document.createElement("p")
        p.innerText = "time is absoult"
        smileyContainer.append(p)
    }
})

