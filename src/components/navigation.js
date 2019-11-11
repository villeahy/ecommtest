import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import { MyContext } from "./stateProvider"
import Logo from "./svglogo"

const LogoLink = styled(Link)`
  width: ${props => (props.location === "/" ? 500 : 250)}px;
`

const StyledLink = styled(Link)`
  padding: 1rem 2rem;
  margin: 1rem;
`

const Nav = styled.nav`
  border: 1px solid #999999;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Navigation = ({ siteTitle, path }) => {
  const test = useContext(MyContext)

  console.log(test)

  return (
    <Nav>
      <LogoLink location={path} to="/">
        <Logo />
      </LogoLink>
      <Div>
        <StyledLink to={"/shop"}>Kauppa</StyledLink>
        <StyledLink to={"/shop"}>Info</StyledLink>
        <StyledLink to={"/shop"}>Yhteystiedot</StyledLink>
      </Div>
    </Nav>
  )
}

export default Navigation
