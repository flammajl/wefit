import { ButtonHTMLAttributes } from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/images/shopping-cart.svg'
import * as S from './styles'

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
  isAddToCart?: boolean
  amount?: number
}

export function Button ({ children, isAddToCart, amount, ...rest } : TButton) {
  return (
    <S.Button
      hasItem={!!amount}
      {...rest}
    >
      {isAddToCart && (
        <span>
          <ShoppingCart />
          {amount}
        </span>
      )}
      {children}
    </S.Button>
  )
}
