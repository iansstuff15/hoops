'use-client'
import { SmileOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Modal, Popover, Space } from 'antd'
import type { MenuProps } from 'antd'
import { useRouter } from 'next/navigation'
import { createContext } from 'react'

const AppAvatarComponent = () => {
    const [modal, contextHolder] = Modal.useModal()
    const ReachableContext = createContext<string | null>(null)
    const UnreachableContext = createContext<string | null>(null)
    const router = useRouter()
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Profile
                </a>
            ),
            onClick: () => {
                router.push('/profile')
            },
        },

        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    Logout
                </a>
            ),
            onClick: () => {
                modal.confirm({
                    title: 'Are you sure to logout?',
                    content: <></>,
                    okButtonProps: { style: { backgroundColor: '#ad2102' } },
                    okText: 'Logout',
                })
            },
        },
    ]
    return (
        <>
            {contextHolder}
            <Dropdown menu={{ items }}>
                <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
        </>
    )
}

export default AppAvatarComponent
