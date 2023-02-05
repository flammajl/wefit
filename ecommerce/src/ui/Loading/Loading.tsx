import * as S from './styles'
import spinner from '../../assets/images/load-spinner.png'

export function Loading () {
  return (
    <S.Container>
      <img src={spinner} alt='Carregando itens' />
    </S.Container>
  )
}
