//  MathOperations is a module
const MathOperations = {
  add:function(a:number,b:number){
    return a + b;
  },
  sub:function(a:number,b:number){
    return a - b;
  },
  mult:(a:number,b:number)=>{
    return a*b;
  }
};

console.log(`Add = ${MathOperations.add(10,20)}`);
console.log(`Sub = ${MathOperations.sub(100,20)}`);
console.log(`Muktiplication = ${MathOperations.mult(100,20)}`);

// Higher-Order Function

const myfunction = function(name:any) {
    return function(m:any){
        console.log(`Msg = ${name} , ${m}`);
    };
};

// defining the outer function with the input parameter
const myfunction_message = myfunction('Hello'); 
// myfunction_message: is a returned function from myfunction
console.log(myfunction_message);

myfunction_message('Mr. JavaScript Language');

