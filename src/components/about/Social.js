import React from "react"
import PropTypes, { object } from "prop-types"
import { useTrail, animated as a } from "react-spring"

const Social = ({ social, ratio }) => {
  const socialTrail = useTrail(social.length, {
    from: {
      opacity: 0,
      transform: `scale(0.4)`,
    },
    to: {
      opacity: ratio > 0.55 ? 1 : 0,
      transform: `scale(${ratio ? 1 : 0.4})`,
    },
  })

  return (
    <>
      {social &&
        socialTrail.map((props, i) => (
          <a.a
            key={"social-icon" + i}
            style={props}
            target="_blank"
            rel="noopener noreferrer"
            href={social[i].href}
          >
            <img src={social[i].src} alt={social[i].alt} />
          </a.a>
        ))}
    </>
  )
}

Social.propTypes = {
  social: PropTypes.arrayOf(object).isRequired,
  ratio: PropTypes.string,
}

export default Social
