import React from 'react'
import Button from '../Button'
import styles from './ToastPlayground.module.css'
import ToastShelf from '../ToastShelf'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0])
  const [toasts, setToasts] = React.useState([])

  const handleCreateToast = (event) => {
    event.preventDefault()
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        selectedVariant,
      },
    ]

    setToasts(nextToasts)

    setMessage('')
    setSelectedVariant(VARIANT_OPTIONS[0])
  }

  const handleCloseToast = (id) => {
    const nextToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(nextToasts)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleCloseToast={handleCloseToast} />

      <form className={styles.controlsWrapper} onSubmit={handleCreateToast}>
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id='message' value={message} onChange={(event) => setMessage(event.target.value)} className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type='radio'
                    name='variant'
                    value={option}
                    onChange={(event) => setSelectedVariant(event.target.value)}
                    checked={option === selectedVariant}
                  />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
