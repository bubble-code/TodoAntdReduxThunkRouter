import { TODO_CONSTANTS } from '../constant'
import axios from 'axios'
import { v1 } from 'uuid'

export const fetchTodo = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3000/todos');
        console.log(response.data);
        dispatch({
            type: TODO_CONSTANTS.UPDATE_TODO,
            payload: response.data
        })

    }
}

export const addTodo = todo => {
    return async dispatch => {
        const response = await axios.post('http://localhost:3000/todos', { ...todo, id: v1() });
        dispatch({
            type: TODO_CONSTANTS.ADD_TODO,
            payload: response.data
        })
    }
}

export const deleteTodo = id => {
    return async dispatch => {
        const response = await axios.delete(`http://localhost:3000/todos/${id}`)
        dispatch({
            type: TODO_CONSTANTS.REMOVE_TODO,
            payload: id
        })
    }
}

export const editTodo = todo => {
    return async dispatch => {
        const response = await axios.put(`http://localhost:3000/todos/${todo.id}`, todo)
        dispatch({
            type: TODO_CONSTANTS.EDIT_TODO,
            payload: todo
        })
    }
}