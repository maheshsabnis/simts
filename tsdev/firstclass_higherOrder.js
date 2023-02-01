//  MathOperations is a module
var MathOperations = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mult: function (a, b) {
        return a * b;
    }
};
console.log("Add = ".concat(MathOperations.add(10, 20)));
console.log("Sub = ".concat(MathOperations.sub(100, 20)));
console.log("Muktiplication = ".concat(MathOperations.mult(100, 20)));
// Higher-Order Function
var myfunction = function (name) {
    return function (m) {
        console.log("Msg = ".concat(name, " , ").concat(m));
    };
};
// defining the outer function with the input parameter
var myfunction_message = myfunction('Hello');
// myfunction_message: is a returned function from myfunction
console.log(myfunction_message);
myfunction_message('Mr. JavaScript Language');
