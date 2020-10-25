import React from 'react'
import { StyledContainer, StyledSection, StyledImgWrapper, StyledImg } from './styled'
import { CallToAction } from '../..'
import { colours } from '../../../styles'

const { midnight } = colours

export const ImageCta = ({ image, cta }) => (
  <StyledContainer>
    <StyledImgWrapper>
      <StyledImg fadeIn={false} fluid={image} alt={cta.title} />
    </StyledImgWrapper>
    <StyledSection>
      <CallToAction level={2} color={midnight} {...cta} />
    </StyledSection>
  </StyledContainer>
)
