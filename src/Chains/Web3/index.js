const Web3Chains = [
  {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
    rpc: ['', ''],
    logo:require("../../Assets/Icons/ETH.png"),

    explorer: 'https://etherscan.io',
  },

  {
    name: 'BNB Chain',
    symbol: 'BNB',
    decimals: 18,
    rpc: ['', ''],
    logo:require("../../Assets/Icons/BNB.png"),

    explorer: 'https://bscscan.com',
  },
  {
    name: 'BNB Testnet',
    symbol: 'BNB',
    decimals: 18,
    rpc: ['', ''],
    logo:require("../../Assets/Icons/BNB.png"),
    explorer: 'https://testnet.bscscan.com',
  },

  {
    name: 'Polygon',
    symbol: 'MATIC',
    decimals: 18,
    logo:require("../../Assets/Icons/MATIC.png"),

    rpc: ['', ''],
    explorer: 'https://polygonscan.com',
  },
]

export default Web3Chains
