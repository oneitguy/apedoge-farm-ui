/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { soushHarvest, harvest, getMasterChefContract, getSousChefContract } from '../sushi/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    return txHash
  }, [account, pid, sushi])

  return { onReward: handleReward }
}

export const useSousReward = (sousId) => {
  const { account } = useWallet()
  const sushi = useSushi()
  const sousChefContract = getSousChefContract(sushi, sousId)
  const masterChefContract = getMasterChefContract(sushi)

  const handleReward = useCallback(async () => {
    if(sousId === 40) {
      const txHash = await harvest(masterChefContract, 0, account)
      return txHash
    }
    else {
      const txHash = await soushHarvest(sousChefContract, account)
      return txHash
    }
  }, [account, sousId, sushi])

  return { onReward: handleReward }
}

export default useReward
