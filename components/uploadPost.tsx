'use-client'

import {
    PictureOutlined,
    SendOutlined,
    UploadOutlined,
} from '@ant-design/icons'
import { Button, Divider, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const UploadPostComponent = () => {
    return (
        <>
            <TextArea
                placeholder="Autosize height based on content lines"
                autoSize={{ minRows: 5 }}
            />
            <br />
            <br />
            <Button type="primary" icon={<SendOutlined />}>
                Post
            </Button>

            <Divider type="vertical" />

            <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture"
                maxCount={1}
                multiple
            >
                <Button icon={<PictureOutlined />}>Photo</Button>
            </Upload>
        </>
    )
}

export default UploadPostComponent
