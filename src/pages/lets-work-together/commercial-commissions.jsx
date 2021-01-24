import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {
  BodyWrapper,
  GlobalStyles,
  SiteHeader,
  PageHeaderLeft,
  FixedImageVerticalScroll,
  HorizontalScroll,
  ContactForm,
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
        <title>Commercial commissions | Vicki Louise Ward Fashion Illustrator</title>
        <meta name='description' content="It all begins with an idea. Maybe you want to launch a new brand or elevate your next campaign. Whatever it is, the way you tell your brands story can make all the difference. With Vicki's delicate and stylish illustrations she can help you do just that by bringing a sense of sophistication and adding a personal touch." />
      </Helmet>
      <GlobalStyles />
      <BodyWrapper>
        <SiteHeader />
        <PageHeaderLeft
          color={midnight}
          bgcolor={white}
          title='Commercial commissions'
          image={data.commercial_commission_eips.childImageSharp.fluid}
          text={[
            "It all begins with an idea. Maybe you want to launch a new brand or elevate your next campaign. Whatever it is, the way you tell your brands story can make all the difference. With Vicki's delicate and stylish illustrations she can help you do just that by bringing a sense of sophistication and adding a personal touch."
          ]}
        />
        <FixedImageVerticalScroll
          title='Vicki’s process'
          image={data.process.childImageSharp.fluid}
          blocks={[
            {
              number: 'Step One',
              title: 'Consultation',
              text: 'We will start every project with an initial consultation, with the aim for Vicki to fully understand your businesses needs and what illustrative service/s you business requires, we can then discuss approach, agree times lines and fees.'
            },
            {
              number: 'Step Two',
              title: 'Quote & contract',
              text: 'Based on the consultation Vicki will put together a tailored quote & contract for you, outlining all requirements discussed, any key dates and deadline along with the final cost. This is the opportunity to raise any amendments or new requests. Before any work begins 50% of the final cost is required up front and the remaining 50% on completion. '
            },
            {
              number: 'Step Three',
              title: 'Exploration',
              text: 'Vicki will begin an exploration phase including roughs for composition, line work and colour palate as well as any additional requests such copy considerations or use of special materials or canvas.'
            },
            {
              number: 'Step Four',
              title: 'Exploration Review',
              text: 'This is a chance to review and provide feedback on the initial exploration and approach.  Take this opportunity to ask any questions you have or to request small amendments.'
            },
            {
              number: 'Step Five',
              title: 'Illustration / Artwork',
              text: 'Once we have discussed the approach based on the exploration and everything has been approved Vicki will begin working on the agreed artwork. After the work has been finished you will receive high res images of your illustrations for you to approve (they will be water marked). Depending on contract as to how many amendments have been included any extra will be charged extra charge per hour.'
            },
            {
              number: 'Step Six',
              title: 'Receiving Your Illustrations / Artwork',
              text: 'Once you are happy with your illustrations/artwork Vicki will send you the files or hard copy depending on what your required once final payment is received.'
            }
          ]}
        />
        <HorizontalScroll
          title='Illustration Services'
          blocks={[
            {
              image: data.consider_0.childImageSharp.fluid,
              Icon: StepIcons.Branding,
              text: 'Want to compliment your brands identity and add an extra layer of personality. This includes marketing material, press packs as well as adding to your digital presences through email marketing, social and website creating a consistent identity across all platforms'
            }, {
              image: data.consider_1.childImageSharp.fluid,
              Icon: StepIcons.Advertising,
              text: 'Are you looking to promote a new product or collection and want to add illustrative detail to elevate your brand story for a new product or collection. Do you want to add a unique illustrative look that brings your brand to life.'
            }, {
              image: data.consider_2.childImageSharp.fluid,
              Icon: StepIcons.Editorial,
              text: 'Fashion illustration is great way to enhance editorial and media content, by adding the elegance of illustration you can create depth to your content and story telling in a way that sets you apart either instead of photography or to compliment the imagery.'
            }, {
              image: data.consider_3.childImageSharp.fluid,
              Icon: StepIcons.Press,
              text: 'Are you looking to create a launch for your brand or client and want to add a special illustrative element. This could be through the invites, the press pack and launch material to live drawing or bespoke illustrations for guests.'
            }, {
              image: data.consider_4.childImageSharp.fluid,
              Icon: StepIcons.Windows,
              text: 'Do you want to create impact in an event space or brand store? A great way to do this is bespoke window and mural illustration is one way to create impact for your customers or atmosphere at an events.'
            }, {
              image: data.consider_5.childImageSharp.fluid,
              Icon: StepIcons.Bespoke,
              text: 'When it comes to fashion illustration there is are so many ways it can add to a brand, sometimes it’s something more bespoke or unique to the brand or event. If you have an idea you want to find if it’d doable just drop Vicki a message.'
            }
          ]}
        />
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
    formiumForm: formiumForm(slug: { eq: "bespoke" }) {
      id
      name
      slug
      projectId
      schema
      createAt
      updateAt
    }
    commercial_commission_eips: file(relativePath: { eq: "lets-work-together/commercial-commissions/commercial_commission_eips.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    process: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports3x4_image_working_farmhouse.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_0: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports01_commercial_commissions_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_1: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports02_commercial_commissions_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_2: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports03_commercial_commissions_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_3: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports04_commercial_commissions_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_4: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports05_commercial_commissions_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    consider_5: file(relativePath: { eq: "lets-work-together/commercial-commissions/Image-exports06_commercial_commissions_consider.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contact: file(relativePath: { eq: "contact/Image-exports3x4_image_studio_figurepurpledress.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Page
