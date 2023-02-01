var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var names1 = ["Tejas", "Mahesh", "Ajay"];
names1 = __spreadArray(__spreadArray([], names1, true), ["Ram", "Ramesh", "Kumar"], false);
console.log(names1);
console.log();
var newnames = names1.map(function (n, index) {
    if (n.length > 5)
        return n.toUpperCase();
});
console.log(newnames);
console.log();
var newnames1 = names1.filter(function (n, index) {
    if (n.length > 5)
        return n.toUpperCase();
});
console.log(newnames1);
