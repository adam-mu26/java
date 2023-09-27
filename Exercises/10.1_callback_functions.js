//---1---//
function isString(str , call){
    if (typeof(str) == 'string') {
        call(str)
    }
}

function callstring(str){
console.log(str)

}
isString('Hello there' , callstring)




//---2---//
function firstWordUpperCase(sentence , fun) {
sentence = sentence.slice(0,sentence.indexOf(" ")).toUpperCase() + sentence.slice(sentence.indexOf(" "))
fun(sentence)
}

function toup(str){
str = str.split(" ").join("-")
console.log(str)
}

firstWordUpperCase("loop until the end of the world", toup )





//---3---//
// function final() {
// alert('Oh yeah i finished exercise 10.1')
// }

// setTimeout(final, 3000)



