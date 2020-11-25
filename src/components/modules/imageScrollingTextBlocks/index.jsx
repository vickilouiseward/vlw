import React from 'react'
import {
  StyledContainer,
  StyledImgSection,
  StyledScrollingSection,
  StyledScrollingWrapper,
  StyledImg,
  StyledFadeTop,
  StyledFadeBottom
} from './styled'
import { Title, Step } from '../..'
import { colours } from '../../../styles'

const { white } = colours

export const ImageScrollingTextBlocks = ({ image, title, blocks }) => (
  <StyledContainer>
    <StyledImgSection>
      <StyledImg fadeIn={false} fluid={image} alt={title} />
    </StyledImgSection>
    <StyledScrollingWrapper>
      <StyledScrollingSection>
        <Title level={2}>
          {title}
        </Title>
        {blocks.map((block, index) => <Step key={index} color={white} {...block} />)}
      </StyledScrollingSection>
      <StyledFadeTop />
      <StyledFadeBottom />
    </StyledScrollingWrapper>
  </StyledContainer>
)
