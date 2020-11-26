import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { silver } = colours

export const StyledSpacer = styled.div`
  background-color: transparent;
  display: block;
  height: 1px;
  margin: 64px auto;
  max-width: 1200px;
  opacity: 0.5;
  width: calc(100% - 80px);
  ${respondTo.S`
    margin: 0 auto 64px;
    width: calc(100% - 64px);
  `}
`

export const StyledKeyline = styled.div`
  background-color: ${silver};
  display: block;
  height: 1px;
  margin: 0 auto 120px;
  max-width: 1200px;
  opacity: 0.5;
  width: calc(100% - 80px);
  ${respondTo.S`
    margin: 0 auto 64px;
    width: calc(100% - 64px);
  `}
`
