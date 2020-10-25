import styled from 'styled-components'
import Img from 'gatsby-image'
import { respondTo } from '../../../utilities'

export const StyledContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 630px;
  position: relative;
  ${respondTo.S`
    height: 520px;
    padding: 0 24px;
  `}
`

export const StyledImgWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
`
export const StyledImg = styled(Img)`
  height: 630px;
  width: 100vw;
  ${respondTo.S`
    height: 520px;
  `}
`
export const StyledSection = styled.section`
  background-color: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 64px 64px;
  max-width: 528px;
  text-align: center;
`
