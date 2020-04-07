import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import defaultImage from "../assets/images/screenshot.jpg"

function SEO({
  title = "",
  description = "",
  keywords = "",
  lang = "en",
  meta = [{}],
  image = "",
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            lang
            author
            twitterUsername
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const img = image || `${defaultImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang: lang || site.siteMetadata.lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `image`,
          content: img,
        },
        {
          name: `keywords`,
          content: keywords || site.siteMetadata.keywords,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: img,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:creator`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:url`,
          content: `https://developep.com`,
        },
        //twitter:
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          property: `twitter:url`,
          content: `https://developep.com`,
        },
        {
          property: `twitter:title`,
          content: metaTitle,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: img,
        },
      ].concat(meta)} //it adds whatever other meta received by props
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
