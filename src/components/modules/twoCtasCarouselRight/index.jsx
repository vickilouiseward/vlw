import React from 'react'
import {
  StyledContainer,
  StyledCtaSection,
  StyledSliderSection,
  StyledImg
} from './styled'
import { AutoSlider, CallToAction, Title } from '../..'
import { colours } from '../../../styles'

const { cream } = colours

export const TwoCtasCarouselRight = ({ title, ctas, images }) => (
  <StyledContainer>
    <StyledCtaSection>
      <Title level={2} color={cream}>
        {title}
      </Title>
      {ctas.map((cta, index) => (
        <CallToAction key={index} color={cream} {...cta} />
      ))}
    </StyledCtaSection>
    <StyledSliderSection>
      <AutoSlider>
        {images.map((image, index) => <StyledImg key={index} fadeIn={false} fluid={image} alt='' />)}
      </AutoSlider>
    </StyledSliderSection>
  </StyledContainer>
)
