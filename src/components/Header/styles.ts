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

const NavBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 6px;
`

export const Location = styled(NavBase)`
  width: 9rem;
  height: 2.375rem;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};

  a {
    text-decoration-line: none;
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const ShopCart = styled(NavBase)`
  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['yellow-light']};

  a {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
