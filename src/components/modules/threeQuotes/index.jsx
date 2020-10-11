import React from 'react'
import { StyledContainer, StyledSection } from './styled'
import { Title, Quote } from '../..'

export const ThreeQuotes = ({ title, quotes }) => (
  <StyledContainer>
    <Title level={2}>{title}</Title>
    <StyledSection>
      {quotes.map((quote, index) => (
        <Quote key={index} {...quote} />
      ))}
    </StyledSection>
  </StyledContainer>
)
