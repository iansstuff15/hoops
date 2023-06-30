'use client'
import { Button, Checkbox, Col, Form, Image, Input, Row, Upload } from 'antd'
import AppLayout from './appLayout'
import TextArea from 'antd/es/input/TextArea'
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
const Feed = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <AppLayout>
            <Card>
                <TextArea
                    placeholder="Autosize height based on content lines"
                    autoSize={{ minRows: 5 }}
                />
                <br />
                <br />

                <Button type="primary">Post</Button>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={4}
                    multiple
                >
                    <Button icon={<UploadOutlined />}>Photo</Button>
                </Upload>
            </Card>
            <br />
            <br />
            <Card
                style={{ width: '100%' }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={
                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                    }
                    title="Card title"
                    description="Dolor officia ad aliqua dolore voluptate labore proident id do aute. Cillum culpa pariatur proident dolore pariatur ad ad pariatur sunt incididunt duis voluptate. Consectetur amet cillum pariatur laborum labore qui cillum est."
                />
                <br />
                <br />
                <Image
                    height={400}
                    style={{ objectFit: 'cover', width: '150%' }}
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            </Card>
        </AppLayout>
    )
}

export default Feed
