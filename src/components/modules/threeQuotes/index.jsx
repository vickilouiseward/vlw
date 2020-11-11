import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledSection, StyledSliderSection } from './styled'
import { AutoSlider, Title, Quote } from '../..'
import { breakpoints } from '../../../utilities'
import { colours } from '../../../styles'

const { midnight } = colours

export const ThreeQuotes = ({ title, quotes }) => {
  const tablet = useMediaQuery({ maxWidth: breakpoints.M })

  return (
    <StyledContainer>
      <Title level={2} color={midnight}>{title}</Title>
      <StyledSection>
        {tablet ? (
          <StyledSliderSection>
            <AutoSlider speed={6000} dots light pauseable>
              {quotes.map((quote, index) => (
                <Quote key={index} {...quote} />
              ))}
            </AutoSlider>
          </StyledSliderSection>
        ) : (
          quotes.map((quote, index) => (
            <Quote key={index} {...quote} />
          ))
        )}
      </StyledSection>
    </StyledContainer>
  )
}
