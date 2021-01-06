import React from 'react';
import ToDoCreateForm from "./ToDoCreateForm";
import ToDoList from "./ToDoList";


function App() {


    return (
        <div className="App">
            <h3>To do list </h3>
            <ToDoCreateForm/>
            <ToDoList/>
        </div>
    );
}


export default App;