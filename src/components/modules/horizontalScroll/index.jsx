import React, { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledWrapper, StyledSection } from './styled'
import { Title, ImgTextBlock, ParallaxScroller } from '../..'
import { breakpoints } from '../../../utilities'

export const HorizontalScroll = ({ title, blocks }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })
  const tablet = useMediaQuery({ maxWidth: breakpoints.M })
  const items = blocks.length
  const blocksOnScreen = mobile ? 1 : tablet ? 2 : 3
  const [height, setHeight] = useState('auto')
  const cRef = useRef()
  const sRef = useRef()

  useEffect(() => {
    if (sRef && items > blocksOnScreen) {
      const h = (sRef.current.getBoundingClientRect().width / items) * (items + blocksOnScreen)
      setHeight(h ? `${h}px` : 'auto')
    }
  }, [sRef])

  return (
    <StyledContainer
      itemCount={items}
      ref={cRef}
      styles={`
        height: ${height};
      `}
    >
      <StyledWrapper>
        <Title data-aos='fade-in' level={2}>
          {title}
        </Title>
        <ParallaxScroller ref={cRef} maxOffset={-(items - blocksOnScreen) / items * 100}>
          <StyledSection ref={sRef}>
            {blocks.map((block, index) => <ImgTextBlock key={index} $textFirst={index % 2 === 0} {...block} />)}
          </StyledSection>
        </ParallaxScroller>
      </StyledWrapper>
    </StyledContainer>
  )
}
