import styled from 'styled-components'
import Img from 'gatsby-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black } = colours

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
  width: 100%;
`

export const StyledPrice = styled.span`
  color: ${black};
  font-family: Amiri;
  font-size: 18px;
  font-weight: bold;
  line-height: 32px;
`
