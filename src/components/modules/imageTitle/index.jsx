import React from 'react'
import { StyledContainer, StyledSection, StyledImg } from './styled'
import { Title } from '../..'

export const ImageTitle = ({ image, title }) => (
  <StyledContainer>
    <StyledImg fadeIn={false} fluid={image} alt='' />
    <StyledSection>
      <Title level={2}>{title}</Title>
    </StyledSection>
  </StyledContainer>
)
