import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) =>{
    let expenseArray=props.expenseArray;
    return(
        <div className="expenses-item">
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
        <ExpenseItem
          date={expenseArray[3].date}
          title={expenseArray[3].title}
          price={expenseArray[3].price}
        />
        </div>

    );
}


export default Expenses;