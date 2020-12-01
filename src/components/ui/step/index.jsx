import React from 'react'
import { Title, Paragraph } from '..'
import { StyledStep, StyledStepNumber } from './styled'

export const Step = ({ color, number, title, text }) => (
  <StyledStep {...{ color }}>
    <StyledStepNumber>{number}</StyledStepNumber>
    <Title level={3}>{title}</Title>
    <Paragraph>{text}</Paragraph>
  </StyledStep>
)
