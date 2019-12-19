import React from "react"
import { useSpring, animated as a } from "react-spring"
import styled from "styled-components"

//Utils
import Wrapper from "../../utils/grid/wrapper"
import Row from "../../utils/grid/row"
import Column from "../../utils/grid/column"
import useIntersect from "../../utils/useIntersect"

//Assets
import variables from "../../assets/styles/variables"

//styles:
import { breakpoints } from "../../assets/styles/breakpoints"

const Container = styled.section`
  background: white;
  position: relative;
  z-index: 0;
  color: white;
  background: ${variables.secondary};
  min-height: 90vh;
`

const Title = styled(a.h2)`
  text-align: center;
  width: 100%;
  margin: 100px auto 60px;
  position: relative;
  z-index: 0;
  line-height: 39px;

  @media screen and (min-width: ${breakpoints.large}px) {
    margin: 180px auto 80px;
  }
`

const Intro = styled.p`
  width: fit-content;
  margin: 20px auto;
  width: 85%;
`

const ContactForm = styled.form`
  margin: 10px auto 100px;

  input,
  textarea,
  button {
    padding: 15px 8px;
    margin: 8px 0;
    border: 1px solid royalblue;
    background: white;
  }
  #name {
    margin: 8px 5px 8px 0;
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
  //useIntersect devulve ref y entry. ref es la referencia del elemento del cual queremos controlar su visualización en el viewport
  //entry es el objeto con la información de la posición del elemento
  const [ref, entry] = useIntersect({
    //threshold es la cantidad de elemento visible para que se dispare el evento
    threshold: buildThresholdArray(),
  })

  const ratio = format(entry.intersectionRatio)

  const titleProps = useSpring({
    from: {
      opacity: 0,
      transform: `translate(0px, 100px)`,
    },
    to: {
      opacity: ratio > 0.1 ? 1 : 0,
      transform: ratio > 0.1 ? `translate(0px, 0px)` : `translate(0px, 100px)`,
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
            <Intro>{description}</Intro>
          </Column>

          <ContactForm
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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

export default Contact
