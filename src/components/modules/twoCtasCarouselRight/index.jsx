import React from 'react'
import {
  StyledContainer,
  StyledCtaSection,
  StyledSliderSection,
  StyledImg
} from './styled'
import { AutoSlider, CallToAction, Parallax, Title } from '../..'
import { colours } from '../../../styles'

const { cream } = colours

export const TwoCtasCarouselRight = ({ title, ctas, image }) => (
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
      <AutoSlider auto={3000}>
        <Parallax height={940}>
          <StyledImg fadeIn={false} fluid={image} alt='' />
        </Parallax>
        <Parallax height={940}>
          <StyledImg fadeIn={false} fluid={image} alt='' />
        </Parallax>
        <Parallax height={940}>
          <StyledImg fadeIn={false} fluid={image} alt='' />
        </Parallax>
        <Parallax height={940}>
          <StyledImg fadeIn={false} fluid={image} alt='' />
        </Parallax>
      </AutoSlider>
    </StyledSliderSection>
  </StyledContainer>
)
