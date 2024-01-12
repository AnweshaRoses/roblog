"use client";
import Link from 'next/link'
import styles from "./links.module.css"
import Navlink from './navlink/Navlink'
import { useState } from 'react';
import { handleLogOut } from '@/lib/action';
import { auth } from '@/lib/auth';
const links = [
    {
        title: "Homepage",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Blog",
        path: "/blog"
    },
];
const Links = ({session}) => {

    const [open, setOpen] = useState(false);
    function toggleIsLoading() {
        console.log("Clicked me!");
      }
    //temp
    // const session = true;
    // const isAdmin = true;

    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <Navlink item={link} key={link.title} />
                )))}{
                    session?.user ? (
                        <>
                            {
                         session.user?.isAdmin && (
                                    <Navlink item={{ title: "Admin", path: "/admin" }} />
                                )
                            }
                            <form action={handleLogOut}>

                            <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <Navlink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            <div suppressHydrationWarning>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            </div>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
            
            </div>

    )
}

export default Links