import React from "react"

//icons:
import twitter from "../../images/social/ico_twitter.svg"
import instagram from "../../images/social/ico_instagram.svg"
import linkedin from "../../images/social/ico_linkedin.svg"
import github from "../../images/social/ico_github.svg"

const Social = ({ social }) => {
  return (
    <React.Fragment>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/${social.twitter}`}
      >
        <img src={twitter} alt="Twitter" title="Twitter" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://instagram.com/${social.instagram}`}
      >
        <img src={instagram} alt="Instagram" title="Instagram" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.linkedin.com/in/${social.linkedin}`}
      >
        <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/${social.github}`}
      >
        <img src={github} alt="Github" title="Github" />
      </a>
    </React.Fragment>
  )
}

export default Social
