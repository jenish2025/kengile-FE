import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  keywords?: string
  ogImage?: string
}

const SEO = ({ title, description, canonical, keywords, ogImage }: SEOProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bacancy.com'
  const fullTitle = `${title} | Bacancy - Future-Ready IT Services`
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <link rel="canonical" href={fullCanonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullCanonical} />
        <meta property="og:type" content="website" />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Head>
    </>
  )
}

export default SEO


