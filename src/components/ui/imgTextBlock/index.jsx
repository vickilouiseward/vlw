import React from 'react'
import { Title, Paragraph } from '..'
import { StyledSection, StyledImg } from './styled'

export const ImgTextBlock = ({ image, title, text, color, $textFirst }) => (
  <StyledSection>
    <StyledImg fadeIn={false} fluid={image} alt={title} {...{ $textFirst }} />
    {/* <Title data-aos='fade-in' level={3} {...{ color }}>
      {title}
    </Title> */}
    <Paragraph {...{ color }}>{text}</Paragraph>
  </StyledSection>
)
