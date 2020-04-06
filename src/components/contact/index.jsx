import React from "react"
import { useSpring } from "react-spring"
import { Container, Title, Intro, ContactForm } from "./styled-components"
import PropTypes from "prop-types"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

const Contact = ({ data: { id, title, description } }) => {
  const { format } = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  })
  const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100)
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  })
  const ratio = format(entry.intersectionRatio)

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate3d(0px, 50px, 0)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform:
        ratio > 0.1 ? `translate3d(0px, 0px, 0)` : `translate3d(0px, 50px, 0)`,
    },
  })

  const introProps = useSpring({
    from: {
      opacity: 0,
      transform: `scale(0.8)`,
    },
    to: {
      opacity: ratio > 0.2 ? 1 : 0,
      transform: ratio > 0.2 ? `scale(1)` : `scale(0.8)`,
    },
  })

  const formProps = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: ratio > 0.4 ? 1 : 0,
    },
  })

  return (
    <Container id={id} ref={ref}>
      <Wrapper>
        <Row>
          <Column xs={12}>
            <Title style={titleProps} className={"headingMedium"}>
              {title}
            </Title>
          </Column>

          <Column xs={12}>
            <Intro className="bodyNormal" style={introProps}>
              {description}
            </Intro>
          </Column>

          <ContactForm
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={formProps}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input
              type="hidden"
              name="form-name"
              value="contact"
              className="bodyNormal"
            />
            <Wrapper>
              <Row>
                <Column xs={12} align="center" direction="column" sm={6}>
                  <input
                    className="bodyNormal"
                    name="name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </Column>
                <Column xs={12} align="center" direction="column" sm={6}>
                  <input
                    className="bodyNormal"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </Column>
              </Row>
              <Row>
                <Column xs={12} align="center" direction="column">
                  <input
                    className="bodyNormal"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                  <textarea
                    className="bodyNormal"
                    required
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="7"
                  />
                  <div data-netlify-recaptcha="true" />
                  <button type="submit">Send</button>
                </Column>
              </Row>
            </Wrapper>
          </ContactForm>
        </Row>
      </Wrapper>
    </Container>
  )
}

Contact.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Contact
