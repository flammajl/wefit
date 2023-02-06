import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.625rem;
  border-radius: 4px;

  > span {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 700;
    font-size: 0.75rem;
  }

  strong {
    color: ${({ theme }) => theme.colors.main};
    font-weight: 700;
    font-size: 1rem;

    margin-bottom: 0.5rem;
  }
`
