// (1) // 
function funcA() { 
    console.log(a);
    console.log(foo()); 
    var a = 1; 
    function foo() {
    return 2; 
  }
    } funcA();
  // cannot consle log (a) because the defination of var a comes after  log and connot take value unless it was before loging we can fix it by moving the log after the var difinition 
  



// (2) // 
  var fullName = 'John Doe';
var obj = {
  fullName: 'Colin Ihrig',
  prop: {
  fullName: 'Aurelio De Rosa',

    getFullName: function () {
      return this.fullName;
    }
} };
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
console.log(obj.fullName)
// the getFullName function returns to privious first declared varible which is from prop array inside the obj array and if we want to consle log the obj full name we need to consle log it in the local scope and we get the outcome 




// (3) // 
function funcB() {
    let a = b = 0;
    a++;
    console.log(typeof a);
    console.log(typeof b);
  }
  funcB();
//   console.log(typeof a);
//   console.log(typeof b);
// to get the type of of a + b we need to consle log inside the function either way if it was out side the funcution the function wont recognize because the difinition of a & b given by stetment inside the function 



// (4) // 
function funcC() {
    console.log("1");
  }
  funcC();
  function funcC() {
    console.log("2");
  }
  funcC();
// it takes the varible from the secound function because hoisting the last varible will be loged



// (5) // 
function funcD1() {
    d = 1;
  }
  funcD1();
  console.log(d);
  function funcD2() {
    var e = 1;
  }
  funcD2();
  console.log(e);



