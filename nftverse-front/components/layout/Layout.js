import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import BorderButton from '../buttons/borderButton/BorderButton'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className={`${isDark ? 'theme--dark' : 'theme--light'}`}>
      <div className={styles.layout_container}>
        <div>
          <BorderButton text='Login' />
        </div>
        <main className={styles.main}>{children}</main>
        <footer>footer</footer>
      </div>
      <div id='modal-root' />
    </div>
  )
}

export default Layout
