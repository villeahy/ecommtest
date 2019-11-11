import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  color: pink;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
