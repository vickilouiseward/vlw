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
      duration: 2000,
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
        <title>Bespoke originals | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='Ideal for those looking for a unique and personal artwork to bring that touch of luxury to a home or office space. One of a kind originals also make for an elegant and refined gift, they are the perfect way to treat that special someone.' />
      </Helmet>
      <GlobalStyles />
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
              title: 'Subject',
              text: 'This is what your chosen illustration/art is of. It could be an object you love, a fashion figure of your favourite brand or maybe the interior of somewhere you have visited. This can be personal to you, however if you are undecided or need help choosing a subject Vicki can help you find the right thing for you just let her know when asking for a quote.'
            }, {
              image: data.size.childImageSharp.fixed,
              title: 'Size & ratio',
              text: "The size of your artwork is how big or small you'd like it. This normally depends on the space you are wishing to fill. It's great to measure the area making sure you leave enough space for the artwork and the frame you wish to put it in. Vicki can always advise a good size based on the space you want the artwork to go in."
            }, {
              image: data.canvas.childImageSharp.fixed,
              title: 'Canvas',
              text: "Choosing a canvas is really preference however Vicki uses high quality 100% rag watercolour paper, starting in 300 gsm by default. There are many alternatives you can have as your canvas such as ply, stretch canvas, wood etc. If you'd like to use another material as your canvas this can easily be arranged and would be subject to sourcing and at an extra cost."
            }, {
              image: data.materials.childImageSharp.fixed,
              title: 'Materials',
              text: 'By default Vicki uses premium watercolour and inks from the top brands to create any Bespoke Original. However if you would like custom materials such as a special type of ink or watercolour for example neon/metallic or gold leaf, she can discuss the option and quote you based on the additional materials.'
            }, {
              image: data.timeline.childImageSharp.fixed,
              title: 'Timeline',
              text: 'Generally allow a commission to take 4 - 6  weeks. This will all be based on each individual quote. If you need your piece sooner then please Vicki know this in advance as she will see how she can accommodate you.- Should you need a fast turn around this can be arrange depending on availability and this is subject to additional cost.'
            }, {
              image: data.gifting.childImageSharp.fixed,
              title: 'Gifting',
              text: 'If your item is a gift, for any size A5 - A2 the artwork can be wrapped in a luxury gift box and sent directly to your nominated recipient. However if you are not quite sure what type of artwork to gift there is an option to purchase a gift voucher for a Bespoke Original for your special someone that way they can choose for themselves a piece of art dear to them.'
            }
          ]}
        />
        <ContactForm
          formiumForm={data.formiumForm}
          title='Get in touch'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam metus, varius vitae magna efficitur, dapibus luctus metus. Nulla bibendum ut odio sit amet varius.'
          image={data.dress.childImageSharp.fluid}
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
