import React from 'react'
import {
  StyledContainer,
  StyledCtaSection,
  StyledImageSectionRight,
  StyledImageSectionLeft,
  StyledImgLg,
  StyledImgSm
} from './styled'
import { CallToAction } from '../..'

export const ImageCtaLeft = ({ cta, images }) => (
  <StyledContainer>
    <StyledCtaSection>
      <CallToAction level={3} {...cta} $outline />
    </StyledCtaSection>
    <StyledImageSectionRight>
      <StyledImgLg fadeIn={false} fluid={images[0]} alt='' />
      <StyledImgSm fadeIn={false} fluid={images[1]} alt='' />
    </StyledImageSectionRight>
  </StyledContainer>
)

export const ImageCtaRight = ({ cta, images }) => (
  <StyledContainer>
    <StyledImageSectionLeft>
      <StyledImgSm fadeIn={false} fluid={images[1]} alt='' />
      <StyledImgLg fadeIn={false} fluid={images[0]} alt='' />
    </StyledImageSectionLeft>
    <StyledCtaSection>
      <CallToAction level={3} {...cta} />
    </StyledCtaSection>
  </StyledContainer>
)
