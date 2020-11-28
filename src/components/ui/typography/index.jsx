import React from 'react'
import { StyledH2, StyledH3, StyledParagraph } from './styled'

export const Title = ({ level, color, children }) => {
  switch (level) {
    case 2:
      return <StyledH2 data-aos='fade-in' {...{ color }}>{children}</StyledH2>
    case 3:
      return <StyledH3 data-aos='fade-in' {...{ color }}>{children}</StyledH3>
    default:
      return null
  }
}

export const Paragraph = ({ color, children }) => (
  <StyledParagraph data-aos='fade-in' {...{ color }}>{children}</StyledParagraph>
)
