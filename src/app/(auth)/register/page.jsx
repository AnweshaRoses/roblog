import { register } from '@/lib/action'
import React from 'react'
import styles from './register.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form className={styles.form} action={register}>
        <input type="text" placeholder='Username' name="username"/>
        <input type="email" placeholder='Email' name="email"/>
        <input type="password" placeholder='Password' name="password"/>
        <input type="password" placeholder='Password again' name="passwordRepeat"/>
        <button>Register</button>
      </form>
      </div>
    </div>
  )
}

export default RegisterPage