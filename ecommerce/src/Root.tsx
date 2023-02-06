import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { CartProvider } from './context/CartContext'
import { queryClient } from './services'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme'

export function Root () {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <App />

          <GlobalStyle />
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
