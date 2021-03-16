import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber('115792089237316195423570985008687907853269984665640564039457584007913129639935'), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const contractAddresses = {
  sushi: {
    97: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
    56: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
    // 56: '0xbbB2aaEB8c9dA72bb7faDB42A9c84AACF26974Fd'
  },
  syrup: {
    97: '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    56: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  },
  masterChef: {
    97: '0xE57369D72D25160CB16AD421B3A037D5c818728c',
    56: '0xE57369D72D25160CB16AD421B3A037D5c818728c', //  real cake
    // 56: '0x39447351Fe7939C064CDD9A258F22FC76233E28e'
  },
  sousChef: {
    97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
    56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95', //  real cake
  },
  weth: {
    97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  },
  lottery: {
    97: '0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f',
    56: '0x3C3f2049cc17C136a604bE23cF7E42745edf3b91',
  },
  lotteryNFT: {
    97: '0x8175c10383511b3a1C68f9dB222dc14A19CC950e',
    56: '0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1',
  },
  mulltiCall: {
    56: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
    97: '0x67ADCB4dF3931b0C5Da724058ADC2174a9844412',
  },
}

export const sousChefTeam = [
  {
    sousId: 0,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
    },
    tokenName: 'CAKE',
    projectLink: 'http://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isCommunity: false,
    isFinished: false,
  },
  {
    sousId: 13,
    contractAddress: {
      97: '',
      56: '0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b',
    },
    tokenName: 'bROOBEE',
    projectLink: 'https://roobee.io/',
    harvest: true,
    tokenPerBlock: '12.5',
    sortOrder: 999,
    isCommunity: true,
    isFinished: false,
  },
  {
    sousId: 14,
    contractAddress: {
      97: '',
      56: '0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97',
    },
    tokenName: 'HARD',
    projectLink: 'https://hard.kava.io',
    harvest: true,
    tokenPerBlock: '0.346',
    sortOrder: 999,
    isCommunity: false,
    isFinished: false,
  },
  {
    sousId: 12,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xFF02241a2A1d2a7088A344309400E9fE74772815',
    },
    tokenName: 'STAX',
    projectLink: 'http://stablexswap.com/',
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 999,
    isCommunity: true,
    isFinished: false,
  },
  {
    sousId: 10,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9',
    },
    tokenName: 'NYA',
    projectLink: 'https://nyanswop.org/',
    harvest: true,
    isCommunity: true,
    sortOrder: 999,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 9,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x21A9A53936E812Da06B7623802DEc9A1f94ED23a',
    },
    tokenName: 'CTK',
    projectLink: 'https://www.certik.foundation/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: false,
    isCommunity: false,
  },
  {
    sousId: 11,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDc938BA1967b06d666dA79A7B1E31a8697D1565E',
    },
    tokenName: 'NAR',
    projectLink: 'https://narwhalswap.org/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isCommunity: true,
    isFinished: true,
  },
  {
    sousId: 8,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF',
    },
    tokenName: 'TWT',
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 7,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693',
    },
    tokenName: 'INJ',
    projectLink: 'https://injectiveprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 6,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xF35d63Df93f32e025bce4A1B98dcEC1fe07AD892',
    },
    tokenName: 'CTK',
    projectLink: 'https://www.certik.foundation/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 3,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0x92E8CeB7eAeD69fB6E4d9dA43F605D2610214E68',
    },
    tokenName: 'INJ',
    projectLink: 'https://injectiveprotocol.com/',
    harvest: true,
    tokenPerBlock: '0.25',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 1,
    contractAddress: {
      97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
      56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
    },
    tokenName: 'TWT',
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 4,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xD32B30b151a6aDB2e0Fa573a37510C097DaBD2F3',
    },
    tokenName: 'SXP',
    projectLink: 'https://swipe.io/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 5,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3B9B74f48E89Ebd8b45a53444327013a2308A9BC',
    },
    tokenName: 'CTK',
    projectLink: 'https://www.certik.foundation/',
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: 2,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x73c83bd1646991cBca3e6b83ca905542FE07C57A',
    },
    tokenName: 'ALPHA',
    projectLink: 'https://alphafinance.io/',
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
  {
    sousId: -1,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95',
    },
    tokenName: 'XVS',
    projectLink: 'https://venus.io/',
    sortOrder: 999,
    isCommunity: false,
    isFinished: true,
  },
]

