import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'gatsby'
import {
  StyledHeader,
  StyledMenuButton,
  StyledTitle,
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
  { title: "Let's work together", path: '/' },
  { title: 'Off the rack', path: '/' },
  { title: 'Portfilio', path: '/' },
  { title: 'My story', path: '/' },
  { title: 'Contact', path: '/' }
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
          <Link to='/'>
            <Logo scaleDown={mobile && !showMobileNav} />
          </Link>
        </StyledTitle>
        {(tabletUp || showMobileNav) && (
          <StyledTagLine>
            Fashion, beauty &amp; lifestyle illustrator
          </StyledTagLine>
        )}
      </StyledHeader>
      {tabletUp && <Nav />}
      {mobile && showMobileNav && <MobileNav />}
    </>
  )
}
