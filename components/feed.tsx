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
import UploadPostComponent from './uploadPost'
import AppPostComponent from './post'

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
                <UploadPostComponent />
            </Card>
            <br />
            <br />
            <AppPostComponent />
        </AppLayout>
    )
}

export default Feed
