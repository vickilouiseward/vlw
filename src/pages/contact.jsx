import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { GlobalStyles, SiteHeader, BodyWrapper, ContactForm, Footer } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Page = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
      <BodyWrapper>
        <SiteHeader />
        <ContactForm
          formiumForm={data.formiumForm}
          title='Get in touch'
          image={data.contact.childImageSharp.fluid}
        />
        <Footer />
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
    contact: file(relativePath: { eq: "contact/Image-exports3x4_image_studio_oscardelarenta.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
export default Page
