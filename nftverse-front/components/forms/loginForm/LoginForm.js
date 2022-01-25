import { useState } from 'react'
import { SubmitButton } from '../../buttons'
import { FormInputs } from '../../inputs'
import CheckboxInput from '../../inputs/checkboxInput/CheckboxInput'
import styles from './LoginForm.module.scss'

function LoginForm () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: ''
  })

  const onChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    console.log(formData)
  }

  return (
    <div className={styles.login_form_container}>
      <h1>Login to Nftverse</h1>
      <form onChange={onChange}>
        <FormInputs placeholder='Your Email Address' value={formData.email} name='email' type='email' />
        <FormInputs placeholder='Your password' value={formData.email} name='password' type='password' />
        <div className={styles.login_form_footer}>
          <CheckboxInput name='rememberMe' label='Remember me' />
          <p className={styles.forgot_password}>Forgot Password ?</p>
        </div>
        <SubmitButton>Login</SubmitButton>
      </form>
    </div>
  )
}

export default LoginForm
