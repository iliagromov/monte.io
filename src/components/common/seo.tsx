/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SEOProps = {
  title: string
  description?: string
  lang?: string
  meta?: {
    content: string
    name?: string
    property?: string
  }[]
  linkCanonical?: string
  isCanonical?: boolean
}

const SEO: FC<SEOProps> = ({
  description = ``,
  lang = `en`,
  meta = [],
  title,
  linkCanonical,
  isCanonical
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description
  const metaSocial = [
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
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];


  const Canonical = isCanonical ? [{
      rel: "canonical", 
      href: `${site.siteMetadata.siteUrl}/${linkCanonical}`
  }] : [];

  return (
    <Helmet
      
      defaultTitle={'Monte Tuning Inc'}
      encodeSpecialCharacters={true}
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaSocial}
      link={Canonical}
    />
  )
}

export default SEO
