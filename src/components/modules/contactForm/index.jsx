import React, { useState } from 'react'
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
  FieldWrapper,
  FormControl,
  TextInput,
  Textarea,
  SubmitButton
} from '../..'
import { formium } from '../../../utilities'

export const ContactForm = ({ title, text, image }) => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const data = useStaticQuery(graphql`
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
    window.sessionStorage.clear(`formium-${data.id}-form-state`)
  }
  return (
    <StyledContainer>
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
              data={data.formiumForm}
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
                  await formium.submitForm('newsletter', values)
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
        <StyledImg fadeIn={false} fluid={image} alt={title} />
      </StyledImgSection>
    </StyledContainer>
  )
}
