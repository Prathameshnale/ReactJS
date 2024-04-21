//Spread and rest operator in js
//Both spread and rest operator indicated by same sign i.e (...)


//Spread -> 
//      Spread opr is used to copy one array/object into another array/object.


//copy one array into another using spread opr.
console.log("coping array");
let list = ["prathamesh","Arjun","Prasad"];

let newList1 = [...list,"Digvijay"];   //here spread opr. is used to copy the one array into another array 
                                       //and also we can add additional elements inside array
let newList2 = ["Digvijay",...list];

console.log(list);
console.log(newList1);
console.log(newList2);





//copy one object into another object using spread 
console.log();
console.log("coping object");

let person = {
    name:"Prathamesh",
    age:24
}

let employee = {
    ...person,    //coping person object property using spread oper.
    empid:8876    //here we can also add the addition property after/before coping object
}


console.log(person);

console.log(employee);