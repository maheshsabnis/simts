let names1:Array<string> = ["Tejas","Mahesh", "Ajay"];

names1 = [...names1, "Ram", "Ramesh", "Kumar"];
console.log(names1);
console.log();

let newnames = names1.map((n:string,index:number)=>{
    if( n.length>5)
    return n.toUpperCase();
});

console.log(newnames);
console.log();
let newnames1 = names1.filter((n:string,index:number)=>{
    if( n.length>5)
    return n.toUpperCase();
});

console.log(newnames1);
