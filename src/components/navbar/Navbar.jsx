import React from 'react'
import Links from './links/Link'
import styles from "./navbar.module.css"
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            Roblog
        </Link>
        <div className="link">
            <Links/>
        </div>
    </div>
  )
}

export default Navbar