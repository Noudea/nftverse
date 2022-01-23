import { useState } from 'react'
import ThemeContext from '../contexts/ThemeContext'

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  const context = {
    toggleDark: () => {
      setIsDark(!isDark)
    },
    isDark
  }

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
