import { useNavigate } from 'react-router-dom'
import { Button, EmptyCart } from '../../ui'
import { TCartProduct, useCart } from '../../context/CartContext'

import { ReactComponent as TrashIcon } from '../../assets/images/trash.svg'
import { ReactComponent as MinusCircle } from '../../assets/images/minus-circle.svg'
import { ReactComponent as PlusCircle } from '../../assets/images/plus-circle.svg'

import { useMedia } from '../../helpers'
import { Mobile } from './Mobile/Mobile'
import * as S from './styles'

export function Cart () {
  const navigate = useNavigate()
  const { cartProducts, removeProduct, updateProductAmount, clearCart } = useCart()
  const mobile = useMedia('(max-width: 500px)')

  const totalPrice = cartProducts?.reduce((sumTotal, product) => {
    const total = sumTotal + product.price * product.amount
    return total
  }, 0)

  function handleProductIncrement (product : TCartProduct) {
    updateProductAmount({
      amount: product.amount + 1,
      product,
    })
  }

  function handleProductDecrement (product : TCartProduct) {
    updateProductAmount({
      amount: product.amount - 1,
      product,
    })
  }

  function handleConfirmOrder () {
    clearCart()
    navigate('/order-confirmed')
  }

  if (!cartProducts.length) {
    return <EmptyCart />
  }

  if (mobile) {
    return (
      <Mobile />
    )
  }

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cartProducts.map(product => (
            <tr key={product.id}>
              <td>
                <div>
                  <img src={product.image} alt={product.title} />
                </div>
                <div>
                  <span>{product.title}</span>
                  <strong>{Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(product.price)}
                  </strong>
                </div>
              </td>
              <td>
                <div>
                  <button onClick={() => handleProductDecrement(product)}>
                    <MinusCircle />
                  </button>
                  <input type='number' value={product.amount} disabled />
                  <button onClick={() => handleProductIncrement(product)}>
                    <PlusCircle />
                  </button>
                </div>
              </td>
              <td>
                <strong>{Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.amount * product.price)}
                </strong>
              </td>
              <td>
                <button onClick={() => removeProduct(product.id)}>
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </S.Table>
      <S.Resume>
        <S.ButtonContainer>
          <Button fullWidth onClick={handleConfirmOrder}>Finalizar Pedido</Button>
        </S.ButtonContainer>
        <div>
          <span>Total</span>
          <strong>{Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalPrice)}
          </strong>
        </div>
      </S.Resume>
    </S.Container>
  )
}
