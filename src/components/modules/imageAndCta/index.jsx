import React from 'react'
import {
  StyledContainer,
  StyledTitleContainer,
  StyledCtaSectionRight,
  StyledCtaSectionLeft,
  StyledImageSectionRight,
  StyledImageSectionLeft,
  StyledImgLg,
  StyledImgSm
} from './styled'
import { CallToAction, Title } from '../..'

export const ImageCtaLeft = ({ cta, images, $light }) => (
  <StyledContainer {...{ $light }}>
    <StyledCtaSectionLeft>
      <CallToAction level={3} {...{ ...cta, $light }} />
    </StyledCtaSectionLeft>
    <StyledImageSectionRight>
      <StyledImgLg fadeIn={false} fluid={images[0]} alt={cta.title} />
      <StyledImgSm fadeIn={false} fluid={images[1]} alt={cta.title} />
    </StyledImageSectionRight>
  </StyledContainer>
)

export const ImageCtaRight = ({ cta, images, $light }) => (
  <StyledContainer {...{ $light }}>
    <StyledImageSectionLeft>
      <StyledImgSm fadeIn={false} fluid={images[1]} alt={cta.title} />
      <StyledImgLg fadeIn={false} fluid={images[0]} alt={cta.title} />
    </StyledImageSectionLeft>
    <StyledCtaSectionRight>
      <CallToAction level={3} {...{ ...cta, $light }} />
    </StyledCtaSectionRight>
  </StyledContainer>
)

export const ImageTitleCtaRight = ({ title, cta, images }) => (
  <StyledTitleContainer>
    <StyledImageSectionLeft>
      <StyledImgLg fadeIn={false} fluid={images[0]} alt={cta.title} />
      <StyledImgSm fadeIn={false} fluid={images[1]} alt={cta.title} />
    </StyledImageSectionLeft>
    <StyledCtaSectionRight>
      <Title data-aos='fade-in' level={2}>
        {title}
      </Title>
      <CallToAction level={3} {...{ ...cta }} $light />
    </StyledCtaSectionRight>
  </StyledTitleContainer>
)
