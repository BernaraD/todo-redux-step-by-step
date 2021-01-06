import React, {useState} from 'react';
import {connect} from 'react-redux';

function ToDoCreateForm(props) {

    //пустой массив для деструктуризации, чтобы ничего не сломалось default value = []
    const {todos = [],} = props;


    const [todo, setTodo] = useState('');


    const addTodo = () => {
        props.addTodo(todo);
        setTodo('');
    };


    return (
        <div>

            <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add todo</button>

        </div>
    );
}

//при помощи этой функции мы можем обращаться в Global Store
const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({type: 'TODO_ADD', payload: todo}),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCreateForm);