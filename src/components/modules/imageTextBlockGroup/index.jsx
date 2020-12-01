import React from 'react'
import {
  StyledContainer,
  StyledSection
} from './styled'
import { Title, ImgTextBlock } from '../..'

export const ImageTextBlockGroup = ({ title, blocks }) => (
  <StyledContainer>
    <Title data-aos='fade-in' level={2}>
      {title}
    </Title>
    <StyledSection>
      {blocks.map((block, index) => <ImgTextBlock key={index} {...block} />)}
    </StyledSection>
  </StyledContainer>
)
