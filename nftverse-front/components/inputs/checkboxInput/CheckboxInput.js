import styles from './CheckboxInput.module.scss'

function CheckboxInput ({ name, label }) {
  return (
    <label className={styles.label}>{label}
      <input type='checkbox' className={styles.input_checkbox} />
      <span className={styles.btn_checkbox} />
    </label>
  )
}

export default CheckboxInput
