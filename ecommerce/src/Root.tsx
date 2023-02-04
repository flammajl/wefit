import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function Root () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <App />

      <GlobalStyle />
    </ThemeProvider>
  )
}
