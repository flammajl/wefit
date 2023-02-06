import { ButtonHTMLAttributes } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
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
          <MdAddShoppingCart />
          {amount}
        </span>
      )}
      {children}
    </S.Button>
  )
}
