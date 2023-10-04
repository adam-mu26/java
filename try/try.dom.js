// all page = DOM = document object model


// consle.log(document)

// const p = document.getElementById("hello")
// console.log("p" , p)

// p.innerText = "hellow from adam"


const praragraphs = document.getElementsByTagName("p");
console.log(`praragraphs`, praragraphs);


// loop 

for (const p of praragraphs) {
    p.innerText = Math.random();
}


// CRUD = creat read update delete 

//create 
const section = document.getElementById("add");
console.log("section", section);



const newTitle = document.createElement("h1")
newTitle.innerText = "Hello from the other side"
section.appendChild(newTitle)




//creat a list 
const names = ["adam", "baha", "tala"];
const listcontainer = document.getElementById("list"); // get container 
const ul = document.createElement("ul"); // creat ul element
names.forEach((name)=> { // loop on names array
    const li = document.createElement("li"); // creat a li element
    li.innerText = name; // put name from array inside li element
    ul.appendChild(li);

})
listcontainer.append(ul);



// Dynamic list 
const name = prompt("give me a name ")
const h1 = document.createElement("h1")
h1.innerText = `my name is ${name}`
section.append(h1)


// // css
// const pres = document.getElementsByTagNameNS
// console.log(`pres`, pres)
// for (const pre of pres) {
//     console.log(`pre`, pre);
//     if (parseInt(pre.innerText) > 100) {
//         pre.ClassList.add("title")
//     }
// }
