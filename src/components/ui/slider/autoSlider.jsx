import React, { useEffect, useState } from 'react'
import { StyledSlider, StyledAutoSlide, StyledSlideBulletList, StyledSlideBullet } from './styled'

export const AutoSlider = ({ children, speed, dots, light }) => {
  const [slide, setSlide] = useState(0)
  const [slideInterval, setSlideInterval] = useState()
  const nextSlide = () => setSlide((slide + 1) % children.length)
  const cancel = () => slideInterval && clearInterval(slideInterval)

  useEffect(() => {
    setSlideInterval(setInterval(nextSlide, speed))

    return cancel
  }, [children.length, slide])

  return (
    <StyledSlider {...{ light }}>
      {children.map((item, index) => (
        <StyledAutoSlide
          key={index}
          active={index === slide}
          onPointerOver={cancel}
          onPointerOut={nextSlide}
        >
          {item}
        </StyledAutoSlide>
      ))}
      {dots && (
        <StyledSlideBulletList>
          {children.map((_, index) => (
            <StyledSlideBullet active={slide === index} key={index} onClick={() => setSlide(index)} {...{ light }} />
          ))}
        </StyledSlideBulletList>
      )}
    </StyledSlider>
  )
}
