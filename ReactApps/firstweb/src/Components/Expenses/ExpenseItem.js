import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props)=>{

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

export default ExpenseItem;