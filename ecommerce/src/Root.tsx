import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { CartProvider } from './context/CartContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function Root () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <App />

        <GlobalStyle />
      </CartProvider>
    </ThemeProvider>
  )
}
