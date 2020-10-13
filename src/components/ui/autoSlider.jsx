import React, { useEffect, useRef, useState } from 'react'
import { animated, useSprings } from 'react-spring'
import { StyledAutoSlider, StyledAutoSlide } from './styled'

export const AutoSlider = ({ children }) => {
  const ref = useRef()
  const [slide, setSlide] = useState(0)
  const [springProps, setSpringProps] = useSprings(children.length, index => ({
    config: {
      friction: 18,
      tension: 100
    },
    offset: index
  }))

  useEffect(() => {
    setSpringProps(index => ({ offset: index - slide }))
  }, [slide, setSpringProps])

  useEffect(() => {
    const interval = setInterval(() => {
      const targetIndex = (slide + 1) % children.length
      setSlide(targetIndex)
    }, 3000)

    return () => interval && clearInterval(interval)
  }, [children.length, slide])

  return (
    <StyledAutoSlider {...{ ref }}>
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
          <StyledAutoSlide>{children[index]}</StyledAutoSlide>
        </animated.div>
      ))}
    </StyledAutoSlider>
  )
}
