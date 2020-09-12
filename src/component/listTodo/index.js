import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'
import { TodoItem } from '../itemTodo'

export const ListTodoList = () => {
    const state = useSelector(state => state.todos)
    const showTextEmpty = "No hay datos para mostrar";

    return (
        <List locale={{ emptyText: showTextEmpty }} dataSource={state}
            renderItem={item => (<TodoItem todo={item} />)}>
        </List>
    )
}
