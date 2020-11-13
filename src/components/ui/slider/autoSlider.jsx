import React, { useEffect, useState } from 'react'
import { StyledSlider, StyledAutoSlide, StyledSlideBulletList, StyledSlideBullet } from './styled'

export const AutoSlider = ({ children, speed, $dots, $light, $pauseable }) => {
  const [slide, setSlide] = useState(0)
  const [slideInterval, setSlideInterval] = useState()
  const start = () => setSlideInterval(setInterval(() => setSlide((slide + 1) % children.length), speed))
  const cancel = () => slideInterval && clearInterval(slideInterval)

  useEffect(() => {
    return cancel
  }, [])

  useEffect(() => {
    start()
    return cancel
  }, [children.length, slide])

  return (
    <StyledSlider {...{ $light }}>
      {children.map((item, index) => (
        <StyledAutoSlide
          key={index}
          active={index === slide}
          {...$pauseable && {
            onPointerOver: cancel,
            onPointerOut: start
          }}
        >
          {item}
        </StyledAutoSlide>
      ))}
      {$dots && (
        <StyledSlideBulletList>
          {children.map((_, index) => (
            <StyledSlideBullet active={slide === index} key={index} onClick={() => setSlide(index)} {...{ $light }} />
          ))}
        </StyledSlideBulletList>
      )}
    </StyledSlider>
  )
}
