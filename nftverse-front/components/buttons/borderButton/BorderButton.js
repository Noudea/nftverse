import styles from './BorderButton.module.scss'

function BorderButton ({ iconBefore, iconAfter, text, onClick }) {
  return (
    <button className={styles.border_button} onClick={onClick}>
      {iconBefore && iconBefore}
      <p className={styles.border_button_text}>{text}</p>
      {iconAfter && iconAfter}
    </button>
  )
}

export default BorderButton
