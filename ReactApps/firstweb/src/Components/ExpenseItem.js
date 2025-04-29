import './ExpenseItem.css';

function ExpenseItem(props){

    let date = props.date.toISOString();
    let title = props.title;
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

export default ExpenseItem;