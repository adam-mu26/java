const users = [ {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
}, {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
}, {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
}, ];


// Loop over the array with the forEach method 
// and dynamically creat an ordered list
// orderd list of the first and last names of the object 
// parentHtml. append(childHtml)
const ol = document.createElement("ol")
users.forEach((user) => {
    const li = document.createElement("li")
    li.innerText = user.firstName + "  " + user.lastName
    ol.append(li)
})

const body =  document.getElementsByTagName("body")[0]
body.appendChild(ol)



// remove the  uumbers from the list 
ol.style.listStyleType = "none"
ol.style.fontSize = "40px"

// ol.classList.add("orderd") + .orderd in css

// // Create a custom data attribute called “data-id” and attach the id value to each li.

// // creat new attribute 
const dataId = document.createAttribute("data-id")
dataId.value = Math.floor(Math.random() * 1000)
ol.append(li)
