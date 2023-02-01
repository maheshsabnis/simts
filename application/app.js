var Employee = /** @class */ (function () {
    function Employee(EmpNo, EmpName, DeptName) {
        this.EmpNo = EmpNo;
        this.EmpName = EmpName;
        this.DeptName = DeptName;
    }
    return Employee;
}());
var Logic = /** @class */ (function () {
    function Logic() {
        this.Employees = new Array();
    }
    Logic.prototype.addEmp = function (emp) {
        this.Employees.push(emp);
        return this.Employees;
    };
    Logic.prototype.getEmps = function () {
        return this.Employees;
    };
    return Logic;
}());
var o2 = new Logic();
var emps = o2.addEmp(new Employee(101, 'Mahesh', 'IT'));
console.log(JSON.stringify(emps));
