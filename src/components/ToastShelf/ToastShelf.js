import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id} selectedVariant={toast.selectedVariant} handleCloseToast={handleCloseToast}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default ToastShelf
