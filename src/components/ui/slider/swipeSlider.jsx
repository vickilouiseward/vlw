import React, { Children, useRef, useState } from 'react'
import { useGesture } from 'react-use-gesture'
import {
  StyledSliderContainer,
  StyledSlider,
  StyledSwipeSlide,
  StyledSlideBulletList,
  StyledSlideBullet
} from './styled'

const clamp = (input, lower, upper) => Math.min(Math.max(input, lower), upper)

export const SwipeSlider = ({ children, height, $light }) => {
  const ref = useRef()
  const [slide, setSlide] = useState(0)
  const gestureBinds = useGesture(
    {
      onDrag: ({ down, movement: [xDelta], direction: [xDir], distance, cancel }) => {
        if (ref && ref.current && ref.current.parentElement) {
          const { width } = ref.current.parentElement.getBoundingClientRect()

          if (down && distance > width / 2) {
            if (cancel) {
              cancel()
            }

            setSlide(clamp(slide + (xDir > 0 ? -1 : 1), 0, children.length - 1))
          }
        }
      }
    },
    {
      drag: {
        delay: 100
      }
    }
  )

  return (
    <StyledSliderContainer>
      <StyledSlider {...{ ref, height, $light }}>
        {children.map((item, index) => (
          <StyledSwipeSlide key={index} active={index === slide} {...gestureBinds()}>
            {item}
          </StyledSwipeSlide>
        ))}
        <StyledSlideBulletList>
          {Children.map(children, (_, index) => (
            <StyledSlideBullet active={slide === index} key={index} onClick={() => setSlide(index)} {...{ $light }} />
          ))}
        </StyledSlideBulletList>
      </StyledSlider>
    </StyledSliderContainer>
  )
}
