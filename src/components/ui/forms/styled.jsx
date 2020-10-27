import styled from 'styled-components'
import { colours } from '../../../styles'
import { respondTo } from '../../../utilities'

const { black, white, silver } = colours

export const StyledForm = styled.form`
  width: 100%;
`

export const StyledInputContainer = styled.section`
  position: relative;
  width: 320px;
`

export const StyledInput = styled.input`
  background-color: ${white};
  border: 1px solid ${silver};
  border-radius: 0;
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
