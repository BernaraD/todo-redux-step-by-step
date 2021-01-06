import React from 'react';
import {connect} from 'react-redux';
import Dashboard from "./Dashboard";

function ToDoList(props) {

    const listOfTodos = props.todos;

    return (
        <div>
            <ul>
                {listOfTodos.map(el => <ul key={el.id} >
                    <Dashboard title={el.title}
                              done={el.done}
                              id={el.id}/>

                </ul>)}


            </ul>

        </div>
    );
}

//при помощи этой функции мы можем обращаться в Global Store
const mapStateToProps = (state) => ({
    todos: state.todos
});


export default connect(mapStateToProps, null)(ToDoList);