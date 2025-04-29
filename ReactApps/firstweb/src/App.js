import ExpenseItem from "./Components/ExpenseItem";
//import './App.css';

/*
function App(){

    let expenseDate = new Date();
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
}

export default App;   */

function App() {
  //now in this example we have multiple component (3) to pass data/props
  let expenseArray = [
    //so here we make array of three objects (each object for each components as props)
    {
      id: "e1",
      date: new Date(2025, 4, 29),
      title: "Rent",
      price: 3000,
    },
    {
      id: "e2",
      date: new Date(2025, 4, 29),
      title: "Light-Bill",
      price: 900,
    },
    {
      id: "e3",
      date: new Date(2025, 4, 29),
      title: "Maintenance",
      price: 400,
    },
  ];

  return (
    <div>
      <h1 align="center">Welcome to expense Tracker</h1>
      <div className="app-class">
        <ExpenseItem
          date={expenseArray[0].date}
          title={expenseArray[0].title}
          price={expenseArray[0].price}
        />
        <ExpenseItem
          date={expenseArray[1].date}
          title={expenseArray[1].title}
          price={expenseArray[1].price}
        />
        <ExpenseItem
          date={expenseArray[2].date}
          title={expenseArray[2].title}
          price={expenseArray[2].price}
        />
      </div>
    </div>
  );

  //since we have array of props for each component, as above we can pass the data/props to each component
}

export default App;
