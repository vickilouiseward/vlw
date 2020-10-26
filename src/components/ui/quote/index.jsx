import React from 'react'
import { StyledBlockquote, StyledStandfirst, StyledQuoteText, StyledCite, StyledCiteExtra } from './styled'

export const Quote = ({ callout, standfirst, text, cite }) => (
  <StyledBlockquote>
    <StyledStandfirst {...{ callout }}>{standfirst}</StyledStandfirst>
    <StyledQuoteText>{text}</StyledQuoteText>
    <StyledCite>
      {cite.name}
      <StyledCiteExtra>{cite.extra}</StyledCiteExtra>
    </StyledCite>
  </StyledBlockquote>
)
