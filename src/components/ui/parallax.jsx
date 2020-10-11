import React, { useEffect, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

export const Parallax = ({ children, height }) => {
  const ref = useRef()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calc = (offset) => `translateY(-${offset * 0.1}px)`
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
      <animated.div
        style={{
          transform: offset.interpolate(calc)
        }}>
        {children}
      </animated.div>
    </div>
  )
}
