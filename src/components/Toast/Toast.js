import React from 'react'
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather'

import VisuallyHidden from '../VisuallyHidden'

import styles from './Toast.module.css'
import { ToastContext } from '../ToastProvider'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ id, children, selectedVariant }) {
  const Icon = ICONS_BY_VARIANT[selectedVariant]
  const { handleCloseToast } = React.useContext(ToastContext)

  return (
    <div className={`${styles.toast} ${styles[selectedVariant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton}>
        <X onClick={() => handleCloseToast(id)} size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default Toast
