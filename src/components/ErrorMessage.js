import React from 'react'

const ErrorMessage = (props) => {
  const { errorMessage } = props

  const handleDismissClick = e => {
    props.resetErrorMessage()
    e.preventDefault()
  }

  if (!errorMessage) {
    return null
  }

  return (
    <p style={{ backgroundColor: '#e99', padding: 10 }}>
      <b>{errorMessage}</b>
      <button onClick={handleDismissClick}>
        Dismiss
      </button>
    </p>
  )
}

export default ErrorMessage
