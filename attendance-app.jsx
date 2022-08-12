const initialState = {
    count: 0,
    students: [],
};
 

const reducer = (state, action) => {
    switch(action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false,
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            };
        
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter((student) => {
                    return student.id !== action.payload.id
                }),
            }

        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map(student => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere};
                    }
                    return student;
                }),
            }
        
        default: 
            return state;
    }
}


function App() {
    const { useState, useEffect, useReducer } = React;
    const [name, setName] = useState('');
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    console.log('rerendering...')
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
            <button onClick={() => {
                dispatch({type: 'add-student', payload: {name}})
            }}>Add</button>

            {studentsInfo.students.map(student => {
                return (
                    <Student 
                        key={student.id} 
                        name={student.name} 
                        dispatch={dispatch}
                        id={student.id}
                        isHere={student.isHere}
                    />);
            })}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));