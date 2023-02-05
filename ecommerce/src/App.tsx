import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DefaultLayout, Home } from './pages'

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
      ],
    },
  ])

  return (
    <RouterProvider router={routes} />
  )
}
