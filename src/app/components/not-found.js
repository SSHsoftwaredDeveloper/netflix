import React from 'react'
import styles from '@/app/styles/common.module.css'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error_page}>
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find requested resources</p>
        <Link href="/">Go To Home Page </Link>
      </div>
    </div>
  )
}

export default NotFound
