import { ReactComponent as CartSVG } from '../../assets/images/cart.svg'

import * as S from './styles'

export function Header () {
  return (
    <header>
      <S.Container>
        <h1>WeMovies</h1>

        <button>
          <span>
            <span>
              <strong>Meu carrinho</strong>
              0 itens
            </span>
            <CartSVG />
          </span>
        </button>
      </S.Container>
    </header>
  )
}
