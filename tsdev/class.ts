class MyClass {
     private x:number;
     y:number;
     z:number = 100;
     constructor(){
        this.x = 100;
        this.y = 500;
     }

     // Overloading
     addData(n1:string, n2:string):string;
     addData(n1:string, n2:string,n3:string):string;
     addData(n1:number, n2:number,n3:number):number;
    //  addData(n1:string, n2:string):string{
    //     // return n1 + n2;
    //     let result:string = '';
    //     for (let index = 0; index < arguments.length; index++) {
    //          result+=arguments[index]+'';
    //     }
    //     return result;
    //  }

     addData(n1:any, n2:any):any{
        let result:any;
        let intResult:number = 0;
        for(let i=0;i<arguments.length;i++){
            if(typeof(arguments[i]) === 'number'){
                console.log(arguments[i]);
                intResult += parseInt(arguments[i].toString());
                console.log(intResult);
            } 
            result = intResult;
            if(typeof(arguments[i]) === 'string'){
                result += ` ${arguments[i]} `;
            } 
        }
        return result;
     }
     // passsing vartiable number of parameters
     processValues(...values:number[]):number{
        let result:number = 0;
        if(values.length >0){
            values.forEach((v,i)=>{
                result+=v;
            });   
        }
        else {
            result = 0;
        }

        return result;
     }
     
}

let o1= new MyClass();
console.log(`With 2 Parameters = ${o1.addData("Mahesh","Sabnis")}`);
console.log(`With 3 Parameters = ${o1.addData("Mahesh","Rameshrao","Sabnis")}`);
console.log(o1.addData(10,20,30));

console.log(`Res 1 = ${o1.processValues(1,2)}`);
console.log(`Res 2 = ${o1.processValues(1,2,3)}`);



