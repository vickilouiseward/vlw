import React, { useState, useEffect } from 'react'
import { StyledContainer, StyledSliderSection, StyledImg, StyledSection, StyledSpacer } from './styled'
import { AutoSlider, Logo, Tagline, ParallaxFade } from '../..'
import { colours } from '../../../styles'

const { white } = colours

export const SplashHero = ({ images, cta, link, introAnimation }) => {
  const [bgImage, setBgImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setBgImage((bgImage + 1) % images.length), 6000)

    return () => interval && clearInterval(interval)
  }, [images.length, bgImage])

  return (
    <>
      <StyledContainer>
        <ParallaxFade
          style={{
            alignItems: 'center',
            backgroundColor: white,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <StyledSliderSection {...{ introAnimation }}>
            <AutoSlider speed={6000} $light>
              {images.map((image, index) => <StyledImg key={index} fadeIn={false} fluid={image} alt='Portfolio example' />)}
            </AutoSlider>
          </StyledSliderSection>
          <StyledSection {...{ introAnimation }}>
            <Logo />
            <Tagline>Fashion, beauty &amp; lifestyle illustrator</Tagline>
            {/* <StyledLinkSpacer {...{ fadeIn }}>
          <LinkButton {...{ cta, link }} />
        </StyledLinkSpacer> */}
          </StyledSection>
        </ParallaxFade>
      </StyledContainer>
      <StyledSpacer />
    </>
  )
}
