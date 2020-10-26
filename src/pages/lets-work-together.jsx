import React from 'react'
import { Helmet } from 'react-helmet'
import { GlobalStyles, Header, ComingSoon } from '../components'

const Page = () => (
  <>
    <Helmet>
      <html lang='en' />
      <meta charSet='utf-8' />
      <title>Coming Soon | Vicki Louise Ward Fashion Illustrator</title>
      <meta name='description' content='Coming soon, Vicki Louise Ward - fashion, beauty &amp; lifestyle illustrator' />
    </Helmet>
    <GlobalStyles />
    <Header />
    <ComingSoon />
  </>
)

export default Page
