import styles from './Modal.module.scss'
import ReactDOM from 'react-dom'
import { useEffect, useState } from 'react'

function Modal ({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false)
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  // const handleCloseClick = (e) => {
  //   e.preventDefault()
  //   onClose()
  // }

  const modalContent = show
    ? (
      <div className={styles.modal_wrapper} onClick={onClose}>
        <div className={styles.modal}>
          <div className={styles.modal_header} />
          <div className={styles.modal_content}>
            <div className={styles.modal_title}>{title}</div>
            {children}
            <div className={styles.modal_footer} />
          </div>
        </div>
      </div>
      )
    : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    )
  } else {
    return null
  }
}

export default Modal
