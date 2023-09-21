// 7.1
const nums = [2,3,4,5,7,3,4];
const numsNoDuplicates = [];
// 1.go over every elemnt in the original array
// 2.check if the elemnt is inside the new array
// 3.if it is - do nothing ,if its not - add it  

for (let i = 0; i < nums.length; i++){
    const number = nums[i];
    if (numsNoDuplicates.indexOf(number) === -1){   // nuber is not inside new array //
        // add number to new array
        numsNoDuplicates.push(number);
    }

}
console.log(numsNoDuplicates)

