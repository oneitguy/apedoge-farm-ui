/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/accessible-emoji */
import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import Spacer from '../../../components/Spacer'
import Value from '../../../components/Value'
import SushiIcon from '../../../components/SushiIcon'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useTokenBalance, {
  useTotalSupply,
  useBurnedBalance,
} from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'

import { getSushiAddress } from '../../../sushi/utils'
import { getBalanceNumber } from '../../../utils/formatBalance'
import TranslatedText from '../../../components/TranslatedText/TranslatedText'
import { TranslateString } from '../../../utils/translateTextHelpers'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <StyledSpan
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </StyledSpan>
  )
}

const Balances: React.FC = () => {
  const sushi = useSushi()
  const totalSupply = useTotalSupply()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const burnedBalance = useBurnedBalance(getSushiAddress(sushi))
  const { account }: { account: any; ethereum: any } = useWallet()

  return (
    <>
      <StyledWrapper>
        <Card>
          <CardContent>
            <StyledBalances>
              <SLabel>
                <TranslatedText translationId={294}>
                  Your Balance
                </TranslatedText>
              </SLabel>
              <StyledBalance>
                <SushiIcon />
                <Spacer />
                <div style={{ flex: 1 }}>
                  <Value
                    value={
                      !!account
                        ? getBalanceNumber(sushiBalance)
                        : TranslateString(298, 'Locked')
                    }
                  />
                </div>
              </StyledBalance>
            </StyledBalances>
          </CardContent>

          <Footnote>
            <TranslatedText translationId={300}>Pending harvest</TranslatedText>
            <FootnoteValue>
              <PendingRewards />
            </FootnoteValue>
          </Footnote>
        </Card>
        <Spacer />

        <Card>
          <StyledBalances>
            <CardContent>
              <SLabel>
                <TranslatedText translationId={296}>
                  Total Supply
                </TranslatedText>
              </SLabel>
              <StyledBalance>
                <Value
                  value={
                    totalSupply
                      ? getBalanceNumber(totalSupply) -
                        getBalanceNumber(burnedBalance)
                      : TranslateString(298, 'Locked')
                  }
                />
              </StyledBalance>
            </CardContent>
          </StyledBalances>
          <Footnote>
            <TranslatedText translationId={302}>
              New rewards per block
            </TranslatedText>
            <FootnoteValue>25</FootnoteValue>
          </Footnote>
        </Card>
      </StyledWrapper>

      <RowCard>
        {/* <SLabel2>
          ???? {TranslateString(304, 'Total CAKE burned since launch')}
        </SLabel2>
        <Value
          value={
            !!account
              ? getBalanceNumber(burnedBalance)
              : TranslateString(298, 'Locked')
          }
          fontSize="20px"
        /> */}
      </RowCard>
    </>
  )
}

const RowCard = styled.div`
  width: 100%;
  box-shadow: 0px 2px 8px rgba(171, 133, 115, 0.21);
  border-radius: 20px;
  background: #fff;
  line-height: 60px;
  padding: 0 25px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.cardBg};

  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    line-height: 40px;
    padding: 25px;
    text-align: center;
  }
`

const SLabel = styled.div`
  line-height: 40px;
  color: ${(props) => props.theme.colors.blue[100]};
`

const SLabel2 = styled.div`
  color: #7645d9;
  @media (max-width: 500px) {
    line-height: 20px;
  }
`

const Footnote = styled.div`
  font-size: 14px;
  padding: 0 20px;
  line-height: 50px;
  color: ${(props) => props.theme.colors.blue[100]};
  border-top: solid 1px #7645d938;
  padding: 0 2rem;
`
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
  height: 50px;
  line-height: 50px;
  color: ${(props) => props.theme.colors.blue[100]};
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledBalances = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;

  line-height: 60px;
`

const StyledSpan = styled.span`
  color: #12aab5;
`

export default Balances
