import React, { useState } from 'react';
import { connect } from 'react-redux';

function Dashboard (props) {

    //пустой массив для деструктуризации, чтобы ничего не сломалось default value = []
    const {todos = []} = props;

    const [todo, setTodo] = useState('');

    console.log(props);

    const addTodo = () => {
        props.addTodo(todo);
        setTodo('');
    };


    const onDelete = (todoId) => {
        props.onDelete(todoId)
    }

    return (
        <div>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add todo</button>


                { todos.map(el => <li key={el.title}>{el.title}

                    <button onClick={() => onDelete(el.id)}>Delete</button>
                    <button>Done</button>
                    <button >Edit</button>

                </li>)
                }


        </div>
    );
}
//при помощи этой функции мы можем обращаться в Global Store
const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch({ type: 'TODO_ADD', payload: todo }),
    onDelete: (todoId) => dispatch({ type: 'TODO_DELETE', payload: todoId })
});

export default connect( mapStateToProps, mapDispatchToProps )(Dashboard);