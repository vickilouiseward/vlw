import React, { useEffect, useRef, forwardRef } from 'react'
import { useSpring } from 'react-spring'
import { StyledContainer, StyledParallax } from './styled'

export const Parallax = ({ children, height }) => {
  const ref = useRef()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calc = offset => `translateY(-${offset * 0.06}px)`
  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <StyledContainer {...{ height, ref }}>
      <StyledParallax style={{ transform: offset.interpolate(calc) }}>
        {children}
      </StyledParallax>
    </StyledContainer>
  )
}

// eslint-disable-next-line react/display-name
export const ParallaxScroller = forwardRef(({ children, maxOffset }, ref) => {
  const pRef = useRef()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calc = (offset) => {
    return `translateX(${offset}%)`
  }

  const handleScroll = () => {
    const { height, width, top } = ref.current.getBoundingClientRect()
    const { right } = pRef.current.getBoundingClientRect()
    const offsetPercent = top / height * 100
    console.log(offset, offsetPercent, right < width)

    if (offsetPercent <= 0 && offsetPercent >= maxOffset) {
      set({ offset: offsetPercent })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <StyledParallax
      ref={pRef}
      style={{ transform: offset.interpolate(calc) }}
      styles={`
        width: fit-content;
      `}
    >
      {children}
    </StyledParallax>
  )
})

export const ParallaxFade = ({ styles, children }) => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calc = offset => (1 - (offset / 1000)).toFixed(3)
  const handleScroll = () => {
    const offset = window.pageYOffset
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <StyledParallax
      style={{ opacity: offset.interpolate(calc) }}
      {...{ styles }}
    >
      {children}
    </StyledParallax>
  )
}
