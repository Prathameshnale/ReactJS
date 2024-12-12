import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App(){
    return(
        <div>
            <h1 align="center">Welcome to expense Tracker</h1>
            <div className='app-class'>
                <ExpenseItem/>
                <ExpenseItem/>
            </div>
        </div>
    );
}

export default App;