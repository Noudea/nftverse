import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <div className={`${isDark ? 'theme--dark' : 'theme--light'}`}>
      <div className={styles.layout_container}>
        <div>Header</div>
        <main className={styles.main}>{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  )
}

export default Layout
