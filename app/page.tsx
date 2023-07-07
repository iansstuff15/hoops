import Image from 'next/image'
import styles from './page.module.css'
import Login from '@/components/login'
import Feed from '@/components/feed'

export default function Home() {
    return (
        <main>
            <Feed />
        </main>
    )
}
