'use client'
import {
    AppstoreOutlined,
    CloseCircleOutlined,
    HomeOutlined,
    MailOutlined,
    PlusCircleOutlined,
    SearchOutlined,
    SendOutlined,
    SettingOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import {
    Alert,
    Avatar,
    Button,
    Col,
    Empty,
    Layout,
    Menu,
    MenuProps,
    Modal,
    Row,
    Space,
    theme,
} from 'antd'
const { Header, Content, Footer, Sider } = Layout
import React, { useState } from 'react'
import UploadPostComponent from './uploadPost'
import AppAvatarComponent from './appAvatar'
import { Search, Option, Detail } from 'searchpal'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { FiSettings } from 'react-icons/fi'
type MenuItem = Required<MenuProps>['items'][number]

interface layoutProps {
    children: React.ReactNode
}
const AppLayout: React.FC<layoutProps> = ({ children }) => {
    const [showPost, setShowPost] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const pathname = usePathname()
    const router = useRouter()
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group'
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem
    }
    const navigationItems: MenuProps['items'] = [
        {
            label: 'Home',
            key: '/home',
            icon: <HomeOutlined />,
            onClick: () => router.push('/'),
        },
        {
            label: 'Settings',
            key: '/settings',
            icon: <FiSettings />,
            onClick: () => router.push('/settings'),
        },
    ]
    const topTopicsItems: MenuProps['items'] = [
        {
            label: <strong>Topic 1</strong>,
            key: '/topic1',
        },
        {
            label: 'Settings',
            key: '/settings',
        },
    ]
    return (
        <Layout style={{ height: '100vh', overflow: 'hidden' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken)
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type)
                }}
                style={{ background: 'white', padding: '0.8rem 1.5rem' }}
                width={'15vw'}
            >
                <div className="demo-logo-vertical" />
                <div
                    style={{
                        background: '#91caff',
                        width: '100%',
                        height: '3rem',
                        borderRadius: '0.8rem',
                    }}
                />
                <br />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    items={navigationItems}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: 'white' }}>
                    <Row gutter={12}>
                        <Col span={2}></Col>
                        <Col span={17}>
                            {' '}
                            <Button
                                icon={<SearchOutlined />}
                                onClick={() => setShowSearch(true)}
                                block
                            >
                                Search
                            </Button>
                        </Col>
                        <Col span={3}>
                            <Button
                                type="primary"
                                block
                                onClick={() => setShowPost(true)}
                                icon={<PlusCircleOutlined />}
                            >
                                Create
                            </Button>
                        </Col>
                        <Col span={2}>
                            <AppAvatarComponent />
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        padding: '1rem 5rem',
                        overflowY: 'scroll',
                        overflowX: 'hidden',
                    }}
                >
                    {children}
                </Content>
            </Layout>
            <Sider
                width={'20vw'}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken)
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type)
                }}
                style={{ background: 'white', padding: '1rem 2rem' }}
            >
                {' '}
                {/* <Alert
                    message="Verify Email"
                    description="Your email is not yet verified please verify your email"
                    type="warning"
                    showIcon
                />
                <br />
                <h1>Top Topics</h1>
                <div className="demo-logo-vertical" />
                <Menu theme="light" mode="inline" items={topTopicsItems} /> */}
                <h1>Notifications</h1>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </Sider>
            <Modal
                title="Post to feed"
                open={showPost}
                closeIcon={<CloseCircleOutlined />}
                onCancel={() => setShowPost(false)}
                footer={<></>}
            >
                <UploadPostComponent />
            </Modal>

            <Search
                label="Search..."
                open={showSearch}
                onClose={() => setShowSearch(false)}
            ></Search>
        </Layout>
    )
}

export default AppLayout
