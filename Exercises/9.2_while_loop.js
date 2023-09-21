9.2
const randNum = Math.floor((Math.random() * 50) + 1);
console.log("rand is" , randNum);
// 1. get user number guess
// 2. check if it is the same num as the rand num
// 3. if it is  - stop the  game 
// 4. if its too small - alert "its too small"
// 5. if its too big - alert "its too big"
// 6. repeat 1-5
// let isCorrect = false
let guess = -1;
while(guess !== randNum){
const guess = parseInt(prompt(`guess a number between 1-50`));
if (guess === randNum){
    console.log("correct!");
    break;
}else if (randNum > guess) {
    console.log("too small");
}else{
    console.log("too big");
} 
}