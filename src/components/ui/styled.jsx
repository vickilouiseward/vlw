import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { colours } from '../../styles'
import { respondTo } from '../../utilities'

const { black, white, midnight, cream, silver } = colours

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
  max-width: 520px;
  text-align: center;
  ${respondTo.S`
    padding-top: 64px;
  `}
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
  width: 100%;
  padding-top: 16px;
  text-align: center;
  ${respondTo.S`
    padding: 40px 0 24px;
  `}
`

export const StyledShopCardImage = styled(Img)`
  display: block;
  margin-bottom: 40px;
  width: 100%;
  ${respondTo.S`
    margin-bottom: 0;
  `}
`

export const StyledBlockquote = styled.blockquote`
  align-items: center;
  background-image: url(data:image/png;base64,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);
  background-repeat: no-repeat;
  background-size: 21px;
  background-position: center 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding-top: 64px;
  text-align: center;
  width: 360px;
  ${respondTo.S`
    width: 100%;
  `}
`

export const StyledCite = styled.cite`
  color: ${({ color }) => (color || black)};
  font-family: Northwell, serif;
  font-size: 32px;
  font-style: normal;
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
    margin: 64px auto 0;
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
  border: 1px solid ${midnight};
  color: ${midnight};
  font-family: Amiri;
  font-size: 14px;
  height: 38px;
  letter-spacing: 2.33px;
  line-height: 38px;
  padding: 0 23px;
  outline: none;
  text-transform: uppercase;
`

export const StyledLinkButton = styled(Link)`
  background-color: ${cream};
  border: 1px solid ${midnight};
  color: ${midnight};
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
  background-color: ${midnight};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledSlider = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${({ height }) => height || '100%'};
  position: relative;
  overflow: hidden;
  width: 100%;
`

export const StyledSlide = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  top: 0;
  transition: opacity 1s ease-in-out;
  user-select: none;
  will-change: transform;
`
export const StyledFadeSlide = styled.div`
  height: 100%;
  opacity: ${({ active }) => active ? 1 : 0};
  position: absolute;
  width: 100%;
  top: 0;
  transition: opacity 1s ease-in-out;
  user-select: none;
  will-change: transform;
`

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
  background-color: ${white};
  border-radius: 50%;
  height: 12px;
  margin: 0 8px;
  opacity: ${({ active }) => (active ? '90%' : '30%')};
  width: 12px;
`

export const StyledInputContainer = styled.section`
  position: relative;
  width: 320px;
`

export const StyledInput = styled.input`
  background-color: ${white};
  border: 1px solid ${silver};
  box-sizing: border-box;
  color: ${black}
  font-family: Amiri, serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 38px;
  height: 38px;
  padding: 0 8px;
  opacity: 0.9;
  outline: 0;
  width: 100%;
  ${respondTo.M`
    margin-bottom: 24px;
  `}
`

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 24px;
  padding-bottom: 8px;
`

export const StyledInputError = styled.div`
  color: #e02929;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  padding-top: 8px;
  position: absolute;
  ${respondTo.M`
    bottom: 0;
  `}
`
