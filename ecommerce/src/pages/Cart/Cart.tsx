import { Button, EmptyCart } from '../../ui'

import * as S from './styles'
import { ReactComponent as TrashIcon } from '../../assets/images/trash.svg'
import { ReactComponent as MinusCircle } from '../../assets/images/minus-circle.svg'
import { ReactComponent as PlusCircle } from '../../assets/images/plus-circle.svg'

export function Cart () {
  return (
    <S.Container>
      <S.Table>
        <thead>
          <th>Produto</th>
          <th>QTD</th>
          <th>Subtotal</th>
          <th />
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <img src='https://www.imagemhost.com.br/images/2022/07/10/spider-man.png' alt='' />
              </div>
              <div>
                <span>Homem Aranha</span>
                <strong>{Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(29.9)}
                </strong>
              </div>
            </td>
            <td>
              <div>
                <button>
                  <MinusCircle />
                </button>
                <input type='number' />
                <button>
                  <PlusCircle />
                </button>
              </div>
            </td>
            <td>
              <strong>{Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(29.9)}
              </strong>
            </td>
            <td>
              <button>
                <TrashIcon />
              </button>
            </td>
          </tr>
        </tbody>
      </S.Table>
      <S.Resume>
        <S.ButtonContainer>
          <Button fullWidth>Finalizar Pedido</Button>
        </S.ButtonContainer>
        <div>
          <span>Total</span>
          <strong>{Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(29.9)}
          </strong>
        </div>
      </S.Resume>
    </S.Container>
  )
}
