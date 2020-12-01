import React from 'react'
import { StyledContainer, StyledSection } from './styled'
import { Title, ShopCard } from '../..'
import { colours } from '../../../styles'

const { midnight } = colours

export const ThreeCards = ({ title, cards }) => (
  <StyledContainer>
    <Title data-aos='fade-in' level={2} color={midnight}>{title}</Title>
    <StyledSection>
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </StyledSection>
  </StyledContainer>
)
