class Employee{
    constructor(
        public EmpNo:number,
        public EmpName: string,
        public DeptName: string
    ){}
}

class Logic {
    private Employees:Array<Employee>;
    constructor(){
        this.Employees = new Array<Employee>();
    }
    addEmp(emp:Employee):Array<Employee> {
       this.Employees.push(emp);
       return this.Employees; 
    }

    getEmps():Array<Employee> {
        return this.Employees; 
     }
}

let o2 = new Logic();
let emps = o2.addEmp(new Employee(101,'Mahesh', 'IT')); 
console.log(JSON.stringify(emps));

