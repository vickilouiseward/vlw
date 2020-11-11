import React, { useEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

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
    <div style={{ height, overflow: 'hidden' }} {...{ ref }}>
      <animated.div style={{ transform: offset.interpolate(calc) }}>
        {children}
      </animated.div>
    </div>
  )
}

export const ParallaxFade = ({ className, children }) => {
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
    <animated.div
      className={className}
      style={{ opacity: offset.interpolate(calc) }}
    >
      {children}
    </animated.div>
  )
}
