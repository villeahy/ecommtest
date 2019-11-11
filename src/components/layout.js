/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { memo } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Navigation from "./navigation"

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  return (
    <>
      <Div>
        <Navigation siteTitle={data.site.siteMetadata.title} path={path} />
        {children}
      </Div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(Layout)
