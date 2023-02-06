import styled from 'styled-components'

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 4px;
`

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;

  thead {
    color: ${({ theme }) => theme.colors.lightGrey};
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 700;
    text-align: left;
    padding-bottom: 1.3125rem;

    th:first-child {
      width: 50%;
    }
  }

  tbody {
    td:has(div):has(img) {
      display: flex;
      margin-top: 1.3125rem;

      span, strong {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.main}
      }

      span {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
      }

      strong {
        font-size: 1rem;
      }

      div:has(span) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 3.25rem;
      }

      img {
        max-width: 5.5625rem;
        display: block;
      }

      }
    }

  td:has(button) {
    > button {
      display: flex;
      background: none;
      border: none;
      margin-left: auto;
    }
  }

  td:has(div):has(input) {
    div {
      display: flex;
      align-items: center;
      gap: 0.6875rem;
  
      input {
        max-width: 3.875rem;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 0.2rem 0 0.2rem 1rem;

        color: ${({ theme }) => theme.colors.main};
      }

      button {
        background: none;
        border: none;
      }
    }
  }

  td {
    > strong {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.main}
    }
  }
`

export const Resume = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin-top: 1.3125rem;
  padding-top: 1.3125rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      font-weight: 700;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.lightGrey}
    }

    strong {
      font-weight: 700;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.main}
    }
  }
`

export const ButtonContainer = styled.div`
  width: 14.75rem;
`
