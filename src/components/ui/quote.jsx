import React from 'react'
import { Paragraph } from '.'
import { StyledBlockquote, StyledCite } from './styled'

export const Quote = ({ text, cite }) => (
  <StyledBlockquote>
    <Paragraph>{text}</Paragraph>
    <StyledCite>{cite}</StyledCite>
  </StyledBlockquote>
)
