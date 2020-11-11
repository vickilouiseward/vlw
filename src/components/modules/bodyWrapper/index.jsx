import React from 'react'
import { StyledContainer } from './styled'

export const BodyWrapper = ({ introAnimation, children }) => {
  if (
    introAnimation &&
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  ) {
    window.scrollTo(0, 0)
    document.body.classList.add('no-scroll')
    setInterval(() => document.body.classList.remove('no-scroll'), 4000)
  }

  return (
    <StyledContainer>{children}</StyledContainer>
  )
}
