import React from 'react'
import Links from './links/Link'
import styles from "./navbar.module.css"
import Link from 'next/link'
import { auth } from '@/lib/auth'
const Navbar = async () => {
    const session = await auth();
    console.log(session);
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            Roblog
        </Link>
        <div className="link">
            <Links session={session}/>
        </div>
    </div>
  )
}

export default Navbar