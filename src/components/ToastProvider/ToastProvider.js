import React from 'react'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
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
    <ToastContext.Provider
      value={{
        message: message,
        setMessage: setMessage,
        selectedVariant: selectedVariant,
        setSelectedVariant: setSelectedVariant,
        toasts: toasts,
        handleCreateToast,
        handleCloseToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
