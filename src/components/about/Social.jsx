import React from "react"
import PropTypes, { object } from "prop-types"
import { SocialContainer } from "./styled-components"
import { useTrail, animated as a } from "react-spring"

//utils:
import useIntersect from "../../utils/hooks/useIntersect"

const Social = ({ social }) => {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })
  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })
  const ratio = format(entry.intersectionRatio)

  const socialTrail = useTrail(social.length, {
    from: {
      opacity: 0,
      transform: `scale(0.6)`,
    },
    to: {
      opacity: ratio > 0.5 ? 1 : 0,
      transform: ratio > 0.5 ? `scale(1)` : `scale(0.6)`,
    },
    config: { duration: 1000 },
  })

  return (
    <SocialContainer ref={ref}>
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
    </SocialContainer>
  )
}

Social.propTypes = {
  social: PropTypes.arrayOf(object).isRequired,
  ratio: PropTypes.string,
}

export default Social
