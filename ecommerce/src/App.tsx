import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart, DefaultLayout, Home, OrderConfirmed } from './pages'

export function App () {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'order-confirmed',
          element: <OrderConfirmed />,
        },
      ],
    },
  ])

  return (
    <RouterProvider router={routes} />
  )
}
