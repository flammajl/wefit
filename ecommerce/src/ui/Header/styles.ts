import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.125rem 0.625rem;

  @media (min-width: 500px) {
    margin-bottom: 1.5rem;
  }


  > a {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }

  a:last-child {

    > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      span {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: ${({ theme }) => theme.colors.lightGrey};
        font-size: 0.75rem;
        font-weight: 600;

        strong {
          color: ${({ theme }) => theme.colors.white};
          font-weight: 600;
          font-size: 0.875rem;
        }
      }
    }
  }
`
