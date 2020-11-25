import styled from 'styled-components'
import Img from 'gatsby-image'
import { respondTo } from '../../../utilities'

export const StyledSection = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  padding: 64px 40px 0;
  text-align: center;
  width: calc(100% / 3);
  ${respondTo.M`
    width: 50%;
  `}
  ${respondTo.S`
    width: 100%;
  `}
`

export const StyledImg = styled(Img)`
  margin-bottom: 40px;
`
