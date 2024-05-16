//primitive type and reference type(non-primitive type)
//primitive type = number,string,....
//reference type = array, ojbect,....

//primitive type - while assigning one variable to another variable the value will be copied and
// both variable are independent on each other.

//e.g 

let num1 = 100;

let num2 = num1;  //value will be copied.

console.log("num1 = "+num1+" and num2 = "+num2); //num1 = 100 and num2 = 100

num2 = num2+10;

console.log("num1 = "+num1+" and num2 = "+num2); //num1 = 100 and num2 = 110
             //so we can say that num1 and num2 are not depend on each other






//reference type = while assigning one object to another the reference will be copied so
//changes in one object effects on another object i.e one object is dependent on another object in reference type.

//e.g - 

const obj1 = {
    name1:"prathamesh",
    age:24
}

const obj2=obj1;  //reference will be copied

console.log(obj1); //{ name1: 'prathamesh', age: 24 }
console.log(obj2); //{ name1: 'prathamesh', age: 24 }

obj1.age=50;

console.log("after changes in object");
console.log(obj1); //{ name1: 'prathamesh', age: 50 }
console.log(obj2); //{ name1: 'prathamesh', age: 50 }

//so we changed only age property of obj1 object but it reflects the change in obj2 also due
//reference copy.