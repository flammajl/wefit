import styled, { css } from 'styled-components'

type TButtonStyle = {
  fullWidth?: boolean
}

export const Button = styled.button<TButtonStyle>`
  background:  ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 4px;
  padding: 0.6875rem;
  
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  ${({ fullWidth }) => fullWidth && css`
  width: 100%;
  `}

  span {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.75rem;
    font-weight: 400
  }
`
