import React, { useEffect, useState } from 'react'
import { StyledSlider, StyledSlide } from './styled'

export const AutoSlider = ({ children, speed }) => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const targetIndex = (slide + 1) % children.length
      setSlide(targetIndex)
    }, speed)

    return () => interval && clearInterval(interval)
  }, [children.length, slide])

  return (
    <StyledSlider>
      {children.map((item, index) => (
        <StyledSlide key={index} active={index === slide}>{item}</StyledSlide>
      ))}
    </StyledSlider>
  )
}
