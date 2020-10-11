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

export const Slider = ({ auto, children }) => {
  const ref = useRef()
  const [slide, setSlide] = useState(0)
  const [isDragging, setDragging] = useState(false)
  const [springProps, setSpringProps] = useSprings(children.length, (index) => ({
    offset: index
  }))

  useEffect(() => {
    setSpringProps((index) => ({ offset: index - slide }))
  }, [slide, setSpringProps])

  useEffect(() => {
    let interval

    if (auto > 0) {
      interval = setInterval(() => {
        const targetIndex = (slide + 1) % children.length
        setSlide(targetIndex)
      }, auto)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [auto, children.length, slide])

  const gestureBinds = useGesture(
    {
      onDrag: ({ down, movement: [xDelta], direction: [xDir], distance, cancel, first }) => {
        if (first) {
          setDragging(true)
        }

        if (ref && ref.current && ref.current.parentElement) {
          const { width } = ref.current.parentElement.getBoundingClientRect()

          if (down && distance > width / 2) {
            if (cancel) cancel()
            setSlide(clamp(slide + (xDir > 0 ? -1 : 1), 0, children.length))
          }

          setSpringProps((index) => ({
            offset: (down ? xDelta : 0) / width + (index - slide)
          }))
        }
      }
      // onClick: () => {
      //   if (isDragging) {
      //     setDragging(false)
      //     return
      //   }
      // }
    },
    {
      drag: {
        delay: 200
      }
    }
  )

  return (
    <StyledSlider {...{ ref }}>
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
          {...gestureBinds()}>
          <StyledSlide>{children[index]}</StyledSlide>
        </animated.div>
      ))}
      <StyledSlideBulletList>
        {Children.map(children, (_, index) => (
          <StyledSlideBullet active={slide === index} key={index} onClick={() => setSlide(index)} />
        ))}
      </StyledSlideBulletList>
    </StyledSlider>
  )
}
