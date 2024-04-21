/*

Object oriented concept in js

what is class?
->class is a blueprint or template by using which we can make the object.

*/

//how to define class in js

class Employee{     //defination of a class

    constructor(n){     //defination of the property
        this.name=n;    //initialization of the property
    }

    age = 24;   //this way also we can declare or add the property i.e outside the constructor.


    //defination of the methods (by simple way)   this display function is not considered as property
    Display(){          
        console.log("inside display method of employee");

        //to use property anywhere inside the class we must use this keyword with that property name
        console.log("Name = "+this.name);
    }


    //defination of method (by arrow function)  arrow function is considered as property of object
    //but normal function is not considered as property of function
    show = ()=>{
        console.log("inside show method of employee(arrow function)");
    }

}


//how to make object in js

let emp1 = new Employee("prathamesh");    //making the object with the new keyword followed by class name
const emp2 = new Employee("prathamesh");


//how to call the methods in js

emp1.Display();
emp1.show();


//how to display object in js

console.log(emp1);