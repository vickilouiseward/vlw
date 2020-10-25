import React from 'react'
import { StyledInputContainer, StyledInput, StyledLabel, StyledInputError } from './styled'

export const Form = ({ children, onSubmit }) => (
  <form {...{ onSubmit }} noValidate>{children}</form>
)

export const Input = ({ label, field, type, register, error }) => (
  <StyledInputContainer>
    <StyledLabel htmlFor={field}>{label}</StyledLabel>
    <StyledInput id={field} name={field} type={type || 'text'} ref={register} />
    {error && <StyledInputError>{error}</StyledInputError>}
  </StyledInputContainer>
)
