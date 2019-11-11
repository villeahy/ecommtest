import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { useSpring, animated } from "react-spring"

// import { MyContext } from "./stateProvider"
import Logo from "./svglogo"

const LogoLink = styled(Link)`
  width: 100%;
`

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  font-size: 2rem;
  color: #7a5d49;
`

const Nav = styled.nav`
  margin: 0.5rem 1rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  order: ${props => props.order};
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const LogoContainer = styled(animated.div)`
  display: inline-block;
  background-color: black;
  width: 400px;
  border-radius: 2rem;
`
const getFromSize = from => {
  if (!from) return 0
  if (from === "/") return 500
  return 275
}

const Navigation = ({ siteTitle, path, from }) => {
  // const test = useContext(MyContext)
  const fromSize = getFromSize(from)
  const toSize = path === "/" ? 500 : 275
  const props = useSpring({
    width: toSize,
    from: { width: fromSize },
  })

  const order = path === "/kauppa/" ? 2 : 1

  return (
    <Nav order={order}>
      <LogoContainer style={props}>
        <LogoLink location={path} to="/" state={{ from: path }}>
          <Logo />
        </LogoLink>
      </LogoContainer>
      <Div>
        <StyledLink to={"/kauppa"} state={{ from: path }}>
          Kauppa
        </StyledLink>
        <StyledLink to={"/kauppa"} state={{ from: path }}>
          Info
        </StyledLink>
        <StyledLink to={"/kauppa"} state={{ from: path }}>
          Yhteystiedot
        </StyledLink>
      </Div>
    </Nav>
  )
}

export default Navigation
