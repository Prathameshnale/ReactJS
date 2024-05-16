//Destructuring is basically used to assign the seperate variable to each elements of array or each property 
//of object.

//1. array destructuring

//e.g

let arr=["prasad","swapnil","arjun","digvijay","prathamesh"];

console.log(arr);

// so in case if we want to store all the 5 or any elements in above array arr store seperatly in
// a variable the by using destructuring we can achive that


let newarr=[name1,name2,name3,name4,name5]=arr;  //this is how we can assign elements of arr to variables in newarr

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);

let newarr1=[n1, ,n3, , ]=arr;  //if we don't want to assign to any particular elemetns then we can do like this
//so here only 1st and 3rd element is assigned to variable and others are not.so this is how we can do
//as per our need.


console.log(n1,n3);






//Object destructuring

//to assigning the property of object to the variable is called as object destructuring.

const emp = {
    name:"prathamesh",
    id:8876
}

console.log("without using destructuring = "+emp.name+" "+emp.id);

//now we assign the property name and id of emp object to the two sepearate variable using object destructuring

let {name,id} = emp;   //this is how we can assign the variable to the property of object.

//so now we can access this two property of object by using the new names as name and id as follow

console.log("using destructuring = "+name+" "+id);
