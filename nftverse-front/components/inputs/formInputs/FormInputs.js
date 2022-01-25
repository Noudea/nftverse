import styles from './FormInputs.module.scss'

function FormInputs ({ placeholder, type, name, required, error }) {
  return (
    <input className={styles.input} id={name} name={name} tabIndex='2' defaultValue='' aria-required='true' type={type} placeholder={placeholder} required={required} />
  )
}

export default FormInputs
