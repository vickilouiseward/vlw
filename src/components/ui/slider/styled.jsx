import styled from 'styled-components'
import { colours } from '../../../styles'

const { white, midnight } = colours

export const StyledSliderContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const StyledSlider = styled.section`
  align-items: center;
  background-color: ${({ light }) => light ? white : midnight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ height }) => height || '100%'};
  position: relative;
  overflow: hidden;
  width: 100%;
`

export const StyledSliderTitle = styled.section`
  padding-top: 64px;
`

export const StyledSwipeSlide = styled.div`
  height: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  position: absolute;
  width: 100%;
  top: 0;
  transition: opacity 1s ease-in;
  transition-delay: ${({ active }) => active ? '1s' : 0};
  user-select: none;
  will-change: transform;
`
export const StyledAutoSlide = styled.div`
  height: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  position: absolute;
  width: 100%;
  top: 0;
  transition: opacity 2s ease-in;
  transition-delay: ${({ active }) => active ? '2s' : 0};
  user-select: none;
  will-change: transform;
`

export const StyledTabSlide = styled.div`
  height: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  position: absolute;
  width: 100%;
  top: 0;
  transition: opacity 0.6s ease-in;
  transition-delay: ${({ active }) => active ? '0.6s' : 0};
  user-select: none;
  will-change: transform;
`

export const StyledSlideTabList = styled.ul`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0 0 96px;
  width: 100%;
`
export const StyledSlideTab = styled.li`
  opacity: ${({ active }) => active ? 1 : 0.6};
  transition: opacity 0.1s ease-in;
  transition-delay: ${({ active }) => active ? '0.1s' : 0};
`
export const StyledSlideBulletList = styled.ul`
  bottom: 64px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  position: absolute;
  margin: 0 auto;
`

export const StyledSlideBullet = styled.li`
  background-color: ${({ light }) => light ? midnight : white};
  border-radius: 50%;
  height: 8px;
  margin: 0 4px;
  opacity: ${({ active }) => (active ? '90%' : '30%')};
  width: 8px;
`
