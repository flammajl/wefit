import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'react-hot-toast'
import { TProduct } from '../services'

type TCartProvider = {
  children: ReactNode;
}

export type TCartProduct = TProduct & {
  amount: number;
}

type TUpdateProductAmount = {
  product: TProduct
  amount: number
}

type TCart = {
  cartProducts: TCartProduct[]
  addProduct: (product: TProduct) => void;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({
    product,
    amount,
  }: TUpdateProductAmount) => void
}

const CartContext = createContext<TCart | null>(null)

export function CartProvider ({ children }: TCartProvider) {
  const [cartProducts, setCartProducts] = useState<TCartProduct[]>([])

  useEffect(() => {
    const storagedCart = localStorage.getItem('cart')

    if (storagedCart) {
      setCartProducts(JSON.parse(storagedCart))
    }
  }, [])

  function addProduct (product: TProduct) {
    try {
      const findProduct = cartProducts.find((cartItem) => cartItem.id === product.id)

      if (findProduct) {
        const updatedCart = cartProducts.map((item) =>
          item.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item,
        )

        setCartProducts(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        return toast.success('Item adicionado ao carrinho')
      }

      const cartData = {
        ...product,
        amount: 1,
      }

      setCartProducts((oldValue) => [...oldValue, cartData])
      localStorage.setItem(
        'cart',
        JSON.stringify([...cartProducts, cartData]),
      )
      toast.success('Item adicionado ao carrinho')
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  function removeProduct (productId: number) {
    try {
      const hasItem = cartProducts.some((item) => item.id === productId)
      if (!hasItem) {
        return toast.error('Erro na remoção do produto')
      }

      const updatedCart = cartProducts.filter((item) => item.id !== productId)

      setCartProducts(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      toast.success('Item removido do carrinho')
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  function updateProductAmount ({
    product,
    amount,
  }: TUpdateProductAmount) {
    try {
      if (amount <= 0) return

      const itemExists = cartProducts.some((item) => item.id === product.id)

      if (!itemExists) {
        return toast.error('Erro na alteração de quantidade do produto')
      }

      const updatedCart = cartProducts.map((item) =>
        item.id === product.id ? { ...item, amount } : item,
      )

      setCartProducts(updatedCart)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto')
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        removeProduct,
        updateProductAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart (): TCart {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Context must be used within a Provider!')
  }

  return context
}
