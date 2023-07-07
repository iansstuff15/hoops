'use client'
import {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    LikeOutlined,
    CommentOutlined,
    ShareAltOutlined,
    CloseCircleOutlined,
    SendOutlined,
} from '@ant-design/icons'
import {
    Card,
    Avatar,
    Image,
    message,
    Modal,
    Button,
    Input,
    Row,
    Col,
} from 'antd'
import Meta from 'antd/es/card/Meta'
import { useState } from 'react'

const AppPostComponent = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const [commentModal, setCommentModal] = useState(false)
    return (
        <>
            <Card
                style={{ width: '100%' }}
                actions={[
                    <LikeOutlined key="like-unfilled" />,
                    <CommentOutlined
                        key="comment"
                        onClick={() => setCommentModal(true)}
                    />,
                    <ShareAltOutlined
                        key="share"
                        onClick={() => {
                            messageApi.open({
                                type: 'success',
                                content: 'Link copied to clipboard',
                            })
                        }}
                    />,
                ]}
            >
                {contextHolder}
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
                    style={{ objectFit: 'cover', width: '125%' }}
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            </Card>
            <Modal
                open={commentModal}
                bodyStyle={{ maxHeight: '50vh', overflowY: 'scroll' }}
                footer={
                    <Row gutter={12}>
                        <Col span={18}>
                            <Input placeholder="write your comment here" />
                        </Col>
                        <Col span={6}>
                            {' '}
                            <Button type="primary" icon={<SendOutlined />}>
                                Comment
                            </Button>
                        </Col>
                    </Row>
                }
                closeIcon={<CloseCircleOutlined />}
                title={'Comments'}
                onCancel={() => setCommentModal(false)}
            >
                <Card>
                    <Meta
                        avatar={
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <br />
                <Card>
                    <Meta
                        avatar={
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <br />
                <Card>
                    <Meta
                        avatar={
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <br />
                <Card>
                    <Meta
                        avatar={
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <br />
                <Card>
                    <Meta
                        avatar={
                            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                        }
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
                <br />
            </Modal>
        </>
    )
}

export default AppPostComponent
