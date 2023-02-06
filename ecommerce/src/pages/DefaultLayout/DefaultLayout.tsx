import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import { Header } from '../../ui'
import * as S from './styles'

export function DefaultLayout () {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <Toaster />
    </S.Container>
  )
}
