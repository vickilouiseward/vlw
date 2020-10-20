import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledSection, StyledQuoteSlide } from './styled'
import { AutoSlider, Title, Quote } from '../..'
import { breakpoints } from '../../../utilities'

export const ThreeQuotes = ({ title, quotes }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })

  return (
    <StyledContainer>
      <Title level={2}>{title}</Title>
      <StyledSection>
        {mobile ? (
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
