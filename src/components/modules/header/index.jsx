import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  StyledHeader,
  StyledMenuButton,
  StyledTitle,
  StyledHomeLink,
  StyledTagLine,
  StyledNav,
  StyledNavUl,
  StyledNavLi,
  StyledNavLink,
  StyledMobileNav,
  StyledMobileNavUl,
  StyledMobileNavLi
} from './styled'
import { CloseIcon, MenuIcon, Logo } from '../..'
import { breakpoints } from '../../../utilities'

const routes = [
  { title: "Let's work together", path: '/lets-work-together' },
  { title: 'Off the rack', path: '/off-the-rack' },
  { title: 'Portfilio', path: '/portfolio' },
  { title: 'My story', path: '/my-story' },
  { title: 'Contact', path: '/contact' }
]

export const Nav = () => (
  <StyledNav>
    <StyledNavUl>
      {routes.map(({ title, path }, index) => (
        <StyledNavLi key={index}>
          <StyledNavLink to={path}>{title}</StyledNavLink>
        </StyledNavLi>
      ))}
    </StyledNavUl>
  </StyledNav>
)

export const MobileNav = () => (
  <StyledMobileNav>
    <StyledMobileNavUl>
      {routes.map(({ title, path }, index) => (
        <StyledMobileNavLi key={index} delay={index / 10}>
          <StyledNavLink to={path}>{title}</StyledNavLink>
        </StyledMobileNavLi>
      ))}
    </StyledMobileNavUl>
  </StyledMobileNav>
)

export const Header = () => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })
  const tabletUp = useMediaQuery({ minWidth: breakpoints.S + 1 })
  const [showMobileNav, toggleMobileNav] = useState(false)

  return (
    <>
      <StyledHeader {...{ showMobileNav }}>
        {mobile && (
          <StyledMenuButton
            onClick={() => toggleMobileNav(!showMobileNav)}
            {...{ showMobileNav }}
          >
            {showMobileNav ? <CloseIcon /> : <MenuIcon />}
          </StyledMenuButton>
        )}
        <StyledTitle {...{ showMobileNav }}>
          <StyledHomeLink to='/homepage'>
            <Logo scaleUp={showMobileNav} />
          </StyledHomeLink>
        </StyledTitle>
        {mobile && showMobileNav && (
          <StyledTagLine>Fashion, beauty &amp; lifestyle illustrator</StyledTagLine>
        )}
        {tabletUp && <Nav />}
      </StyledHeader>
      {mobile && showMobileNav && <MobileNav />}
    </>
  )
}
