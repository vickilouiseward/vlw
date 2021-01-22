import React from 'react'
import {
  StyledContainer,
  StyledImgSection,
  StyledScrollingSection,
  StyledImg,
  StyledFadeTop
} from './styled'
import { Title, Step } from '../..'
import { colours } from '../../../styles'

const { white, black } = colours

export const FixedImageVerticalScroll = ({ image, title, blocks, $light }) => (
  <StyledContainer {...{ $light }}>
    <StyledImgSection>
      <StyledFadeTop {...{ $light }} />
      <StyledImg fadeIn={false} fluid={image} alt={title} />
    </StyledImgSection>
    <StyledScrollingSection>
      <Title level={2}>
        {title}
      </Title>
      {blocks.map((block, index) => <Step key={index} color={$light ? black : white} {...block} />)}
    </StyledScrollingSection>
  </StyledContainer>
)
