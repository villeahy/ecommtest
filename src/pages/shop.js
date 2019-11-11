import React from "react"
import { graphql } from "gatsby"

import Item from "../components/item"
import SEO from "../components/seo"

class ShopPage extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe(process.env.STRIPE_PUBLIC_KEY)
  }

  redirectToCheckout = sku => async event => {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `http://localhost:8000/shop/`,
      cancelUrl: `http://localhost:8000/`,
      billingAddressCollection: "required",
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    const items = this.props.data.allStripeSku.edges.map(
      ({
        node: {
          price,
          currency,
          id,
          product: {
            name,
            metadata: { img_alt },
          },
          localFiles,
        },
      }) => ({
        id,
        name,
        price,
        img_alt,
        currency,
        localFiles,
      })
    )
    return (
      <>
        <SEO title="Need money for records shop" />
        {items.map(item => (
          <Item key={item.id} {...item} buy={this.redirectToCheckout} />
        ))}
      </>
    )
  }
}

export default ShopPage

export const query = graphql`
  query ShopPageQuery {
    allStripeSku {
      edges {
        node {
          currency
          price
          id
          product {
            name
            metadata {
              img_alt
            }
          }
          localFiles {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
