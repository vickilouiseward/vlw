import React from 'react'
import { Title } from '..'
import {
  StyledShopCardSection,
  StyledShopCardImage,
  StyledPrice
} from './styled'
import { colours } from '../../../styles'

const { midnight } = colours

export const ShopCard = ({ image, title, text, href }) => (
  <StyledShopCardSection>
    <StyledShopCardImage fluid={image} alt={title} />
    <Title level={3} color={midnight}>{title}</Title>
    <StyledPrice>{text}</StyledPrice>
  </StyledShopCardSection>
)
