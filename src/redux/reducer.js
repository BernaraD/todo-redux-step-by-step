const initialState = {
    todos: [
        {title: 'First todo', done: true, id: 1},
        {title: 'Second todo', done: false, id: 2}
    ]
};

const todo = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_TODO_LIST':
            return {
                ...state,
                todos: action.payload
            };

        case 'SET_TODO_LIST':
            return {
                ...state,
                todos: action.payload
            };

        case 'TODO_ADD':
            return {
                ...state,
                todos: [...state.todos, {title: action.payload, done: false, id: Math.random()}]
            };

        case 'TODO_DELETE':
            const updatedList = state.todos.filter(el => el.id !== action.payload)
            return {
                ...state,
                todos: updatedList
            }

        case 'TODO_EDIT':
            const editedTodos = state.todos.map(el => {
                if (el.id === action.payload.todoId) return ({
                    ...el,
                    title: action.payload.newName,
                })
                else return el
            })
            return {
                ...state,
                todos: editedTodos
            };


        case 'TODO_DONE_TOGGLE':
            const toggleTodo = state.todos.map(el => {
                if (el.id === action.payload) return ({...el, done: !el.done})
                else return el;
            })
            return {
                ...state,
                todos: toggleTodo
            };
        default:
            return state;
    }
};

export default todo;