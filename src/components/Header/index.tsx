import coffeeLog from '../../assets/coffee-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

import { ActionsContainer, HeaderContainer, Location, ShopCart } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLog} alt="" />

      <ActionsContainer>
        <Location>
          <MapPin size={24} color="#8047F8" weight="fill" />
          <NavLink to="/checkout">
            <span>Natal, RN</span>
          </NavLink>
        </Location>

        <ShopCart>
          <NavLink to="/checkout">
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
        </ShopCart>
      </ActionsContainer>
    </HeaderContainer>
  )
}
