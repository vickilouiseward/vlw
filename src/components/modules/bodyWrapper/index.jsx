import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { StyledContainer } from './styled'
import { breakpoints } from '../../../utilities'

export const BodyWrapper = ({ introAnimation, children }) => {
  const tabletUp = useMediaQuery({ minWidth: breakpoints.S + 1 })

  if (
    tabletUp &&
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
