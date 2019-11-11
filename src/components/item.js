import React from "react"
import Img from "gatsby-image"

const Item = ({ id, name, price, currency, localFiles, buy }) => (
  <div>
    <p>{name}</p>
    {localFiles && <Img fluid={localFiles[0].childImageSharp.fluid} />}
    <p>
      Price: {price / 100} {currency}
    </p>
    <button onClick={buy(id)}>Osta</button>
  </div>
)

export default Item
