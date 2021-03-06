import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { TranslateString } from 'utils/translateTextHelpers'
import Page from 'components/Page'
import FarmCards from './components/FarmCards'

interface FarmsProps {
  removed: boolean
}

const Farms: React.FC<FarmsProps> = ({ removed }) => {
  return (
    <Page>
      <Title>{TranslateString(320, 'FARMS')}</Title>
      <ImageTop src="/images/apesafe-banner-5.png" />
      <StyledLink exact activeClassName="active" to="/staking">
        Staking
      </StyledLink>
      <FarmCards removed={removed} />
      {/* {removed ? (
        <NavLink exact activeClassName="active" to="/farms">
          Active Pools
        </NavLink>
      ) : (
        <NavLink exact activeClassName="active" to="/removed">
          Inactive Pools
        </NavLink>
      )} */}
    </Page>
  )
}

const StyledLink = styled(NavLink)`
  display: none;
  @media (max-width: 400px) {
    display: block;
    background: #50d7dd;
    border-radius: 5px;
    line-height: 40px;
    font-weight: 900;
    padding: 0 20px;
    margin-bottom: 30px;
    color: #fff;
  }
`
const ImageTop = styled.img`
  position: absolute;
  z-index: -3;
  top: 16%;
  width: 100%;
  @media (max-width: 500px) {
    width: 100vw;
  }
`

const Image = styled.img`
  @media (max-width: 500px) {
    width: 100vw;
  }
`

const Title = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 29px;
  width: 50vw;
  text-align: center;
  font-weight: 900;
  margin-top: 30px;
  margin-bottom: 50px;
`

export default Farms
