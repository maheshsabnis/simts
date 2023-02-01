var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// The support for TypeSystem
var x; // parsed as a numeric
x = 200; // valid
var fname = "Mahesh";
var lname = "Sabnis";
console.log('Traditional JS Concatination = ' + (fname + " " + lname));
// using Interpolation
// a single 'immutable' string literal object
// Internally it uses 'string.concat()'
console.log("Using ES 6+ interpolation is = ".concat(fname, " ").concat(lname));
// declaring Object
// literal object aka JSON Object
var obj = { a: 10, b: 20 };
console.log("obj.a = ".concat(obj.a, " and obj.b = ").concat(obj.b));
// modify the object with new Key
//obj.c = 30; invalid
// Parameter 1: Target object with new Key as c which is the copied
// into the new Object named 'obj'
obj = Object.assign({ c: 30 }, obj);
console.log("obj.a = ".concat(obj.a, " and obj.b = ").concat(obj.b, " and obj.c = ").concat(obj.c));
// usijng the Object Mutation using spread (...)
// Mutating the obje with new literal in it (aka varient)
obj = __assign(__assign({}, obj), { d: 40 });
console.log("obj.a = ".concat(obj.a, " and obj.b = ").concat(obj.b, " and obj.c = ").concat(obj.c, " and obj.d = ").concat(obj.d));
obj = undefined;
console.log("obj.a = ".concat(obj.a, " and obj.b = ").concat(obj.b, " and obj.c = ").concat(obj.c, " and obj.d = ").concat(obj.d));
