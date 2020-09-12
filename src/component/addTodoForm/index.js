import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/actions'
import { Form, Row, Col, Button, Input, message } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

export const AddTodoForm = () => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const handleSubmit = todo => {
        dispatch(addTodo({ name: form.getFieldValue('name'), id: 4, completed: false }))
        message.success('Tarea agregada');
        form.resetFields();
    }


    return (
        <Form form={form} onFinish={handleSubmit} layout="horizontal">
            <Row gutter={20}>
                <Col xs={24} sm={24} md={17} lg={19} xl={20}>
                    <Form.Item name={'name'} rules={[{ required: true, message: 'Este Campo es obligatorio' }]}>
                        <Input placeholder='Entre el nombre de la tarea' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={7} lg={5} xl={4}>
                    <Button type='primary' htmlType='submit' block>
                        <PlusCircleFilled />
        Add Tarea
    </Button>
                </Col>
            </Row>
        </Form>
    )
}
