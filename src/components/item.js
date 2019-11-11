import React from "react"
import Img from "gatsby-image"
import { useSpring, animated } from "react-spring"
import styled from "@emotion/styled"

const Div = styled(animated.div)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 1px solid #7a5d49;
  border-radius: 2rem;
  order: ${props => props.order};
  h4 {
    text-align: center;
    color: #7a5d49;
    font-size: 2rem;
    margin: 1rem 0;
  }
`

const Item = ({ id, name, price, currency, localFiles, buy, order }) => {
  const props = useSpring({ width: 275, from: { width: 100 } })
  return (
    <Div style={props} order={order}>
      <h4>{name}</h4>
      {localFiles && <Img fluid={localFiles[0].childImageSharp.fluid} />}
      <p>
        Price: {price / 100} {currency}
      </p>
      <button onClick={buy(id)}>Osta</button>
    </Div>
  )
}

export default Item
