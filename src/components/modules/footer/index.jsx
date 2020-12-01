import React from 'react'
import {
  StyledFooter,
  StyledSection,
  StyledLink,
  StyledText
} from './styled'
import { InstaIcon, CCIcon } from '../..'
import { colours } from '../../../styles'

const { white } = colours

export const Footer = () => (
  <StyledFooter>
    <StyledSection>
      <StyledLink
        href='https://www.instagram.com/vickilouiseward'
        title='Instagram @vickilouiseward '
      >
        <InstaIcon fill={white} />Follow on Instagram
      </StyledLink>
      <StyledText>Copyright © 2020 Vicki Louise Ward</StyledText>
    </StyledSection>
    <StyledSection>
      <StyledText>All rights reserved</StyledText>
      <CCIcon />
    </StyledSection>
  </StyledFooter>
)
