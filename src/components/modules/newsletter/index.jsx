import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { graphql, useStaticQuery } from 'gatsby'
import { FormiumForm, defaultComponents } from '@formium/react'
import { StyledContainer, StyledSection, StyledPageWrapper, StyledFormSection } from './styled'
import { Title, Paragraph, PageWrapper, FieldWrapper, FormControl, TextInput, SubmitButton } from '../..'
import { breakpoints, formium } from '../../../utilities'

export const Newsletter = ({ title, text }) => {
  const tablet = useMediaQuery({ maxWidth: breakpoints.M })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const { formiumForm } = useStaticQuery(graphql`
    query {
      formiumForm(slug: { eq: "newsletter" }) {
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

  console.log()

  if (typeof window !== 'undefined') {
    window.sessionStorage.clear(`formium-${formiumForm.id}-form-state`)
  }

  return (
    <StyledContainer>
      <StyledSection>
        <Title level={2}>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </StyledSection>
      {success ? (
        <Paragraph>Thank you for signing up!</Paragraph>
      ) : (
        <StyledFormSection>
          <FormiumForm
            data={formiumForm}
            components={{
              ...defaultComponents,
              PageWrapper: tablet ? PageWrapper : StyledPageWrapper,
              Header: () => null,
              FieldWrapper,
              FormControl,
              TextInput,
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
        </StyledFormSection>
      )}

    </StyledContainer>
  )
}
