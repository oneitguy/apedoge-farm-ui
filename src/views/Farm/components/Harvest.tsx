/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import styled from 'styled-components'
import Button from 'components/Button'
import Label from 'components/Label'
import useEarnings from 'hooks/useEarnings'
import useReward from 'hooks/useReward'
import { getBalanceNumber } from 'utils/formatBalance'
import { TranslateString } from 'utils/translateTextHelpers'
import Card from './Card'
import CardImage from './CardImage'
import Value from './Value'

interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)

  return (
    <Card>
      <StyledCardContentInner>
        <StyledCardHeader>
          <CardImage src="/images/tokens/APESAFE.png" alt="apesafe" />
          <Value value={getBalanceNumber(earnings)} fontSize="40px" />
          <Label text={TranslateString(330, 'APESAFE Earned')} />
        </StyledCardHeader>
        <StyledCardActions>
          <Button
            disabled={!earnings.toNumber() || pendingTx}
            text={pendingTx ? 'Collecting APESAFE' : 'Harvest'}
            onClick={async () => {
              setPendingTx(true)
              await onReward()
              setPendingTx(false)
            }}
          />
        </StyledCardActions>
      </StyledCardContentInner>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
