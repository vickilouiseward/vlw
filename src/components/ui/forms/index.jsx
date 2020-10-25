import React from 'react'
import {
  StyledForm,
  StyledInputContainer,
  StyledInput,
  StyledLabel,
  StyledInputError
} from './styled'

export const Form = ({ children, onSubmit }) => (
  <StyledForm {...{ onSubmit }} noValidate>{children}</StyledForm>
)

export const Input = ({ label, field, type, register, error }) => (
  <StyledInputContainer>
    <StyledLabel htmlFor={field}>{label}</StyledLabel>
    <StyledInput id={field} name={field} type={type || 'text'} ref={register} />
    {error && <StyledInputError>{error}</StyledInputError>}
  </StyledInputContainer>
)
