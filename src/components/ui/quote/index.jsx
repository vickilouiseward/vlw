import React from 'react'
import { StyledBlockquote, StyledStandfirst, StyledQuoteText, StyledCite, StyledCiteExtra } from './styled'

export const Quote = ({ callout, standfirst, text, cite }) => (
  <StyledBlockquote data-aos='fade-in'>
    <StyledStandfirst data-aos='fade-in' {...{ callout }}>{standfirst}</StyledStandfirst>
    <StyledQuoteText data-aos='fade-in'>{text}</StyledQuoteText>
    <StyledCite data-aos='fade-in'>
      {cite.name}
      <StyledCiteExtra>{cite.extra}</StyledCiteExtra>
    </StyledCite>
  </StyledBlockquote>
)
