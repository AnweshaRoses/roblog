import LoginForm from '@/components/loginform/LoginForm';
import { handleGithubLogin } from '@/lib/action';
import styles from './login.module.css'
import React from 'react'

const LoginPage =  () => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
      <button className={styles.github}>Login with Github</button>
      </form>
      <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage