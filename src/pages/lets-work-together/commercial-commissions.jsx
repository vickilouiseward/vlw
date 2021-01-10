import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeaderLeft,
  ImageScrollingTextBlocks,
  ImageTextBlockGroup,
  ContactForm,
  Footer
} from '../../components'
import { colours } from '../../styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { midnight, white } = colours

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
  console.log(data)
  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='utf-8' />
        <title>Commercial commissions | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Ideal for those looking for a unique and personal artwork to bring that touch of luxury to a home or office space. One of a kind originals also make for an elegant and refined gift, they are the perfect way to treat that special someone.' />
      </Helmet>
      <GlobalStyles />
      <SiteHeader />
      <BodyWrapper>
        <PageHeaderLeft
          color={midnight}
          bgcolor={white}
          title='Commercial commissions'
          image={data.placeholder.childImageSharp.fluid}
          text={[
            'This luxury offering is ideal for those who have been looking to find the perfect original artwork to bring their home or office space together. One of a kind art also makes for a sumptuous gift, it is a wonderful way to treat someone special to a carefully refined favour.',
            'Vicki takes her time to get to know and really understand your vision - whether you are commissioning her to create artwork for yourself or as a gift.'
          ]}
        />
        <ImageScrollingTextBlocks
          title='Vicki’s process'
          image={data.placeholder.childImageSharp.fluid}
          blocks={[
            {
              number: 'Step One',
              title: 'Personal Consultation',
              text: 'We will discuss your vision and how best to realise it. You might want to share ideas on subject matter, composition or colour palette. Some people have very specific ideas in mind whereas others prefer a more guided approach - no matter your requirements we can tailor the service to suit your needs. You can find some considerations below [Link to this] to help with this conversation.'
            },
            {
              number: 'Step Two',
              title: 'Tailored quote',
              text: 'Once we have discussed your requirements you will receive an outline of options and prices for the service. We can then agree on the scope of the project, after which a statement of work and initial quote will be issued. 50% of this total will be required before any work can be started.'
            },
            {
              number: 'Step Three',
              title: 'Exploration',
              text: 'An exploration of the final piece will be carried out, including roughs for composition, line work and colour palate as well as any additional requests such copy admirations or use of special materials or canvas.'
            },
            {
              number: 'Step Four',
              title: 'Review',
              text: 'This is a chance to review and provide feedback on the initial exploration. Take this opportunity to ask any questions you have or to request small amendments. Bear in mind that after this point once everything has been signed off any changes or additions will be an extra cost.'
            },
            {
              number: 'Step Five',
              title: 'Final piece',
              text: 'Once you are happy and everything has been approved, your original piece will be completed. After the work has been finished you will receive high res images of your art and the final invoice.'
            },
            {
              number: 'Step Six',
              title: 'Receiving your artwork',
              text: 'Once final payment has been received your artwork will be scheduled for delivery and sent to your chosen address.'
            }
          ]}
        />
        <ImageTextBlockGroup
          title='Illustration Services'
          blocks={[
            {
              image: data.placeholderFixed.childImageSharp.fixed,
              title: 'Branding & Packaging',
              text: 'This applies to accompanying illustrations that compliment your brands identity and adds an extra layer of personality. Including marketing material, press packs as well as adding to your digital presences, via email marketing, social and your business or brands website creating a consistent identity across all platforms.'
            }, {
              image: data.placeholderFixed.childImageSharp.fixed,
              title: 'Advertising campaigns',
              text: 'Are you looking to promote a new product or collection and want to add an illustrative detail?'
            }, {
              image: data.placeholderFixed.childImageSharp.fixed,
              title: 'Editorial & Media',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }, {
              image: data.placeholderFixed.childImageSharp.fixed,
              title: 'Press & events',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }, {
              image: data.placeholderFixed.childImageSharp.fixed,
              title: 'Large scale',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }, {
              image: data.placeholderFixed.childImageSharp.fixed,
              title: 'Bespoke',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          ]}
        />
        <ContactForm
          formiumForm={data.formiumForm}
          title='Get in touch'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          image={data.placeholder.childImageSharp.fluid}
        />
        <Footer />
      </BodyWrapper>
    </>
  )
}
export const query = graphql`
  query {
    formiumForm: formiumForm(slug: { eq: "bespoke" }) {
      id
      name
      slug
      projectId
      schema
      createAt
      updateAt
    }
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    placeholderFixed: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
