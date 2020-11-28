import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { graphql, useStaticQuery } from 'gatsby'
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

export const ContactForm = ({ title, text, image }) => {
  const mobile = useMediaQuery({ maxWidth: breakpoints.S })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const { formiumForm } = useStaticQuery(graphql`
    query {
      formiumForm(slug: { eq: "contact" }) {
        id
        name
        slug
        projectId
        schema
        createAt
        updateAt
      }
    }
  `)

  if (typeof window !== 'undefined') {
    window.sessionStorage.clear(`formium-${formiumForm.id}-form-state`)
  }

  return (
    <StyledContainer id='contact'>
      <StyledFormSection>
        <Title level={2}>
          {title}
        </Title>
        <Paragraph>{text}</Paragraph>
        {success ? (
          <Paragraph>Thank you for signing up!</Paragraph>
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
            {error && <Paragraph>Something went wrong, please try again.</Paragraph>}
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
