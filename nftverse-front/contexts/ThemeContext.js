import { createContext } from 'react'

const defaultContext = {
  toggleDark: () => {
    console.warn('Should have been overridden')
  },
  isDark: true
}

const ThemeContext = createContext(defaultContext)

export default ThemeContext
