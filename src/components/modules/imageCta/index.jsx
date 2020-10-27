import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledBgContainer, StyledSection, StyledLinkSpacer } from './styled'
import { Logo, Tagline, LinkButton } from '../..'
import { breakpoints } from '../../../utilities'

export const ImageCta = ({ image, cta, link }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })

  return (
    <StyledBgContainer
      Tag='section'
      fluid={image}
      style={{
        backgroundPosition: mobile ? 'top center' : 'center',
        backgroundSize: mobile ? '100% auto' : 'cover'
      }}
    >
      <StyledSection>
        <Logo />
        <Tagline>Fashion, beauty &amp; lifestyle illustrator</Tagline>
        <StyledLinkSpacer>
          <LinkButton {...{ cta, link }} />
        </StyledLinkSpacer>
      </StyledSection>
    </StyledBgContainer>
  )
}
