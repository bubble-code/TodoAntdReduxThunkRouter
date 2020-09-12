import { TODO_CONSTANTS } from '../constant'

const initialState = {
    todos: []
}

export const reducerTodo = (state = initialState, action) => {
    switch (action.type) {
        case TODO_CONSTANTS.UPDATE_TODO:
            return {
                todos: [...action.payload]
            }
        case TODO_CONSTANTS.ADD_TODO:
            return {
                todos: [...state.todos, action.payload]
            }
        case TODO_CONSTANTS.REMOVE_TODO:
            return {
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case TODO_CONSTANTS.EDIT_TODO:
            return {
                todos: state.todos.map(item =>
                    item.id === action.payload.id
                        ? { ...item, completed: !item.completed } : item)
            }
        default:
            return state;
    }
}
