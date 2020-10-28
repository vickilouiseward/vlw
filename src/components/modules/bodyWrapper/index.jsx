import React from 'react'
import { StyledContainer } from './styled'

export const BodyWrapper = ({ children }) => {
  document.body.classList.add('no-scroll')

  setInterval(() => document.body.classList.remove('no-scroll'), 4000)

  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
