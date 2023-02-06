import { NavLink } from 'react-router-dom'
import { ReactComponent as CartSVG } from '../../assets/images/cart.svg'

import * as S from './styles'

export function Header () {
  return (
    <header>
      <S.Container>
        <NavLink to='/'>WeMovies</NavLink>

        <NavLink to='/cart'>
          <span>
            <span>
              <strong>Meu carrinho</strong>
              0 itens
            </span>
            <CartSVG />
          </span>
        </NavLink>
      </S.Container>
    </header>
  )
}
