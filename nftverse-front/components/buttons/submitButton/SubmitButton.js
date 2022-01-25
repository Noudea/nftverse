import styles from './SubmitButton.module.scss'

function SubmitButton ({ children }) {
  return (
    <button className={styles.submit_button} type='submit'>{children}</button>
  )
}

export default SubmitButton
