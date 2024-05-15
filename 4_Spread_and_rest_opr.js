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





//Rest operator -> If we use ... with the arguments inside the functions then it is called as rest operator.
//e.g 


function display(a,b,c){

    console.log(a, b, c);
}

display(11,22,33);

//in above example display function can take only 3 arguments so while calling this function we should 
//pass only 3 arguments here we do not have any flexibility to pass any number of arguments.
//to for that purpose the rest operator is used 

//e.g 


function show(...all){     //declaration of rest operator as an array of an arguments.

    console.log(all);      //all is considered as an array of arguments.

}

show(4,5,8876,"prathamesh");   //now we can have the flexibility to pass any number of arguments to
                               //the show function.  

