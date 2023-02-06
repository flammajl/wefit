import * as S from './styles'

import emptyCart from '../../assets/images/empty-cart.png'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export function EmptyCart () {
  const navigate = useNavigate()

  function handleGoBack () {
    navigate('/')
  }

  return (
    <S.Container>
      <h1>Parece que não há nada por aqui :(</h1>
      <div>
        <img src={emptyCart} alt='Imagem de uma mulher simbolizando que o carrinho está vazio.' />
      </div>

      <S.ButtonContainer>
        <Button fullWidth onClick={handleGoBack}>Voltar</Button>
      </S.ButtonContainer>
    </S.Container>
  )
}
