import styled from 'styled-components'

export const MobileContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex: 1;

  section {
    display: flex;
    align-items: center;

  img {
    width: 4rem;
  }

  button {
    background: none;
    border: none;
  }


  > div:has(>span) {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    flex: 1;
    align-items: center;

    span {
      font-weight: 700;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.main};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      input {
        max-width: 3.6875rem;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 0.2rem 0 0.2rem 1rem;

        color: ${({ theme }) => theme.colors.main};
      }
    }
  }

  > div:has(>div) {
    display: flex;
    flex-direction: column;
    gap: 1.375rem;


    div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      strong {
        font-weight: 700;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.main};
      }
    }
    
    div:last-child:has(strong) {
      display: flex;
      flex-direction: column;

      span {
        font-weight: 700;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.lightGrey};
        text-transform: uppercase;
      }

      strong {
        font-weight: 700;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.main};
      }
    }
  }
}
`

export const Resume = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin-top: auto;
  padding-top: 1.3125rem;

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1rem;

    span {
      font-weight: 700;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.lightGrey};
      text-transform: uppercase;
    }

    strong {
      font-weight: 700;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.main}
    }
  }
`
