import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FormiumForm, defaultComponents } from '@formium/react'
import { StyledContainer, StyledSection, StyledFormSection, PageWrapper } from './styled'
import { Title, Paragraph, FieldWrapper, FormControl, TextInput, SubmitButton } from '../..'
import { formium } from '../../../utilities'

export const Newsletter = ({ title, text }) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const data = useStaticQuery(graphql`
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

  if (typeof window !== 'undefined') {
    window.sessionStorage.clear(`formium-${data.id}-form-state`)
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
            data={data.formiumForm}
            components={{
              ...defaultComponents,
              PageWrapper,
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
                await formium.submitForm('newsletter', values)
                setSuccess(true)
              } catch {
                setError(true)
              }
            }}
            novalidate
            a='b'
          />
          {error && <Paragraph>Something went wrong, please try again.</Paragraph>}
        </StyledFormSection>
      )}

    </StyledContainer>
  )
}
