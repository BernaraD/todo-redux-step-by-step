import React, {useState} from 'react';
import {connect} from 'react-redux';

function Dashboard(props) {

    const [editMode, setEditMode] = useState(false);
    const [editedTodo, setEditedTodo] = useState(props.title)



    const onDelete = (todoId) => {
        props.onDelete(todoId)
    }

    const saveEdited = () => {
        props.saveEdited(props.id, editedTodo);
        setEditMode(false);

    }
    const inputHandler = (e) => {
        setEditedTodo(e.target.value);
    }

    const doneStyle = props.done === true ? {
        textDecoration: 'line-through',
        listStyleType: 'none'
    } : {listStyleType: 'none'}


    return (
        <div>
            {editMode ? (
                <div>

                    <input type="text" value={editedTodo} onChange={inputHandler}/>
                    <button onClick={saveEdited}>Save</button>
                </div>

            ) : (
                <div>
                    <ul style={doneStyle}>
                        {props.title}
                        <button onClick={() => setEditMode(true)}>Edit</button>
                        <button onClick={() => onDelete(props.id)}>Delete</button>
                        <button onClick={() => props.onDoneToggle(props.id)}>{ props.done ? "Done" : "Undone"}</button>
                    </ul>
                </div>
            )}


        </div>
    );
}

//при помощи этой функции мы можем обращаться в Global Store
const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onDelete: (todoId) => dispatch({type: 'TODO_DELETE', payload: todoId}),
    saveEdited: (todoId, newName) => dispatch({type: 'TODO_EDIT', payload: {todoId, newName}}),
    onDoneToggle: (todoId) => dispatch({type: 'TODO_DONE_TOGGLE', payload: todoId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);