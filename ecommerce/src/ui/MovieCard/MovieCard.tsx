import { useState } from 'react'
import { TProduct } from '../../services'
import { Button } from '../Button/Button'
import * as S from './styles'

type TMovieCard = {
  product: TProduct
}

export function MovieCard ({ product }: TMovieCard) {
  const [count, setCount] = useState(0)

  function handleAddProduct () {
    setCount(oldCount => oldCount + 1)
  }

  return (
    <S.Container>
      <div>
        <img src={product.image} alt='' />
      </div>
      <span>{product.title}</span>
      <strong>{Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(product.price)}
      </strong>
      <Button fullWidth isAddToCart count={count} onClick={handleAddProduct}>Adicionar ao carrinho</Button>
    </S.Container>
  )
}
