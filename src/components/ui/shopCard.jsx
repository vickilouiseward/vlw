import React from 'react'
import { Title } from '.'
import { StyledBodyLink, StyledShopCardSection, StyledShopCardImage } from './styled'

export const ShopCard = ({ image, title, text }) => (
  <StyledShopCardSection>
    <StyledShopCardImage fluid={image} alt={title} />
    <Title level={3}>{title}</Title>
    <StyledBodyLink>{text}</StyledBodyLink>
  </StyledShopCardSection>
)
