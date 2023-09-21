const redius = 10
function calculate(redius){
  return (Math.PI * Math.pow(redius,2))
}

console.log(calculate(redius))
console.log(calculate(redius).toFixed(2))
