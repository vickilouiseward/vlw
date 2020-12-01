import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { GlobalStyles, SiteHeader, BodyWrapper, ContactForm } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    })
    window.sessionStorage.setItem('introComplete', 1)
  }, [])

  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>Contact | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Contact, Vicki Louise Ward - fashion, beauty &amp; lifestyle illustrator' />
      </Helmet>
      <GlobalStyles />
      <SiteHeader />
      <BodyWrapper>
        <ContactForm
          formiumForm={data.formiumForm}
          title='Get in touch'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          image={data.dress.childImageSharp.fluid}
        />
      </BodyWrapper>
    </>
  )
}
export const query = graphql`
  query {
    formiumForm: formiumForm(slug: { eq: "contact" }) {
      id
      name
      slug
      projectId
      schema
      createAt
      updateAt
    }
    dress: file(relativePath: { eq: "lets-work-together/purple_dress_wip.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
export default Page
