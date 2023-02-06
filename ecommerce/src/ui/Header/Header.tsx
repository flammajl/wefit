import { NavLink } from 'react-router-dom'
import { ReactComponent as CartSVG } from '../../assets/images/cart.svg'
import { useCart } from '../../context/CartContext'

import * as S from './styles'

export function Header () {
  const { cartProducts } = useCart()
  return (
    <header>
      <S.Container>
        <NavLink to='/'>WeMovies</NavLink>

        <NavLink to='/cart'>
          <span>
            <span>
              <strong>Meu carrinho</strong>
              {cartProducts.length} {cartProducts.length === 1 ? 'item' : 'itens'}
            </span>
            <CartSVG />
          </span>
        </NavLink>
      </S.Container>
    </header>
  )
}
