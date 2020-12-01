import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeader,
  ImageScrollingTextBlocks,
  ImageTextBlockGroup,
  ContactForm
} from '../../components'
import { colours } from '../../styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

const { midnight, white } = colours

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
        <title>Bespoke originals | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Ideal for those looking for a unique and personal artwork to bring that touch of luxury to a home or office space. One of a kind originals also make for an elegant and refined gift, they are the perfect way to treat that special someone.' />
      </Helmet>
      <GlobalStyles $lightmode />
      <SiteHeader />
      <BodyWrapper>
        <PageHeader
          color={midnight}
          bgcolor={white}
          title='Bespoke originals'
          text='Ideal for those looking for a unique and personal artwork to bring that touch of luxury to a home or office space. One of a kind originals also make for an elegant and refined gift, they are the perfect way to treat that special someone.'
        />
        <ImageScrollingTextBlocks
          title='Vicki’s process'
          image={data.runway.childImageSharp.fluid}
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
          title='Things to consider'
          blocks={[
            {
              image: data.subject.childImageSharp.fixed,
              title: 'Subject matter',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
            }, {
              image: data.size.childImageSharp.fixed,
              title: 'Artwork size',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
            }, {
              image: data.canvas.childImageSharp.fixed,
              title: 'Canvas choice',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
            }, {
              image: data.materials.childImageSharp.fixed,
              title: 'Type of materials',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
            }, {
              image: data.timeline.childImageSharp.fixed,
              title: 'Your timeline',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
            }, {
              image: data.gifting.childImageSharp.fixed,
              title: 'Gifting',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
            }
          ]}
        />
        <ContactForm
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
    header: file(relativePath: { eq: "lets-work-together/ysl_wip.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    yoga: file(relativePath: { eq: "lets-work-together/yoga.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    jom: file(relativePath: { eq: "lets-work-together/jo_malone.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    runway: file(relativePath: { eq: "lets-work-together/runway_wip.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    subject: file(relativePath: { eq: "lets-work-together/subject_matter.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    size: file(relativePath: { eq: "lets-work-together/artwork_size.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    canvas: file(relativePath: { eq: "lets-work-together/canvas_choice.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    materials: file(relativePath: { eq: "lets-work-together/types_of_materials.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    timeline: file(relativePath: { eq: "lets-work-together/your_timeline.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
    gifting: file(relativePath: { eq: "lets-work-together/gifting.jpg" }) {
      childImageSharp {
        fixed(height: 276, width: 276) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
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