// BUSD-BNB LP
// 0x1b96b92314c44b159149f7e0303511fb2fc4774f
// BAKE-BNB LP
// 0x3da30727ed0626b78c212e81b37b97a8ef8a25bb
// BUSD-BAKE LP
// 0xe2d1b285d83efb935134f644d00fb7c943e84b5b

// 56 MAINNET
export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      97: '0x44ac388cab568433c967c0cb292b9195d7f88df2',
      56: '0x44ac388cab568433c967c0cb292b9195d7f88df2',
    },
    tokenAddresses: {
      97: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
      56: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
    },
    name: 'APESAFE STAKING',
    symbol: 'APEDOGE-APESAFE',
    tokenSymbol: 'APESAFE',
    icon: '',
    multiplier: '2X 🔥',
  },
  {
    pid: 1,
    lpAddresses: {
      97: '0x4fb774fa6d6d4e248187ab8ddb0d30729e3ee5a3',
      56: '0x4fb774fa6d6d4e248187ab8ddb0d30729e3ee5a3',
    },
    tokenAddresses: {
      97: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
      56: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
    },
    name: 'APESAFE STAKING',
    symbol: 'APEDOGE-MOCHI',
    tokenSymbol: 'MOCHI',
    icon: '',
    multiplier: '1X',
  },
  {
    pid: 2,
    lpAddresses: {
      97: '0xdaa6d9a239d1a77af6a369fb0b1b9118ffa45a12',
      56: '0xdaa6d9a239d1a77af6a369fb0b1b9118ffa45a12',
    },
    tokenAddresses: {
      97: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
      56: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
    },
    name: 'APESAFE STAKING',
    symbol: 'APESAFE-MOCHI',
    tokenSymbol: 'MOCHI',
    icon: '',
    multiplier: '1X',
  },
  {
    pid: 3,
    lpAddresses: {
      97: '0xafde7d39272ec478b1c7c63064a3fc2e97e7f993',
      56: '0xafde7d39272ec478b1c7c63064a3fc2e97e7f993',
    },
    tokenAddresses: {
      97: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
      56: '0xfd0d3774545df70cbb843de32a3dfd33e8092ec9',
    },
    name: 'APESAFE STAKING',
    symbol: 'APESAFE-BUSD',
    tokenSymbol: 'APESAFE',
    icon: '',
    multiplier: '1.5x',
  },
  {
    pid: 4,
    lpAddresses: {
      97: '0xbd8afd0848a6e1be9eae3e617024adff5bc47618',
      56: '0xbd8afd0848a6e1be9eae3e617024adff5bc47618',
    },
    tokenAddresses: {
      97: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
      56: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
    },
    name: 'APEDOGE-BNB',
    symbol: 'APEDOGE-WBNB',
    tokenSymbol: 'WBNB',
    icon: '',
    multiplier: '1.5x',
  },
  {
    pid: 5,
    lpAddresses: {
      97: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
      56: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
    },
    tokenAddresses: {
      97: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
      56: '0xFD0D3774545dF70cBB843dE32a3DFd33E8092Ec9',
    },
    name: 'APESAFE',
    symbol: 'APESAFE',
    tokenSymbol: 'APESAFE',
    icon: '',
    multiplier: '0.5x',
  },

  
]

export const forShowPools = [
  // {
  //   pid: 0,
  //   symbol: 'CAKE-BNB',
  //   tokenSymbol: 'CAKE',
  //   multiplier: '30X',
  // },
  // {
  //   pid: 1,
  //   symbol: 'BUSD-BNB',
  //   tokenSymbol: 'BUSD',
  //   multiplier: '8X',
  // },
  // {
  //   pid: 10,
  //   symbol: 'ADA-BNB',
  //   tokenSymbol: 'ADA',
  //   multiplier: '1X',
  // }
]

export const BLOCKS_PER_YEAR = new BigNumber(10512000)

// This is a list of community pools. The token name is used because
// there are 2 lists, one coming from the contract and a static one
// TODO: Use pids if possible
export const COMMUNITY_FARMS = ['NYA', 'STAX', 'NAR', 'bROOBEE']
