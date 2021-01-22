import React, { useRef } from 'react'
import { StyledContainer, StyledWrapper, StyledSection } from './styled'
import { Title, ImgTextBlock, ParallaxX } from '../..'

export const HorizontalScroll = ({ title, blocks }) => {
  const ref = useRef()

  return (
    <StyledContainer itemCount={blocks.length} {...{ ref }}>
      <StyledWrapper>
        <Title data-aos='fade-in' level={2}>
          {title}
        </Title>
        <ParallaxX {...{ ref }}>
          <StyledSection>
            {blocks.map((block, index) => <ImgTextBlock key={index} $textFirst={index % 2 === 0} {...block} />)}
          </StyledSection>
        </ParallaxX>
      </StyledWrapper>
    </StyledContainer>
  )
}
