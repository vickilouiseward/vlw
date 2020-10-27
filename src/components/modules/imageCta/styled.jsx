import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { white } = colours

export const StyledBgContainer = styled(BackgroundImage)`
  align-items: center;
  background-color: ${white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 850px;
  position: relative;
  ${respondTo.S`
    justify-content: flex-end;
    height: 740px;
    padding: 0 24px 64px;
    
  `}
`

export const StyledSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const StyledLinkSpacer = styled.div`
  padding-top: 24px;
`
