import React from 'react'
import { Title, Paragraph } from '..'
import { StyledTextTabSection, StyledTextTabIcon } from './styled'

export const TextTab = ({ icon, title, text, color }) => (
  <StyledTextTabSection>
    <StyledTextTabIcon
      fixed={icon}
      alt={title}
    />
    <Title level={3} {...{ color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{text}</Paragraph>
  </StyledTextTabSection>
)
