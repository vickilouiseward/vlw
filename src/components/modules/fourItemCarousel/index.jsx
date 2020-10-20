import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer, StyledSection, StyledImg } from './styled'
import { Parallax, TabSlider, TextTab, SwipeSlider } from '../..'
import { colours } from '../../../styles'
import { breakpoints } from '../../../utilities'

const { cream } = colours

export const FourItemCarousel = ({ title, items }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })

  return (
    <StyledContainer>
      {mobile ? (
        <SwipeSlider height='calc(60vw + 520px)'>
          {items.map(({ image, tab }, index) => (
            <StyledSection key={index}>
              <Parallax height='60vw'>
                <StyledImg fadeIn={false} fluid={image} alt={title} />
              </Parallax>
              <TextTab color={cream} {...tab} />
            </StyledSection>
          ))}
        </SwipeSlider>

      ) : (
        <TabSlider tabs={items.map(({ tab }, index) => <TextTab key={index} color={cream} {...tab} />)} height={460} {...{ title }}>
          {items.map(({ image }, index) => (
            <Parallax key={index} height='460px'>
              <StyledImg fadeIn={false} fluid={image} alt={title} />
            </Parallax>
          ))}
        </TabSlider>
      )}
    </StyledContainer>
  )
}
