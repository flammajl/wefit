import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { TProduct } from '../../services'
import { Button } from '../Button/Button'
import * as S from './styles'

type TMovieCard = {
  product: TProduct
}

export function MovieCard ({ product }: TMovieCard) {
  const { addProduct, cartProducts } = useCart()
  const productItem = cartProducts.find(item => item.id === product.id)

  function handleAddProduct () {
    addProduct(product)
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
      <Button fullWidth isAddToCart amount={productItem?.amount || 0} onClick={handleAddProduct}>Adicionar ao carrinho</Button>
    </S.Container>
  )
}
