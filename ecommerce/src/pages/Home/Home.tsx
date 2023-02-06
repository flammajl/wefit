import { useEffect, useState } from 'react'
import { getMovies, TProduct } from '../../services'
import { Loading, MovieCard } from '../../ui'

import * as S from './styles'

export function Home () {
  const [IsLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<TProduct[]>([])

  async function fetchProducts () {
    try {
      setIsLoading(true)
      const movies = await getMovies()

      if (movies) {
        const spiderman = movies.splice(2, 1)
        movies.splice(1, 0, spiderman[0])
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
          <S.ProductsContainer>
            {products.map(product => (
              <MovieCard key={product.id} product={product} />
            ))}
          </S.ProductsContainer>
          )}
    </>
  )
}
