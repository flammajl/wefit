import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart, DefaultLayout, Home } from './pages'

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
      ],
    },
  ])

  return (
    <RouterProvider router={routes} />
  )
}
