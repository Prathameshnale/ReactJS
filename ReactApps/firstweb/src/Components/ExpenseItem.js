import './ExpenseItem.css';

function ExpenseItem(){
    return(
        <div className="expense-item">
            <div>25 may 2024</div>
            <div className="expense-name">
            <h2 className="expense-h2">Life Insurence</h2>
            </div>
                
            <div className="expense-price">$50</div>
            
            
        </div>
    );
}

export default ExpenseItem;