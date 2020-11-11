import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledSection, StyledImg } from './styled'
import { AutoSlider } from '../..'
import { colours } from '../../../styles'
import { breakpoints } from '../../../utilities'

const { midnight } = colours

export const FiveLogos = ({ logos }) => {
  const tablet = useMediaQuery({ maxWidth: breakpoints.M })

  return (
    <StyledContainer>
      <StyledSection>
        {tablet ? (
          <AutoSlider speed={4000} bgcolor={midnight} pauseable>
            {logos.map(({ image, alt }, index) => (
              <StyledImg key={index} fadeIn={false} fixed={image} {...{ alt }} />
            ))}
          </AutoSlider>
        ) : (
          logos.map(({ image, alt }, index) => (
            <StyledImg key={index} fadeIn={false} fixed={image} {...{ alt }} />
          ))
        )}
      </StyledSection>
    </StyledContainer>
  )
}
