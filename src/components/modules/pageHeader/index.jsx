import React from 'react'
import { StyledContainer, StyledSection } from './styled'
import { Title, Paragraph } from '../..'

export const PageHeader = ({ title, text }) => (
  <StyledContainer>
    <StyledSection>
      <Title level={2}>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </StyledSection>
  </StyledContainer>
)
