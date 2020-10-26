import React, { Children, useEffect, useRef, useState } from 'react'
import { animated, useSprings } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import {
  StyledSliderContainer,
  StyledSlider,
  StyledSlide,
  StyledSlideBulletList,
  StyledSlideBullet
} from './styled'

const clamp = (input, lower, upper) => Math.min(Math.max(input, lower), upper)

export const SwipeSlider = ({ children, height, light }) => {
  const ref = useRef()
  const [slide, setSlide] = useState(0)
  const [springProps, setSpringProps] = useSprings(children.length, (index) => ({
    offset: index
  }))

  useEffect(() => {
    setSpringProps((index) => ({ offset: index - slide }))
  }, [slide, setSpringProps])

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

          setSpringProps((index) => ({
            offset: (down ? xDelta : 0) / width + (index - slide)
          }))
        }
      }
    },
    {
      drag: {
        delay: 200
      }
    }
  )

  return (
    <StyledSliderContainer>
      <StyledSlider {...{ ref, height, light }}>
        {springProps.map(({ offset }, index) => (
          <animated.div
            key={index}
            style={{
              transform: offset.interpolate((offsetX) => `translate3d(${offsetX * 100}%, 0, 0)`),
              position: 'absolute',
              width: '100%',
              height: '100%',
              willChange: 'transform'
            }}
            {...gestureBinds()}
          >
            <StyledSlide>{children[index]}</StyledSlide>
          </animated.div>
        ))}
        <StyledSlideBulletList>
          {Children.map(children, (_, index) => (
            <StyledSlideBullet active={slide === index} key={index} onClick={() => setSlide(index)} {...{ light }}/>
          ))}
        </StyledSlideBulletList>
      </StyledSlider>
    </StyledSliderContainer>
  )
}
