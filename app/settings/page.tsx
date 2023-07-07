'use client'
import AppLayout from '@/components/appLayout'
import DeleteAccount from '@/components/deleteAccount'
import { Button, Card, Input, Modal } from 'antd'
import { useState } from 'react'

export default function Page() {
    const [showAccountModefication, setShowAccountModefication] =
        useState(false)
    const [showPasswordModefication, setShowPasswordModefication] =
        useState(false)
    const [showDeleteAccount, setShowDeleteAccount] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState('')
    return (
        <main>
            <AppLayout>
                <Card>
                    <h1>Change Account Information</h1>
                    <p>
                        {' '}
                        Tweak and tune your profile effortlessly. Update your
                        personal details, such as address and contact
                        information, so your account stays current and
                        connected.
                    </p>{' '}
                    <br />
                    <Button
                        type="primary"
                        onClick={() => setShowAccountModefication(true)}
                    >
                        Continue account modefication
                    </Button>
                </Card>
                <br />
                <Card>
                    <h1>Change Password</h1>
                    <p>
                        Shield your account from unwelcome intrusions. Here, you
                        can bolster your security by crafting a new, impregnable
                        password. Lock out any lurking threats with a single
                        keystroke.
                    </p>{' '}
                    <br />
                    <Button
                        type="primary"
                        onClick={() => setShowPasswordModefication(true)}
                    >
                        Continue modefiying password
                    </Button>
                </Card>
                <br />
                <Card>
                    <h1>Delete Account</h1>
                    <p>
                        Ready to bid adieu? This section lets you bid a
                        permanent goodbye to your account. Exercise caution,
                        though—once you delete, it's final. Your history,
                        settings, and data will vanish into the digital abyss.
                    </p>
                    <br />
                    <Button
                        type="primary"
                        onClick={() => setShowDeleteAccount(true)}
                    >
                        Continue delete account
                    </Button>
                </Card>

                <Modal
                    title="Delete Account"
                    open={showDeleteAccount}
                    onOk={() => {
                        setShowDeleteAccount(false)
                    }}
                    onCancel={() => {
                        setShowDeleteAccount(false)
                    }}
                    okText="Delete my account permanently"
                    okButtonProps={{
                        style: { backgroundColor: '#ad2102' },
                        disabled: confirmDelete == 'user' ? false : true,
                    }}
                    closable={false}
                >
                    <DeleteAccount />
                    <Input
                        placeholder={`to confirm plase retype "user"`}
                        onChange={(e) => setConfirmDelete(e.target.value)}
                    />
                </Modal>
                <Modal
                    title="Change Account Information"
                    open={showAccountModefication}
                    onOk={() => {
                        setShowAccountModefication(false)
                    }}
                    onCancel={() => {
                        setShowAccountModefication(false)
                    }}
                    closable={false}
                ></Modal>
                <Modal
                    title="Change Password"
                    open={showPasswordModefication}
                    okText="Update Password"
                    onOk={() => {
                        setShowPasswordModefication(false)
                    }}
                    onCancel={() => {
                        setShowPasswordModefication(false)
                    }}
                    closable={false}
                >
                    <h5>Old Password</h5>
                    <Input />
                    <h5>New Password</h5>
                    <Input />
                </Modal>
            </AppLayout>
        </main>
    )
}
