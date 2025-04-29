/*
Props - Props stands for properties which are read only, immutable i.e we cannot modify them and props are basically used
        to pass the data from one component to another compenent.


        e.g let us consider below example, we have two js files App.js and ExpenseItem.js, In which in ExpenseItem.js file we
            have sub-component so we export that compenent from ExpenseItem.js and In App.js we import that component as below.

            so now for use of props in below example, we pass data from one compenent to another component i.e from App.js to
            ExpenseItem.js   


*/

    //App.js   ----------------------------------------------------------------------------------------------------------------

import ExpenseItem from './Components/ExpenseItem';

function App(){

    let expenseDate = new Date();     // this is how we create three props using variables.
    let expenseTitle = "Light-bil";
    let expensePrice = 750;

    return(
        <div>
            <h1 align="center">Welcome to expense Tracker</h1>
            <div className='app-class'>
                <ExpenseItem date={expenseDate} title={expenseTitle} price={expensePrice}/>   
            </div>
        </div>
    );

    //as above we can pass the props from the component with the name date,title and price. 
}

export default App;




//ExpenseItem.js  -----------------------------------------------------------------------------------------------------------------

import './ExpenseItem.css';

function ExpenseItem(props){            //here we accept all the props in single object i.e props (we can give any name to it)

    let date = props.date.toISOString();   //here we can manipulate the data if we want(optional) othewise we can
    let title = props.title;                //directily use it in below component
    let price = props.price;
    return(
        <div className="expense-item">
            <div>{date}</div>
            <div className="expense-name">
            <h2 className="expense-h2">{title}</h2>
            </div>
                
            <div className="expense-price">${price}</div>
            
            
        </div>
    );
}

//export default ExpenseItem;   ------------------------------------------------------------------------------------------------




//now in above example we create and pass the data/props from one component to another component, but in above example
// inside app.js we have only one component i.e <ExpenseItem/> but what if we have multiple same component in that case
//insetead of making multiple variable for each props we can make array of props(array of object i.e each object for each component)



    


/*
//App.js   ----------------------------------------------------------------------------------------------------------------

import ExpenseItem from './Components/ExpenseItem';

function App(){
                            //now in this example we have multiple component (3) to pass data/props
    let expenseArray = [     //so here we make array of three objects (each object for each components as props)
        {
            id: "e1",
            date: new Date(2025,4,29),
            title: "Rent",
            price: 3000
        },{
            id: "e2",
            date: new Date(2025,4,29),
            title: "Light-Bill",
            price: 900
        }
        ,{
            id: "e3",
            date: new Date(2025,4,29),
            title: "Maintenance",
            price: 400
        }
    ]

    return(
        <div>
            <h1 align="center">Welcome to expense Tracker</h1>
            <div className='app-class'>
                <ExpenseItem date={expenseArray[0].date} title={expenseArray[0].title} price={expenseArray[0].price}/>
                <ExpenseItem date={expenseArray[1].date} title={expenseArray[1].title} price={expenseArray[1].price}/>
                <ExpenseItem date={expenseArray[2].date} title={expenseArray[2].title} price={expenseArray[2].price}/>
            </div>
        </div>
    );

    //since we have array of props for each component, as above we can pass the data/props to each component 
}

//export default App;

*/