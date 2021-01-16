import React from 'react'
import { Paragraph } from '..'
import { StyledSection, StyledImg } from './styled'

export const ImgTextBlock = ({ image, Icon, text, color, $textFirst }) => (
  <StyledSection>
    <StyledImg fadeIn={false} fluid={image} alt={Icon.title} {...{ $textFirst }} />
    <Icon />
    <Paragraph {...{ color }}>{text}</Paragraph>
  </StyledSection>
)
