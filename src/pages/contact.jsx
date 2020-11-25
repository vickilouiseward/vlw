import React from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyles, SiteHeader, BodyWrapper } from '../components'

const Page = () => (
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
      <div />
    </BodyWrapper>
  </>
)

export default Page
