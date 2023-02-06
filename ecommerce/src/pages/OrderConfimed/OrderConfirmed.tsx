import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui'

import orderConfirmed from '../../assets/images/order-confirmed.png'
import * as S from './styles'

export function OrderConfirmed () {
  const navigate = useNavigate()

  function handleGoBack () {
    navigate('/')
  }

  return (
    <S.Container>
      <h1>Compra realizada com sucesso!</h1>
      <div>
        <img src={orderConfirmed} alt='Imagem de uma mulher simbolizando que o carrinho está vazio.' />
      </div>

      <S.ButtonContainer>
        <Button fullWidth onClick={handleGoBack}>Voltar</Button>
      </S.ButtonContainer>
    </S.Container>
  )
}
