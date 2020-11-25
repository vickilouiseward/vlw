import React from 'react'
import { Title, Paragraph } from '..'
import { StyledSection, StyledImg } from './styled'

export const ImgTextBlock = ({ image, title, text, color }) => (
  <StyledSection>
    <StyledImg
      fixed={image}
      alt={title}
    />
    <Title level={3} {...{ color }}>
      {title}
    </Title>
    <Paragraph {...{ color }}>{text}</Paragraph>
  </StyledSection>
)
