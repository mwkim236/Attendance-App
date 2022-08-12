function App() {
    const { useState, useEffect, useReducer } = React;
    
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h2>Welcome to my Reducer Bank!</h2>
            <p>Balance: $?</p>
            <input 
                type="text"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))} 
                step="1000"
            />
            <button>Deposit</button>
            <button>Withdraw</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));