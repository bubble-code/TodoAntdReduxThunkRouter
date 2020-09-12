import React, { useEffect } from 'react'
import { fetchTodo } from '../store/actions'
import { Row, Col, Card, PageHeader } from 'antd'
import 'antd/dist/antd.css'
import { useDispatch } from 'react-redux'
import { AddTodoForm } from '../component/addTodoForm'
import { ListTodoList } from '../component/listTodo'

export const TodoContainer = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodo())
    }, [])

    return (
        <Row justify="center" align="middle" gutter={[0, 20]} >
            <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
                <PageHeader title="Herramienta de Administracion de Tareas" subTitle="Para adicionar una tarea, debe
rellenar el formulario de abajo"/>
            </Col>
            <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
                <Card title="Adicionar nueva Tarea">
                    <AddTodoForm  />
                </Card>
            </Col>
            <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
                <Card title='Lista de tareas'>
                    <ListTodoList />
                </Card>
            </Col>
        </Row>
    )
}

