import React from 'react'
import {
  StyledContainer,
  StyledCtaSection,
  StyledSliderSection,
  StyledImg
} from './styled'
import { AutoSlider, CallToAction, Title } from '../..'

export const TwoCtasCarousel = ({ title, ctas, images }) => (
  <StyledContainer>
    <StyledCtaSection>
      <Title data-aos='fade-in' level={2}>
        {title}
      </Title>
      {ctas.map((cta, index) => (
        <CallToAction key={index} level={3} {...cta} />
      ))}
    </StyledCtaSection>
    <StyledSliderSection>
      <AutoSlider speed={6000} $light $pauseable>
        {images.map((image, index) => <StyledImg key={index} fadeIn={false} fluid={image} alt={title} />)}
      </AutoSlider>
    </StyledSliderSection>
  </StyledContainer>
)

export const CarouselCtaLeft = ({ title, cta, images }) => (
  <StyledContainer>
    <StyledCtaSection>
      <Title data-aos='fade-in' level={2}>
        {title}
      </Title>
      <CallToAction level={3} {...cta} />
    </StyledCtaSection>
    <StyledSliderSection>
      <AutoSlider speed={6000} $light $pauseable>
        {images.map((image, index) => <StyledImg key={index} fadeIn={false} fluid={image} alt={title} />)}
      </AutoSlider>
    </StyledSliderSection>
  </StyledContainer>
)

export const CarouselCtaRight = ({ title, cta, images }) => (
  <StyledContainer>
    <StyledSliderSection>
      <AutoSlider speed={6000} $light $pauseable>
        {images.map((image, index) => <StyledImg key={index} fadeIn={false} fluid={image} alt={title} />)}
      </AutoSlider>
    </StyledSliderSection>
    <StyledCtaSection>
      <Title data-aos='fade-in' level={2}>
        {title}
      </Title>
      <CallToAction level={3} {...cta} />
    </StyledCtaSection>
  </StyledContainer>
)
