import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LogoProps {
  isDark: boolean
}

const Logo: React.FC<LogoProps> = ({ isDark }) => {
  return (
    <StyledLogo to="/">
      <a href="/">
        <img
          src="/images/tokens/APEDOGE.png"
          height="76"
          style={{ marginTop: -4 }}
          alt="ApeSafe Home"
        />
      </a>
      {/* <a href="/">HOME</a> */}
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

export default Logo
