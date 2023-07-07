'use client'
import AppLayout from '@/components/appLayout'
import AppPostComponent from '@/components/post'
import UploadPostComponent from '@/components/uploadPost'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'

export default function Page() {
    return (
        <main>
            <AppLayout>
                <Row gutter={12}>
                    <Col span={7}>
                        {' '}
                        <Card style={{ position: 'fixed' }}>
                            <Avatar
                                size="large"
                                style={{ width: 100, height: 100 }}
                                // icon={<UserOutlined size={400} />}
                            />
                            <br />
                            <br />
                            <Meta
                                title="Last name, First Name"
                                description="testemail@email.com"
                            />
                        </Card>
                    </Col>{' '}
                    <Col span={17}>
                        <Card>
                            <UploadPostComponent />
                        </Card>
                        <br />
                        <AppPostComponent />
                    </Col>
                </Row>

                <div></div>
            </AppLayout>
        </main>
    )
}
