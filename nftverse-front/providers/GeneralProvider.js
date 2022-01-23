import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import ThemeProvider from './ThemeProvider'

const GeneralProvider = ({ children }) => {
  const { isDark } = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <div className={`${isDark ? 'theme--dark' : 'theme--light'}`}>
        {children}
      </div>
    </ThemeProvider>

  )
}

export default GeneralProvider
