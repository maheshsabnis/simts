var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names = ["Tejas", "Mahesh", "Ajay"];
names = __spreadArray(__spreadArray([], names, true), ["Ram", "Ramesh", "Kumar"], false);
console.log(names);
// forEach is Higher-Order-Function
// THis starts executing first but 
// completed only when the printNames does not complets
names.forEach(printNames);
// The forEach will be invoked but itsb execution will
// be completed only when the 'printNames' does the job  
function printNames(n, index) {
    console.log("Name at index = ".concat(index, " is = ").concat(n));
}
console.log();
names.forEach(function (n, index) {
    console.log("Name at index = ".concat(index, " is = ").concat(n));
});
console.log();
names.forEach(function (n, index) {
    console.log("Name at index = ".concat(index, " is = ").concat(n));
});
