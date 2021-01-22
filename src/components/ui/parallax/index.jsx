import React, { useEffect, useRef, forwardRef } from 'react'
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

export const ParallaxX = forwardRef(({ children }, ref) => {
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calc = (offset) => {
    return `translateX(${offset}%)`
  }

  const handleScroll = () => {
    const { height, top, width } = ref.current.getBoundingClientRect()
    const offsetPercent = top / (height - width) * 100
    const offset = offsetPercent > 0 ? 0 : offsetPercent < -100 ? -100 : offsetPercent
    console.log(offset)
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div style={{ overflow: 'hidden' }}>
      <animated.div style={{ transform: offset.interpolate(calc) }}>
        {children}
      </animated.div>
    </div>
  )
})

export const ParallaxFade = ({ style, children }) => {
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
      style={{ ...{ opacity: offset.interpolate(calc) }, ...style }}
    >
      {children}
    </animated.div>
  )
}
