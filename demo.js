class Employee{
    constructor(name,email){
        console.log("employee constrctor is called");
        this.name=name;
        this.email=email;
    }

    location = "pune";

    display(){
        console.log("name = "+this.name+" email = "+this.email+" location = "+this.location);
    }

   show = ()=>{
    console.log("message from show function");
   }  
}


class SalesEmployee extends Employee{
    constructor(sal,name,email){
        super(name,email);
        this.sal=sal;
        console.log("inside constrctor of sales Employee");
    }

    display(){
        console.log("insdie display of sales emp and sal = "+this.sal);
    }
}

let emp1 = new Employee("prathamesh","prathamesh@gmail.com");
emp1.display();
emp1.show();
let semp= new SalesEmployee(500000,"prathamesh","prathamesh@gmail.com");
semp.display();