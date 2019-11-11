/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global } from "@emotion/core"

import Navigation from "./navigation"

const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background-color: #eeeeee;
  align-items: flex-start;
  width: 950px;
  padding: 4rem 2rem;
  border-radius: 2rem;
`

const Layout = ({ children, path, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(location)
  const from = location.state ? location.state.from : null

  return (
    <Div>
      <Global
        styles={{
          html: {
            fontSize: "62.5%",
          },
          body: {
            margin: 0,
            padding: 0,
            minHeight: "98vh",
            backgroundColor: "#000000",
            fontSize: "1.6rem",
          },
        }}
      />
      <Navigation
        siteTitle={data.site.siteMetadata.title}
        path={path}
        from={from}
      />
      {children}
    </Div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
