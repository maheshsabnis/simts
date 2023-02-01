var x;

// x is used to store function reference
// aka 'Reference Type Function' 
// x points to anonymous function reference 
// the location of x (footprint) points to code-segment
x = function(a,b){
    return Math.pow(a,b);
};
// JS Parser is invoking the code-segment 
// parsing it
// executing it  as a function
console.log('x = ' + x(2,6));

// x with complex object definition in it aka the class
// definition 
// The scope of the object within its body is 
// represented using 'this'
// all declarations prefixed using 'this' are public by nature
x = function(){

    function display(){
        console.log('Private');
    }

    // sub-object as a ref. function
    // stored in 'add' scope declaration
   this.add = function(a,b){
    display();
    return a + b;
   };
   this.power = function(a,b){
    display();
    return Math.pow(a,b);
   };
};

// lets define an instance for 'x'
// o1 will be able to access all declarations
// directly holded using 'this' 
var o1 = new x();
console.log('Add = ' + o1.add(10,20));
console.log('Power = ' + o1.power(10,6));
var o2 = new x();
console.log(o1 == o2); // Value Equal;
console.log(o1 === o2); // deep equality aka type + value


