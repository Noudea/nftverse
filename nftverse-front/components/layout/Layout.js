import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <div>Header</div>
      <main className={styles.main}>{children}</main>
      <footer>footer</footer>
    </div>
  )
}

export default Layout
