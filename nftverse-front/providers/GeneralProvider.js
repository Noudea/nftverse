import ThemeProvider from './ThemeProvider'

const GeneralProvider = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>

  )
}

export default GeneralProvider
