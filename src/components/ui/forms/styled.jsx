import styled from 'styled-components'
import { colours } from '../../../styles'

const { black, white, silver } = colours

export const StyledPageWrapper = styled.section`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 424px;
  padding-bottom: 0;
  text-align: left;
  width: 100%;
  button {
    margin-top: 16px;
  }
`

export const StyledFieldWrapper = styled.section`
  position: relative;
  // width: 320px;
  width: 100%;
`

export const StyledTextInput = styled.input`
  background-color: ${white};
  border: 1px solid ${silver};
  border-radius: 0;
  box-sizing: border-box;
  color: ${black};
  font-family: Amiri, serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 38px;
  height: 38px;
  margin-bottom: 28px;
  padding: 0 8px;
  opacity: 0.9;
  outline: 0;
  width: 100%;
`

export const StyledTextarea = styled.textarea`
  background-color: ${white};
  border: 1px solid ${silver};
  border-radius: 0;
  box-sizing: border-box;
  color: ${black};
  font-family: Amiri, serif;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  height: 190px;
  margin-bottom: 28px;
  padding: 0 8px;
  opacity: 0.9;
  outline: 0;
  resize: none;
  width: 100%;
`

export const StyledLabel = styled.label`
  display: block;
  font-size: 14px;
  letter-spacing: 2.33px;
  line-height: 24px;
  padding-bottom: 8px;
`

export const StyledInputError = styled.div`
  bottom: 0;
  color: #e02929;
  font-size: 14px;
  font-weight: bold;
  line-height: 28px;
  position: absolute;
`
