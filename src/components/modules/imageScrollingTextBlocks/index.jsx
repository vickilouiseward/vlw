import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {
  StyledContainer,
  StyledImgSection,
  StyledScrollingSection,
  StyledScrollingWrapper,
  StyledImg,
  StyledFadeTop,
  StyledFadeBottom
} from './styled'
import { Title, Step, Parallax } from '../..'
import { colours } from '../../../styles'
import { breakpoints } from '../../../utilities'

const { white } = colours

export const ImageScrollingTextBlocks = ({ image, title, blocks }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })

  return (
    <StyledContainer>
      <StyledImgSection>
        <Parallax height={mobile ? '100vw' : 'calc(100vh - 80px)'}>
          <StyledImg fadeIn={false} fluid={image} alt={title} />
        </Parallax>
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
}
