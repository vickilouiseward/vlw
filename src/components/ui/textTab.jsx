import React from 'react'
import { Title, Paragraph } from '.'
import { StyledTextTabSection, StyledTextTabIcon } from './styled'

export const TextTab = ({ icon, title, text, color }) => (
  <StyledTextTabSection>
    <StyledTextTabIcon
      fluid={icon}
      imgStyle={{ objectFit: 'contain' }}
      alt={title}
    />
    <Title level={3} {...{ color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{text}</Paragraph>
  </StyledTextTabSection>
)
