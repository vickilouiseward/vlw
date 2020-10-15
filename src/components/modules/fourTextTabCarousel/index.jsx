import React from 'react'
import { StyledContainer, StyledImg } from './styled'
import { Parallax, TabSlider, TextTab } from '../..'
import { colours } from '../../../styles'

const { cream } = colours
const height = 460

export const FourTextTabCarousel = ({ images, title, textTabs }) => (
  <StyledContainer>
    <TabSlider tabs={textTabs.map((tab, index) => <TextTab key={index} color={cream} {...tab} />)} {...{ height, title }}>
      {images.map((image, index) => <Parallax key={index} {...{ height }}>
        <StyledImg fadeIn={false} fluid={image} alt={title} />
        </Parallax>
      )}
    </TabSlider>
  </StyledContainer>
)
