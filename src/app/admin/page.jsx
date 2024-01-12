import React, { Suspense } from 'react'
import styles from './admin.module.css'
import AdminPost from '@/components/adminPosts/AdminPost'
import AdminPostForm from '@/components/adminPostForm/AdminPostForm'
import AdminUser from '@/components/adminUsers/AdminUser'
import AdminUserForm from '@/components/adminUserForm/AdminUserForm'

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
      <div className={styles.col}>
      <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
      </div>
      <div className={styles.col}>

            <AdminPostForm />

      </div>

      </div>
      <div className={styles.row}>
      <div className={styles.col}>
      <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
      </div>
      <div className={styles.col}>

            <AdminUserForm />

      </div>

      </div>
    </div>
  )
}

export default AdminPage