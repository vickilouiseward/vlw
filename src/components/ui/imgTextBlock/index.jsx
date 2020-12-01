import React from 'react'
import { Title, Paragraph } from '..'
import { StyledSection, StyledImg } from './styled'

export const ImgTextBlock = ({ image, title, text, color }) => (
  <StyledSection data-aos='fade-in'>
    <StyledImg fixed={image} alt={title} />
    <Title data-aos='fade-in' level={3} {...{ color }}>
      {title}
    </Title>
    <Paragraph data-aos='fade-in' {...{ color }}>{text}</Paragraph>
  </StyledSection>
)
