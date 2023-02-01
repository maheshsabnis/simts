let names:Array<string> = ["Tejas","Mahesh", "Ajay"];

names = [...names, "Ram", "Ramesh", "Kumar"];

console.log(names);
// forEach is Higher-Order-Function
// THis starts executing first but 
// completed only when the printNames does not complets
names.forEach(printNames);

// The forEach will be invoked but itsb execution will
// be completed only when the 'printNames' does the job  
function printNames(n:string, index:number){
    console.log(`Name at index = ${index} is = ${n}`);
}
console.log();
names.forEach(function(n:string, index:number){
    console.log(`Name at index = ${index} is = ${n}`);
});
console.log();
names.forEach((n:string, index:number)=>{
    console.log(`Name at index = ${index} is = ${n}`);
});


