function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!'; return welcome;
    }
    function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2); return result;
    }
    function add(a, b = 5) { let myNumber = a;
    let sum = myNumber + b; return sum;
    }
  
  const welcome2 = () => "Welcome to Appleseeds Bootcamp!"
  const power2 = a => Math.pow(5,2)
  const add2 = (a,b) => Math.random() * (2 + 2) + 2;
  
  
  
    console.log(welcome2())
    console.log(power2())
    console.log(add2())
  
  