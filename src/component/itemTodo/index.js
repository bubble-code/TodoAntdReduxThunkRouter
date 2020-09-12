import React from 'react'
import { useDispatch } from 'react-redux'
import { editTodo, deleteTodo } from '../../store/actions'
import { Tooltip, Tag, List, Button, Popconfirm, Switch, message } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'


export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()

    const handleTodoToggle = tod => {
        dispatch(editTodo(tod))
        message.warn('Tarea actualizada');
    }
    const handleRemoveTodo = id => {
        dispatch(deleteTodo(id));
        message.success('Tarea Eliminada')
    }
    return (
        <List.Item actions={[
            <Tooltip title={todo.completed ? 'Completado' : 'Sin completar'}>
                <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={() => handleTodoToggle(todo)}
                    defaultChecked={todo.completed}
                />
            </Tooltip>,
            <Popconfirm
                title='Estas Seguro que quieres eliminarlo?'
                onConfirm={() => {
                    handleRemoveTodo(todo.id);
                }}>
                <Button type='primary' danger>
                    X
            </Button>
            </Popconfirm>,
        ]}
            key={todo.id}
        >
            <div>
                <Tag color={todo.completed ? 'cyan' : 'red'}>
                    {todo.name}

                </Tag>
            </div>

        </List.Item>
    )
}

