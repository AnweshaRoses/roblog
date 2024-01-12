"use client"
import React from 'react'
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import styles from './loginform.module.css'
const LoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);
    const router = useRouter();

    // useEffect(() => {
    //   state?.success && router.push("/login");
    // }, [state?.success, router]);
  
  return (
   
        <form className={styles.form} action={formAction}>
        <input type="text" placeholder='Username' name="username"/>
        <input type="password" placeholder='Password' name="password"/>
        <button>Login</button>
        {state?.error}
        <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
      </form>
    
  )
}

export default LoginForm