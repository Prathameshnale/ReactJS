//Inheritance is used to access/aquire the all the properties and functionality of the one class
//into another class.

class Person{
    constructor(name){
        this.name=name;
        console.log("Inside constructor of person ");
    }

    show(){
        console.log("Name = "+this.name);
    }
}


class Employee extends Person{

    //to call super class constructor we must use super() at very first line inside consotructor.
    constructor(){
        super();
        console.log("Inside constructor of Employee");
    }

    display(){
        console.log("inside display method of employee");
    }
}


let per1 = new Employee("Prathamesh");

let emp1 = new Employee("ABC");