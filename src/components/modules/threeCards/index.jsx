import React from 'react'
import { StyledContainer, StyledSection } from './styled'
import { Title, ShopCard } from '../..'

export const ThreeCards = ({ title, cards }) => (
  <StyledContainer>
    <Title level={2}>{title}</Title>
    <StyledSection>
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </StyledSection>
  </StyledContainer>
)
