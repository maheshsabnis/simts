// The support for TypeSystem
let x:number; // parsed as a numeric
x = 200; // valid

let fname:string = "Mahesh";
let lname:string = "Sabnis";

console.log('Traditional JS Concatination = ' + (fname +  " " + lname));
// using Interpolation
// a single 'immutable' string literal object
// Internally it uses 'string.concat()'
console.log(`Using ES 6+ interpolation is = ${fname} ${lname}`);

// declaring Object
// literal object aka JSON Object
let obj = {a:10,b:20}; 
console.log(`obj.a = ${obj.a} and obj.b = ${obj.b}`);

// modify the object with new Key
//obj.c = 30; invalid
// Parameter 1: Target object with new Key as c which is the copied
// into the new Object named 'obj'
obj = Object.assign({c:30}, obj);
console.log(`obj.a = ${obj.a} and obj.b = ${obj.b} and obj.c = ${obj.c}`);

// usijng the Object Mutation using spread (...)
// Mutating the obje with new literal in it (aka varient)
obj = {...obj, d:40};

console.log(`obj.a = ${obj.a} and obj.b = ${obj.b} and obj.c = ${obj.c} and obj.d = ${obj.d}`);
obj = undefined; // killing
console.log(`obj.a = ${obj.a} and obj.b = ${obj.b} and obj.c = ${obj.c} and obj.d = ${obj.d}`);








