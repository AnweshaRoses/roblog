import React from 'react'
import Links from './links/Link'
import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Logo
        </div>
        <div className="link">
            <Links/>
        </div>
    </div>
  )
}

export default Navbar