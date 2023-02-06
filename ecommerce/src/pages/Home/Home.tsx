import { useQuery } from '@tanstack/react-query'
import { getMovies, TProduct } from '../../services'
import { Loading, MovieCard } from '../../ui'

import * as S from './styles'

export function Home () {
  const { data, isLoading } = useQuery(['products'], getMovies)

  const newOrderData: TProduct[] = structuredClone(data)
  const spiderman = newOrderData?.splice(2, 1)
  newOrderData?.splice(1, 0, spiderman[0])

  return (
    <>
      {isLoading
        ? (
          <Loading />
          )
        : (
          <S.ProductsContainer>
            {newOrderData?.map(product => (
              <MovieCard key={product.id} product={product} />
            ))}
          </S.ProductsContainer>
          )}
    </>
  )
}
