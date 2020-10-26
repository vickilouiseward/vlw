import React from 'react'
import {
  StyledShopCardSection,
  StyledShopCardImage
} from './styled'
import { LinkButton } from '..'

export const ShopCard = ({ image, cta, link }) => (
  <StyledShopCardSection>
    <StyledShopCardImage fluid={image} alt={cta} />
    <LinkButton {...{ cta, link }} />
  </StyledShopCardSection>
)
