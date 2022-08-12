const reducer = (state, action) => {}

const initialState = {
    count: 0,
    students: [
        {
            id: Date.now(),
            name: 'John',
            isHere: false
        }
    ]
};

function App() {
    const { useState, useEffect, useReducer } = React;
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Attendance</h1>
            <p>Total Number of Students: {studentsInfo.count}</p>
            <input 
                type="text"
                placeholder="Enter student name"
                value={name}
                onChange={e => setName(e.target.value)} 
            />
            <button>Add</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));