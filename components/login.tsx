'use client'
import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'
const Login = () => {
    const router = useRouter()
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <div className={styles.container}>
            <div
                style={{
                    height: '100vh',
                    backgroundImage: `url("https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`,
                }}
            >
                <Row>
                    <Col flex={12}></Col>{' '}
                    <Col flex={3}>
                        <Card style={{ width: '30rem', margin: '20vh 0' }}>
                            <h1>Hoops</h1>
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                layout="vertical"
                            >
                                <Form.Item
                                    wrapperCol={{ offset: 0 }}
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    wrapperCol={{ offset: 0 }}
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                {/* <Form.Item wrapperCol={{ offset: 0 }}>
                                    <Button type="text" htmlType="submit" block>
                                        Forgotten your password? try recovering
                                        it
                                    </Button>
                                </Form.Item> */}

                                <Form.Item wrapperCol={{ offset: 0 }}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                    >
                                        Login
                                    </Button>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 0 }}>
                                    <Button
                                        type="text"
                                        block
                                        onClick={() =>
                                            router.push('/registration')
                                        }
                                    >
                                        Dont have an account yet? Sign up!
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Login
