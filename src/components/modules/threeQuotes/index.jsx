import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledSection, StyledQuoteSlide } from './styled'
import { SwipeSlider, Title, Quote } from '../..'
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
          <SwipeSlider height='604px' light>
            {quotes.map((quote, index) => (
              <StyledQuoteSlide key={index}>
                <Quote key={index} {...quote} />
              </StyledQuoteSlide>
            ))}
          </SwipeSlider>
        ) : (
          quotes.map((quote, index) => (
            <Quote key={index} {...quote} />
          ))
        )}
      </StyledSection>
    </StyledContainer>
  )
}
