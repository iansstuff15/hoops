'use client'
import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Steps,
    message,
    theme,
} from 'antd'
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
const Register = () => {
    const router = useRouter()

    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent(current + 1)
    }

    const prev = () => {
        setCurrent(current - 1)
    }
    const steps = [
        {
            title: 'Personal Information',
            content: 'First-content',
        },
        {
            title: 'Contact Information',
            content: 'Second-content',
        },
        {
            title: 'Profile Picture',
            content: 'Last-content',
        },
        {
            title: 'Account Credentials',
            content: 'Last-content',
        },
    ]
    const items = steps.map((item) => ({ key: item.title, title: item.title }))
    const { token } = theme.useToken()
    const contentStyle: React.CSSProperties = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
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
                        <Card style={{ margin: '20vh 0' }}>
                            <h1>Hoops</h1>
                            <Steps current={current} items={items} />
                            <div style={contentStyle}>
                                {steps[current].content}
                            </div>
                            <div style={{ marginTop: 24 }}>
                                {current < steps.length - 1 && (
                                    <Button
                                        type="primary"
                                        onClick={() => next()}
                                    >
                                        Next
                                    </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button
                                        type="primary"
                                        onClick={() =>
                                            message.success(
                                                'Processing complete!'
                                            )
                                        }
                                    >
                                        Done
                                    </Button>
                                )}
                                {current > 0 && (
                                    <Button
                                        style={{ margin: '0 8px' }}
                                        onClick={() => prev()}
                                    >
                                        Previous
                                    </Button>
                                )}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Register
