//Arrow function   -  as we use normal function as below to make/use compenents. 
//                      (now instead of normal function we use arrow function)

//    -instead of "function" we declare one variable (let or const) followed by function name as variable name
//    - after that "=" sign and then inside "()" bracket we pass props if we want and then we use "=>"  sign

//   e.g     function ExpenseItem(props){}      to      const ExpenseItem = (props) => {}

//normal function 

import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){        //this is how we define normal function

    let date = props.date;
    let title = props.title;
    let price = props.price;
    return(
        <div className="expense-item">
            <ExpenseDate date={date}/>
                <div className="expense-name">
                    <h2 className="expense-h2">{title}</h2>
                </div>               
                <div className="expense-price">${price}
                </div>           
        </div>
    );
}

//export default ExpenseItem;





//arrow function

const ExpenseItem = (props) =>{        //now this way we define arrow function

    let date = props.date;
    let title = props.title;
    let price = props.price;
    return(
        <div className="expense-item">
            <ExpenseDate date={date}/>
                <div className="expense-name">
                    <h2 className="expense-h2">{title}</h2>
                </div>               
                <div className="expense-price">${price}
                </div>           
        </div>
    );
}