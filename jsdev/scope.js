// function level aka module level scope for declaration
var a;
function assignAndPrint(){
    a = 10;
    console.log('a in function = ' + a);
    a++;
}
assignAndPrint();
a++;
console.log('Increment of a after the function call = ' + a);

function anotherPrintAndChange(){
    // local declaration
    var a = a *100; // a in RHS is the same 'a' declaratoin 
    // in LHS
    console.log('After Process a = ' + a); // NaN
}
anotherPrintAndChange();
a = a * 1000;
console.log('After function call for Process a = ' + a);

