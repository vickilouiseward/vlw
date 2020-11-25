import React from 'react'
import { Button } from '..'
import {
  StyledPageWrapper,
  StyledFieldWrapper,
  StyledTextInput,
  StyledLabel,
  StyledInputError
} from './styled'

export const PageWrapper = ({ children, onSubmit }) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
)

export const FieldWrapper = ({ children }) => (
  <StyledFieldWrapper>
    {children}
  </StyledFieldWrapper>
)

export const FormControl = ({ label, labelFor, children, error }) => (
  <>
    <StyledLabel htmlFor={labelFor}>{label}</StyledLabel>
    {children}
    {error && <StyledInputError>{error}</StyledInputError>}
  </>
)

export const TextInput = (props) => (
  <StyledTextInput {...props} />
)

export const SubmitButton = Button
