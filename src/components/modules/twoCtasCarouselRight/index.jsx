import React from 'react'
import { StyledContainer, StyledSection, StyledImg } from './styled'
import { Title, CallToAction } from '../..'
import { colours } from '../../../styles'

const { cream } = colours

export const TwoCtasCarouselRight = ({ title, ctas, image }) => (
  <StyledContainer>
    <StyledSection>
      <Title level={2} color={cream}>
        {title}
      </Title>
      {ctas.map((cta, index) => (
        <CallToAction key={index} color={cream} {...cta} />
      ))}
    </StyledSection>
    <StyledImg fluid={image} alt='' />
  </StyledContainer>
)
