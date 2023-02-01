var MyClass = /** @class */ (function () {
    function MyClass() {
        this.z = 100;
        this.x = 100;
        this.y = 500;
    }
    //  addData(n1:string, n2:string):string{
    //     // return n1 + n2;
    //     let result:string = '';
    //     for (let index = 0; index < arguments.length; index++) {
    //          result+=arguments[index]+'';
    //     }
    //     return result;
    //  }
    MyClass.prototype.addData = function (n1, n2) {
        var result;
        var intResult = 0;
        for (var i = 0; i < arguments.length; i++) {
            if (typeof (arguments[i]) === 'number') {
                console.log(arguments[i]);
                intResult += parseInt(arguments[i].toString());
                console.log(intResult);
            }
            result = intResult;
            if (typeof (arguments[i]) === 'string') {
                result += " ".concat(arguments[i], " ");
            }
        }
        return result;
    };
    MyClass.prototype.processValues = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var result = 0;
        if (values.length > 0) {
            values.forEach(function (v, i) {
                result += v;
            });
        }
        else {
            result = 0;
        }
        return result;
    };
    return MyClass;
}());
var o1 = new MyClass();
console.log("With 2 Parameters = ".concat(o1.addData("Mahesh", "Sabnis")));
console.log("With 3 Parameters = ".concat(o1.addData("Mahesh", "Rameshrao", "Sabnis")));
console.log(o1.addData(10, 20, 30));
console.log("Res 1 = ".concat(o1.processValues(1, 2)));
console.log("Res 2 = ".concat(o1.processValues(1, 2, 3)));
