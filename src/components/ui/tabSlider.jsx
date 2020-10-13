import React, { Children, useEffect, useRef, useState } from 'react'
import { animated, useSprings } from 'react-spring'
import { StyledTabSlider, StyledTabSlide, StyledSlideTabList, StyledSlideTab } from './styled'

export const Slider = ({ children }) => {
  const ref = useRef()
  const [slide, setSlide] = useState(0)
  const [springProps, setSpringProps] = useSprings(children.length, index => ({
    offset: index
  }))

  useEffect(() => {
    setSpringProps(index => ({ offset: index - slide }))
  }, [slide, setSpringProps])

  return (
    <StyledTabSlider {...{ ref }}>
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
          <StyledTabSlide>{children[index]}</StyledTabSlide>
        </animated.div>
      ))}
      <StyledSlideTabList>
        {Children.map(children, (_, index) => (
          <StyledSlideTab
            active={slide === index}
            key={index}
            onClick={() => setSlide(index)}
          />
        ))}
      </StyledSlideTabList>
    </StyledTabSlider>
  )
}
