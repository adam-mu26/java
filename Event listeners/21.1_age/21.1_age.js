const input = document.querySelector("input")
const paragraph = document.querySelector("p")
function inputEvent() {
    if (input.value >= 18) {
        paragraph.innerText = "you can drink!"
    }else {
        paragraph.innerText = "you're too young!"
    }
}
// inputEvent()

const button = document.querySelector("button")
button.addEventListener("click",inputEvent)


