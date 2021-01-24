import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { FormiumForm, defaultComponents } from '@formium/react'
import {
  StyledContainer,
  StyledFormSection,
  StyledImgSection,
  StyledImg
} from './styled'
import {
  Title,
  Paragraph,
  PageWrapper,
  Parallax,
  FieldWrapper,
  FormControl,
  TextInput,
  Textarea,
  SubmitButton
} from '../..'
import { breakpoints, formium } from '../../../utilities'

export const ContactForm = ({ formiumForm, title, text, image }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  if (typeof window !== 'undefined') {
    window.sessionStorage.clear(`formium-${formiumForm.id}-form-state`)
  }

  return (
    <StyledContainer id='contact'>
      <StyledFormSection>
        <Title data-aos='fade-in' level={2}>
          {title}
        </Title>
        {text && (
          <Paragraph data-aos='fade-in'>{text}</Paragraph>
        )}
        {success ? (
          <Paragraph data-aos='fade-in'>Thank you for signing up!</Paragraph>
        ) : (
          <>
            <FormiumForm
              data={formiumForm}
              components={{
                ...defaultComponents,
                PageWrapper,
                Header: () => null,
                FieldWrapper,
                FormControl,
                TextInput,
                Textarea,
                SubmitButton
              }}
              onSubmit={async (values) => {
                setError(false)
                setSuccess(false)

                try {
                  await formium.submitForm(formiumForm.slug, values)
                  setSuccess(true)
                } catch {
                  setError(true)
                }
              }}
            />
            {error && <Paragraph data-aos='fade-in'>Something went wrong, please try again.</Paragraph>}
          </>
        )}
      </StyledFormSection>
      <StyledImgSection>
        <Parallax height={mobile ? '100vw' : '990px'}>
          <StyledImg fadeIn={false} fluid={image} alt={title} />
        </Parallax>
      </StyledImgSection>
    </StyledContainer>
  )
}
