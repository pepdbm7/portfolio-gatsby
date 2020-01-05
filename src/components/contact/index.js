import React from "react"
import { useSpring, animated as a } from "react-spring"
import styled from "styled-components"
import PropTypes from "prop-types"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/hooks/useIntersect"

//Assets
import variables from "../../assets/styles/variables"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

const Container = styled.section`
  color: white;
  font-family: ${variables.helvetica};
  background: ${variables.secondary};
  width: 100vw;
`

const Title = styled(a.h2)`
  text-align: center;
  width: 100%;
  margin: 100px auto 60px;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 100px auto 40px;
  }
`

const Intro = styled(a.p)`
  margin: 20px auto;
  width: 85%;
`

const ContactForm = styled(a.form)`
  margin: 60px auto 100px;

  input,
  textarea,
  button {
    padding: 15px 8px;
    margin: 8px 0;
    border: 1px solid royalblue;
    background: white;
    font-family: inherit;
  }
  @media screen and (min-width: ${breakpoints.tablet}px) {
    #name {
      margin: 8px 5px 8px 0;
    }
  }

  button {
    color: royalblue;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 12px 30px;
    border-radius: 30px;
    user-select: none;
    outline: 0;
    width: fit-content;
    margin: 8px auto;

    transition: 0.25s all ease;

    &:hover {
      background: royalblue;
      color: white;
    }
  }
`

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
            <Intro style={introProps}>{description}</Intro>
          </Column>

          <ContactForm
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            style={formProps}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <Wrapper>
              <Row>
                <Column xs={12} align="center" direction="column" sm={6}>
                  <input name="name" id="name" placeholder="Name" required />
                </Column>
                <Column xs={12} align="center" direction="column" sm={6}>
                  <input name="email" id="email" placeholder="Email" />
                </Column>
              </Row>
              <Row>
                <Column xs={12} align="center" direction="column">
                  <input name="subject" id="subject" placeholder="Subject" />
                  <textarea
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
