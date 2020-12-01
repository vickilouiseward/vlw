import React from 'react'
import { StyledH2, StyledH3, StyledParagraph } from './styled'

export const Title = (props) => {
  const { level, color, children } = props

  switch (level) {
    case 2:
      return <StyledH2 {...{ color, 'data-aos': props['data-aos'] }}>{children}</StyledH2>
    case 3:
      return <StyledH3 {...{ color, 'data-aos': props['data-aos'] }}>{children}</StyledH3>
    default:
      return null
  }
}

export const Paragraph = (props) => {
  const { color, children } = props

  return (
    <StyledParagraph {...{ color, 'data-aos': props['data-aos'] }}>{children}</StyledParagraph>
  )
}
