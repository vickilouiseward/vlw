import React, { useEffect, useRef, useState } from 'react'
import { animated, useSprings } from 'react-spring'
import { Title } from '.'
import { StyledSliderContainer, StyledSlider, StyledSlide, StyledSlideTabList, StyledSlideTab } from './styled'
import { colours } from '../../styles'

const { cream } = colours

export const TabSlider = ({ children, height, tabs, title }) => {
  const ref = useRef()
  const [slide, setSlide] = useState(0)
  const [springProps, setSpringProps] = useSprings(children.length, index => ({
    offset: index
  }))

  useEffect(() => {
    setSpringProps(index => ({ offset: index - slide }))
  }, [slide, setSpringProps])

  return (
    <StyledSliderContainer>
      <StyledSlider {...{ height, ref }}>
        {springProps.map(({ offset }, index) => (
          <animated.div
            key={index}
            style={{
              transform: offset.interpolate(
                offsetX => `translate3d(${offsetX * 100}%, 0, 0)`
              ),
              position: 'absolute',
              width: '100%',
              height: '100%',
              willChange: 'transform'
            }}
          >
            <StyledSlide>{children[index]}</StyledSlide>
          </animated.div>
        ))}
      </StyledSlider>
      <Title level={2} color={cream}>
        {title}
      </Title>
      <StyledSlideTabList>
        {tabs.map((tab, index) => (
          <StyledSlideTab
            active={slide === index}
            key={index}
            onClick={() => setSlide(index)}
          >
            {tab}
          </StyledSlideTab>
        ))}
      </StyledSlideTabList>
    </StyledSliderContainer>
  )
}
