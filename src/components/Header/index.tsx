import coffeeLog from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

import { ActionsContainer, HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLog} alt="" />

      <ActionsContainer>
        <Location>
          <NavLink to="/checkout">
            <MapPin size={24} />
            <span>Natal, RN</span>
          </NavLink>
        </Location>

        <div>
          <NavLink to="/checkout">
            <ShoppingCart size={24} />
          </NavLink>
        </div>
      </ActionsContainer>
    </HeaderContainer>
  )
}
