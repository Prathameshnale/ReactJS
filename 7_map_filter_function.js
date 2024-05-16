//map and filter function of array object.


//map fuction = map function is the array function used to copy the elements in array one by one
//with or without operations on the elements.

//e.g

let arr1 = [1,2,4,6,10];


//copy elements using map function with multiply by 2.
let arr2 = arr1.map(function(x){
    return x*2; //so here each element will be returns with multiplyed by 2.
})

console.log("arr1 = "+arr1);
console.log("arr2 = "+arr2);


//copy elements using map arrow function with multiply by 2

let arr3 = arr1.map((x)=>{
    return x*2;
})
console.log("arr3 = "+arr3);
//     OR

let arr4 = arr1.map( x => x*2 );//if we have only one argument in arrow function then we can write like this also
console.log("arr4 = "+arr4);






//filter function - filter function of array is used to filterout the elements in array by some condition
//and store it into another array.

//e.g 

let array1 = [1,2,3,4,5,6,7,8,9,10];


//filter function using normal function
let array2 = array1.filter(function(x){

    // if(x%2 == 0){
    //     return x;
    // }

    return x%2 == 0;   //same as above three lines  //it will return x if and only if condition is true.
})

console.log("array2 = "+array2);

//filter function using arrow function

let array3 = array1.filter((x)=>{
    return x%2 == 0;
})
console.log("array3 = "+array3);


let array4 = array1.filter( x => x%2 ==0 );
console.log("array4 = "+array4);