import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;

  padding: 4rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.main};
  }

 img {
    padding: 2rem 0;
  }
`

export const ButtonContainer = styled.div`
  width: 11.25rem;
`
