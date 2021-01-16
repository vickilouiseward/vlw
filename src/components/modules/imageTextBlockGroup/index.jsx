import React from 'react'
import {
  StyledContainer,
  StyledWrapper,
  StyledSection
} from './styled'
import { Title, ImgTextBlock } from '../..'

export const ImageTextBlockGroup = ({ title, blocks }) => (
  <StyledContainer>
    <Title data-aos='fade-in' level={2}>
      {title}
    </Title>
    <StyledWrapper>
      <StyledSection>
        {blocks.map((block, index) => <ImgTextBlock key={index} $textFirst={index % 2 === 0} {...block} />)}
      </StyledSection>
    </StyledWrapper>
  </StyledContainer>
)
