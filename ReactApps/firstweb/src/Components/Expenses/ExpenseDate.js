import './ExpenseDate.css';

const ExpenseDate = (props)=>{

    const month = props.date.toLocaleString('en-US', {month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});

   // console.log("month = "+month+" day = "+day+" year = "+year);

    return(
        <div className="Expense-Date">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    );

}

export default ExpenseDate;