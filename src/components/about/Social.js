import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//icons:
import twitter from "../../images/social/ico_twitter.svg"
import instagram from "../../images/social/ico_instagram.svg"
import linkedin from "../../images/social/ico_linkedin.svg"
import github from "../../images/social/ico_github.svg"

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          author
          social {
            twitter
            instagram
            linkedin
            github
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
      >
        <img src={twitter} alt="Twitter" title="Twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}
      >
        <img src={instagram} alt="Instagram" title="Instagram" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
      >
        <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/${data.site.siteMetadata.social.github}`}
      >
        <img src={github} alt="Github" title="Github" />
      </a>
    </React.Fragment>
  )
}

export default Social
