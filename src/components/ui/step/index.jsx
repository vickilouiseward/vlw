import React from 'react'
import { Title, Paragraph } from '..'
import { StyledStep, StyledStepNumber } from './styled'

export const Step = ({ color, number, title, text }) => (
  <StyledStep {...{ color }}>
    <StyledStepNumber data-aos='fade-in'>{number}</StyledStepNumber>
    <Title level={3} data-aos='fade-in'>{title}</Title>
    <Paragraph data-aos='fade-in'>{text}</Paragraph>
  </StyledStep>
)
