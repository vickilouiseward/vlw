import React from 'react'
import {
  StyledContainer,
  StyledSection,
  StyledImg,
  StyledSpacer,
  StyledWrapper
} from './styled'
import { CallToAction, Title } from '../..'

export const ImageCta = ({ image, title, cta, bgcolor }) => (
  <StyledContainer {...{ bgcolor }}>
    <StyledImg fadeIn={false} fluid={image} alt={cta.title} />
    <StyledSpacer />
    <StyledSection>
      {title && (
        <Title data-aos='fade-in' level={2}>
          {title}
        </Title>
      )}
      <CallToAction level={3} {...{ ...cta }} $light />
    </StyledSection>
  </StyledContainer>
)

export const ImageCtaWrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
)
