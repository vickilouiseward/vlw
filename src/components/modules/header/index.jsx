import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  StyledSiteHeader,
  StyledMenuButton,
  StyledTitle,
  StyledHomeLink,
  StyledTagline,
  StyledNav,
  StyledNavUl,
  StyledNavLi,
  StyledNavLink,
  StyledMobileNav,
  StyledMobileNavUl,
  StyledMobileNavLi,
  StyledContainer,
  StyledInlineContainer,
  StyledSection,
  StyledImageSectionLeft,
  StyledSectionLeft,
  StyledSectionRight,
  StyledImg
} from './styled'
import {
  CloseIcon,
  LinkButton,
  MenuIcon,
  HeaderLogo,
  Title,
  Paragraph
} from '../..'
import { breakpoints } from '../../../utilities'

const routes = [
  { title: "Let's work together", path: '/lets-work-together' },
  // { title: 'Shop off the rack', path: '/shop-off-the-rack' },
  // { title: 'Portfilio', path: '/portfolio' },
  // { title: 'My story', path: '/my-story' },
  { title: 'Get in touch', path: '/contact' }
]

export const Nav = () => (
  <StyledNav data-aos='fade-in'>
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

export const SiteHeader = () => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })
  const tabletUp = useMediaQuery({ minWidth: breakpoints.S + 1 })
  const [showMobileNav, toggleMobileNav] = useState(false)

  return (
    <>
      <StyledSiteHeader {...{ showMobileNav }}>
        {mobile && (
          <StyledMenuButton
            onClick={() => toggleMobileNav(!showMobileNav)}
            {...{ showMobileNav }}
          >
            {showMobileNav ? <CloseIcon /> : <MenuIcon />}
          </StyledMenuButton>
        )}
        <StyledTitle data-aos='fade-in' {...{ showMobileNav }}>
          <StyledHomeLink to='/homepage'>
            <HeaderLogo scaleUp={showMobileNav} />
          </StyledHomeLink>
        </StyledTitle>
        {mobile && showMobileNav && (
          <StyledTagline data-aos='fade-in'>Fashion, beauty &amp; lifestyle illustrator</StyledTagline>
        )}
        {tabletUp && <Nav />}
      </StyledSiteHeader>
      {mobile && (
        <>
          {/* <StyledSpacer /> */}
          {showMobileNav && <MobileNav />}
        </>
      )}
    </>
  )
}

export const PageHeader = ({ image, title, text, color, bgcolor }) => (
  <>
    {image && <StyledImg fadeIn={false} fluid={image} alt={title} $headerImage />}
    <StyledContainer {...{ bgcolor }}>
      <StyledSection>
        <Title data-aos='fade-in' level={2} {...{ color }}>{title}</Title>
        {text && <Paragraph data-aos='fade-in' {...{ color }}>{text}</Paragraph>}
      </StyledSection>
    </StyledContainer>
  </>
)

export const PageHeaderLeft = ({ title, text, cta, image, color, bgcolor }) => (
  <>
    <StyledInlineContainer {...{ bgcolor, color }}>
      <StyledSectionLeft>
        <Title data-aos='fade-in' level={2}>{title}</Title>
        {text && text.map((line, index) => (
          <Paragraph data-aos='fade-in' key={index}>{line}</Paragraph>
        ))}
        {cta && <LinkButton cta={cta.text} link={cta.link} $light />}
      </StyledSectionLeft>
      <StyledSectionRight>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </StyledSectionRight>
    </StyledInlineContainer>
  </>
)

export const PageHeaderRight = ({ title, text, cta, image, color, bgcolor }) => (
  <>
    <StyledInlineContainer {...{ bgcolor, color }}>
      <StyledImageSectionLeft>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </StyledImageSectionLeft>
      <StyledSectionRight>
        <Title data-aos='fade-in' level={2}>{title}</Title>
        {text && text.map((line, index) => (
          <Paragraph data-aos='fade-in' key={index}>{line}</Paragraph>
        ))}
        {cta && <LinkButton cta={cta.text} link={cta.link} $light />}
      </StyledSectionRight>
    </StyledInlineContainer>
  </>
)
