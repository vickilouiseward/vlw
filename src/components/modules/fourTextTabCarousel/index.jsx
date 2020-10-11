import React from 'react'
import { StyledContainer, StyledSection, StyledImg } from './styled'
import { Title, TextTab } from '../..'
import { colours } from '../../../styles'

const { cream } = colours

export const FourTextTabCarousel = ({ image, title, textTabs }) => (
  <StyledContainer>
    <StyledImg fadeIn={false} fluid={image} alt={title} />
    <Title level={2} color={cream}>
      {title}
    </Title>
    <StyledSection>
      {textTabs.map((tab, index) => (
        <TextTab key={index} color={cream} {...tab} />
      ))}
    </StyledSection>
  </StyledContainer>
)
