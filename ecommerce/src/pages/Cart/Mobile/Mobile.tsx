
import { useNavigate } from 'react-router-dom'
import { TCartProduct, useCart } from '../../../context/CartContext'
import { Button } from '../../../ui'

import { ReactComponent as TrashIcon } from '../../../assets/images/trash.svg'
import { ReactComponent as MinusCircle } from '../../../assets/images/minus-circle.svg'
import { ReactComponent as PlusCircle } from '../../../assets/images/plus-circle.svg'
import * as S from './styles'

export function Mobile () {
  const navigate = useNavigate()
  const { cartProducts, removeProduct, updateProductAmount, clearCart } = useCart()

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

  return (
    <S.MobileContainer>
      {cartProducts.map(product => (
        <section key={product.id}>
          <div>
            <img src={product.image} alt={product.title} />
          </div>

          <div>
            <span>{product.title}</span>
            <div>
              <button onClick={() => handleProductDecrement(product)}>
                <MinusCircle />
              </button>
              <input type='number' value={product.amount} disabled />
              <button onClick={() => handleProductIncrement(product)}>
                <PlusCircle />
              </button>
            </div>
          </div>

          <div>
            <div>
              <strong>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}
              </strong>
              <button onClick={() => removeProduct(product.id)}>
                <TrashIcon />
              </button>
            </div>
            <div>
              <span>Subtotal</span>
              <strong>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.amount * product.price)}
              </strong>
            </div>
          </div>
        </section>
      ))}
      <S.Resume>
        <div>
          <span>Total</span>
          <strong>{Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalPrice)}
          </strong>
        </div>
        <Button fullWidth onClick={handleConfirmOrder}>Finalizar Pedido</Button>
      </S.Resume>
    </S.MobileContainer>
  )
}
