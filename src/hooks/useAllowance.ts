/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { getAllowance } from '../utils/erc20'
import { getSushiContract, getMasterChefContract, getSousChefContract } from '../sushi/utils'
import { getLotteryContract } from '../sushi/lotteryUtils'

const useAllowance = (lpContract: Contract) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      lpContract,
      masterChefContract,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, masterChefContract, lpContract])

  useEffect(() => {
    if (account && masterChefContract && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, masterChefContract, lpContract])

  return allowance
}

export const useSousAllowance = (lpContract: Contract, sousId) => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const sousChefContract = getSousChefContract(sushi, sousId)

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      lpContract,
      sousChefContract,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, sousChefContract, lpContract])

  useEffect(() => {
    if (account && sousChefContract && lpContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, sousChefContract, lpContract])

  return allowance
}


export const useLotteryAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const lotteryContract = getLotteryContract(sushi)
  const cakeContract = getSushiContract(sushi)

  const fetchAllowance = useCallback(async () => {
    const allowance = await getAllowance(
      cakeContract,
      lotteryContract,
      account,
    )
    setAllowance(new BigNumber(allowance))
  }, [account, lotteryContract, cakeContract])

  useEffect(() => {
    if (account && cakeContract && cakeContract) {
      fetchAllowance()
    }
    let refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, cakeContract, cakeContract])

  return allowance
}

export default useAllowance
