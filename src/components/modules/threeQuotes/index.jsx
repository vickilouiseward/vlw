import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledSection, StyledQuoteSlide } from './styled'
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
          <AutoSlider speed={6000}>
            {quotes.map((quote, index) => (
              <StyledQuoteSlide key={index}>
                <Quote {...quote} />
              </StyledQuoteSlide>
            ))}
          </AutoSlider>
        ) : (
          quotes.map((quote, index) => (
            <Quote key={index} {...quote} />
          ))
        )}
      </StyledSection>
    </StyledContainer>
  )
}
