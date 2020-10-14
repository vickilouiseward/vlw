import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { colours } from '../../styles'
import { respondTo } from '../../utilities'

const { black, charcoal, cream } = colours

export const StyledMenuIcon = styled.svg`
  height: 26px;
  width: 32px;
`

export const StyledCloseIcon = styled.svg`
  height: 34px;
  width: 24px;
`

export const StyledLogo = styled.svg`
  height: 77px;
  width: 300px;
  ${({ scaleDown }) =>
    scaleDown &&
    `
      height: 40px;
      width: 156px;
    `}
`

export const StyledCtaSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  text-align: center;
`

export const StyledTextTabSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  padding-top: 48px;
  text-align: center;
`

export const StyledTextTabIcon = styled(Img)`
  display: block;
  height: 45px;
  margin-bottom: 40px;
  width: 100%;
`

export const StyledShopCardSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  padding-top: 16px;
  text-align: center;
`

export const StyledShopCardImage = styled(Img)`
  display: block;
  margin-bottom: 40px;
  width: 100%;
`

export const StyledBlockquote = styled.blockquote`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  padding-top: 48x;
  text-align: center;
`

export const StyledCite = styled.cite`
  color: ${({ color }) => (color || black)};
  font-family: Northwell, serif;
  font-size: 32px;
  line-height: 52px;
  margin: 24px auto 0;
  ${respondTo.M`
    font-size: 24px;
    line-height: 40px;
  `}
`

export const StyledH2 = styled.h2`
  color: ${({ color }) => (color || black)};
  font-family: Northwell, serif;
  font-size: 48px;
  font-weight: normal;
  line-height: 78px;
  margin: 80px auto 0;
  ${respondTo.M`
    font-size: 32px;
    line-height: 52px;
  `}
`

export const StyledH3 = styled.h3`
  color: ${({ color }) => (color || black)};
  font-family: Amiri, serif;
  font-size: 24px;
  font-weight: normal;
  line-height: 42px;
  margin: 0 auto;
`

export const StyledParagraph = styled.p`
  color: ${({ color }) => (color || black)};
  font-family: Amiri;
  font-size: 16px;
  line-height: 28px;
  margin: 16px auto 24px;
  max-width: 520px;
`

export const StyledBodyLink = styled.span`
  color: ${({ color }) => (color || black)};
  font-family: Amiri;
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
  ${respondTo.M`
    font-size: 14px;
    line-height: 24px;
  `}
`

export const StyledButton = styled.button`
  background-color: ${cream};
  border: 1px solid ${charcoal};
  color: ${charcoal};
  font-family: Amiri;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 38px;
  padding: 0 23px;
  outline: none;
  text-transform: uppercase;
`

export const StyledLinkButton = styled(Link)`
  background-color: ${cream};
  border: 1px solid ${charcoal};
  color: ${charcoal};
  display: inline-block;
  font-family: Amiri;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 38px;
  padding: 0 23px;
  outline: none;
  text-decoration: none;
  text-transform: uppercase;
`

export const StyledSliderContainer = styled.section`
  align-items: center;
  background-color: ${charcoal};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSlider = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ height }) => height ? `${height}px` : '100%'};
  position: relative;
  overflow: hidden;
  width: 100%;
`

export const StyledSlide = styled.div`
  height: 100%;
  width: 100%;
  user-select: none;
  will-change: transform;
`
export const StyledTabSlide = styled.div``
export const StyledSlideTabList = styled.ul`
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0 0 96px;
  width: 100%;
`
export const StyledSlideTab = styled.li`
  opacity: ${({ active }) => active ? 1 : 0.6};
`
