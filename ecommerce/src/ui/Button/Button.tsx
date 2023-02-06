import { ButtonHTMLAttributes } from 'react'
import { ReactComponent as ShoppingCart } from '../../assets/images/shopping-cart.svg'
import * as S from './styles'

type TButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean
  isAddToCart?: boolean
  count?: number
}

export function Button ({ children, isAddToCart, count, ...rest } : TButton) {
  return (
    <S.Button
      {...rest}
    >
      {isAddToCart && (
        <span>
          <ShoppingCart />
          {count}
        </span>
      )}
      {children}
    </S.Button>
  )
}
