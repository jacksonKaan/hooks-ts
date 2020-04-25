/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../hooks/useSiteMetadata'

interface MetaProperty {
  property: string
  content: string
}

interface MetaName {
  name: string
  content: string
}

type Meta = MetaName | MetaProperty

export interface SEOProps {
  title: string
  description?: string
  lang?: string
  meta?: Meta[]
  path?: string
}

const SEO: FC<SEOProps> = ({
  description = '',
  lang = 'en',
  meta = [],
  title,
  path = '/',
}) => {
  const siteMetadata = useSiteMetadata()
  const metaDescription = description || siteMetadata.description
  const url = `${siteMetadata.siteUrl}${path}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      link={[{ rel: 'canonical', key: url, href: url }]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:site_name`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author.name,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
