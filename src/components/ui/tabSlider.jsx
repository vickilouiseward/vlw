import React, { useState } from 'react'
import { Title } from '.'
import { StyledSliderContainer, StyledSlider, StyledSlide, StyledSlideTabList, StyledSlideTab } from './styled'
import { colours } from '../../styles'

const { cream } = colours

export const TabSlider = ({ children, height, tabs, title }) => {
  const [slide, setSlide] = useState(0)

  return (
    <StyledSliderContainer>
      <StyledSlider {...{ height }}>
        {children.map((item, index) => (
          <StyledSlide key={index} active={index === slide}>{item}</StyledSlide>
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
