import { NavLink } from 'react-router-dom'
import { ReactComponent as CartSVG } from '../../assets/images/cart.svg'
import { useCart } from '../../context/CartContext'
import { useMedia } from '../../helpers'

import * as S from './styles'

export function Header () {
  const { cartProducts } = useCart()
  const mobile = useMedia('(max-width: 500px)')

  return (
    <header>
      <S.Container>
        <NavLink to='/'>WeMovies</NavLink>

        <NavLink to='/cart'>
          <span>
            <span>
              {!mobile && <strong>Meu carrinho</strong>}
              {cartProducts.length} {cartProducts.length === 1 ? 'item' : 'itens'}
            </span>
            <CartSVG />
          </span>
        </NavLink>
      </S.Container>
    </header>
  )
}
