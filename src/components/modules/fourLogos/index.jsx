import React from 'react'
import { StyledContainer, StyledImg } from './styled'

export const FourLogos = ({ logos }) => (
  <StyledContainer>
    {logos.map(({ image, alt }, index) => (
      <StyledImg key={index} fadeIn={false} fixed={image} {...{ alt }} />
    ))}
  </StyledContainer>
)
