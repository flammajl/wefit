import { useEffect, useState } from 'react'
import { getMovies, TProducts } from '../../services'
import { Loading } from '../../ui'

export function Home () {
  const [IsLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<TProducts>([])

  async function fetchProducts () {
    try {
      setIsLoading(true)
      const movies = await getMovies()

      if (movies) {
        setProducts(movies)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      {IsLoading
        ? (
          <Loading />
          )
        : (
          <h1>Home</h1>
          )}
    </>
  )
}
