/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { stake, sousStake, getMasterChefContract, getSousChefContract } from '../sushi/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(
        getMasterChefContract(sushi),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, sushi],
  )

  return { onStake: handleStake }
}

export const useSousStake = (sousId) => {
  const { account } = useWallet()
  const sushi = useSushi()

  const handleStake = useCallback(
    async (amount: string) => {
      if (sousId === 40) {
        const txHash = await stake(
          getMasterChefContract(sushi),
          0,
          amount,
          account,
        )
      }
      else {
        await sousStake(
          getSousChefContract(sushi, sousId),
          amount,
          account,
        )
      }
    },
    [account, sushi],
  )

  return { onStake: handleStake }
}

export default useStake
