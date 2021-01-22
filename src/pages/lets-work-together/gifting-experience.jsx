import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeaderRight,
  FixedImageVerticalScroll,
  HorizontalScroll,
  Footer,
  StepIcons
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
        <title>Gifting Experience | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content='This luxury offering is ideal for those who have been looking to find the perfect original artwork to bring their home or office space together. One of a kind art also makes for a sumptuous gift, it is a wonderful way to treat someone special to a carefully refined favour. Vicki takes her time to get to know and really understand your vision - whether you are commissioning her to create artwork for yourself or as a gift.' />
      </Helmet>
      <GlobalStyles />
      <SiteHeader />
      <BodyWrapper>
        <PageHeaderRight
          color={midnight}
          bgcolor={white}
          title='Gifting Experience'
          image={data.bs_gifting.childImageSharp.fluid}
          text={[
            'This luxury offering is ideal for those who have been looking to find the perfect original artwork to bring their home or office space together. One of a kind art also makes for a sumptuous gift, it is a wonderful way to treat someone special to a carefully refined favour.',
            'Vicki takes her time to get to know and really understand your vision - whether you are commissioning her to create artwork for yourself or as a gift.'
          ]}
          cta={{
            text: 'Buy now',
            link: 'https://www.google.com'
          }}
        />
        <FixedImageVerticalScroll
          title='Vicki’s process'
          image={data.process.childImageSharp.fluid}
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
          $light
        />
        <HorizontalScroll
          title='Things to consider'
          blocks={[
            {
              image: data.consider_0.childImageSharp.fluid,
              Icon: StepIcons.SubjectMatter,
              text: 'This is what your chosen illustration/art is of. It could be an object you love, a fashion figure of your favourite brand or maybe the interior of somewhere you have visited. This can be personal to you, however if you are undecided or need help choosing a subject Vicki can help you find the right thing for you just let her know when asking for a quote.'
            }, {
              image: data.consider_1.childImageSharp.fluid,
              Icon: StepIcons.SizeRatio,
              text: "The size of your artwork is how big or small you'd like it. This normally depends on the space you are wishing to fill. It's great to measure the area making sure you leave enough space for the artwork and the frame you wish to put it in. Vicki can always advise a good size based on the space you want the artwork to go in."
            }, {
              image: data.consider_2.childImageSharp.fluid,
              Icon: StepIcons.Canvas,
              text: "Choosing a canvas is really preference however Vicki uses high quality 100% rag watercolour paper, starting in 300 gsm by default. There are many alternatives you can have as your canvas such as ply, stretch canvas, wood etc. If you'd like to use another material as your canvas this can easily be arranged and would be subject to sourcing and at an extra cost."
            }
          ]}
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
    bs_gifting: file(relativePath: { eq: "lets-work-together/gifting-experience/bs_gifting.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    process: file(relativePath: { eq: "lets-work-together/gifting-experience/Image-exports3x4_image_bo_dior_and_chanel.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_0: file(relativePath: { eq: "lets-work-together/bespoke-originals/Image-exports01_bespoke_orignals_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_1: file(relativePath: { eq: "lets-work-together/bespoke-originals/Image-exports02_bespoke_orignals_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_2: file(relativePath: { eq: "lets-work-together/bespoke-originals/Image-exports03_bespoke_orignals_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
