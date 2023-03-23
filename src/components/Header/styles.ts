import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;

  padding: 2rem 10rem;
  gap: 51.25rem;
`

export const ActionsContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  width: 143px;
  height: 38px;
  padding: 0.5rem;
  gap: 0.25rem;

  display: flex;
  align-items: space-between;
  justify-content: center;

  background: ${(props) => props.theme['purple-light']};
  border: 0;
  border-radius: 6px;

  a {
    text-decoration-line: none;
  }
`
