import React, { useEffect, useState } from 'react'
import { StyledSlider, StyledAutoSlide } from './styled'

export const AutoSlider = ({ children, speed, bgcolor }) => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const targetIndex = (slide + 1) % children.length
      setSlide(targetIndex)
    }, speed)

    return () => interval && clearInterval(interval)
  }, [children.length, slide])

  return (
    <StyledSlider {...{ bgcolor }}>
      {children.map((item, index) => (
        <StyledAutoSlide key={index} active={index === slide}>
          {item}
        </StyledAutoSlide>
      ))}
    </StyledSlider>
  )
}
