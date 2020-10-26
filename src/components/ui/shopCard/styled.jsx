import styled from 'styled-components'
import Img from 'gatsby-image'
import { respondTo } from '../../../utilities'

export const StyledShopCardSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 488px;
  padding-top: 16px;
  text-align: center;
  width: 100%;
  ${respondTo.S`
    padding: 40px 0 24px;
  `}
`

export const StyledShopCardImage = styled(Img)`
  display: block;
  max-width: 360px;
  width: 100%;
`
