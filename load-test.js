import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://production-2.bravenewcoin.com');
  http.get('https://production-2.bravenewcoin.com/insights/latest');
  assets.forEach(a => {
    const url = 'https://production-2.bravenewcoin.com/data-and-charts/assets/' + a.slugName;
    http.get(url);
  })
  sleep(5);
}

const assets = [
  {
    "slugName": "bitcoin"
  },
  {
    "slugName": "ethereum"
  },
  {
    "slugName": "tether-usdt"
  },
  {
    "slugName": "bnb-chain-native-token"
  },
  {
    "slugName": "usd-coin-centre"
  },
  {
    "slugName": "binance-usd"
  },
  {
    "slugName": "xrp"
  },
  {
    "slugName": "enegra"
  },
  {
    "slugName": "dogecoin"
  },
  {
    "slugName": "cardano"
  },
  {
    "slugName": "polygon"
  },
  {
    "slugName": "lido-staked-ether"
  },
  {
    "slugName": "litecoin"
  },
  {
    "slugName": "dai"
  },
  {
    "slugName": "shiba-inu"
  },
  {
    "slugName": "okb"
  },
  {
    "slugName": "tronix"
  },
  {
    "slugName": "solana"
  },
  {
    "slugName": "weth"
  },
  {
    "slugName": "youcash"
  },
  {
    "slugName": "leo-token"
  },
  {
    "slugName": "chainlink"
  },
  {
    "slugName": "avalanche"
  },
  {
    "slugName": "hex"
  },
  {
    "slugName": "wrapped-bitcoin"
  },
  {
    "slugName": "cosmos"
  },
  {
    "slugName": "ton-crystal"
  },
  {
    "slugName": "magic-internet-money"
  },
  {
    "slugName": "ethereum-classic"
  },
  {
    "slugName": "uniswap-governance-token"
  },
  {
    "slugName": "monero"
  },
  {
    "slugName": "polkadot"
  },
  {
    "slugName": "stellar"
  },
  {
    "slugName": "bitcoin-cash"
  },
  {
    "slugName": "toncoin"
  },
  {
    "slugName": "frax-finance"
  },
  {
    "slugName": "algorand"
  },
  {
    "slugName": "quant"
  },
  {
    "slugName": "filecoin"
  },
  {
    "slugName": "vechain"
  },
  {
    "slugName": "trueusd"
  },
  {
    "slugName": "hedera-hashgraph"
  },
  {
    "slugName": "flow"
  },
  {
    "slugName": "apecoin-dao"
  },
  {
    "slugName": "cryptonex"
  },
  {
    "slugName": "coinbase-wrapped-staked-eth"
  },
  {
    "slugName": "internet-computer"
  },
  {
    "slugName": "terra-classic"
  },
  {
    "slugName": "elrond"
  },
  {
    "slugName": "crypto-com-chain"
  },
  {
    "slugName": "chiliz"
  },
  {
    "slugName": "near"
  },
  {
    "slugName": "eos"
  },
  {
    "slugName": "rubix"
  },
  {
    "slugName": "safemoon"
  },
  {
    "slugName": "theta-token"
  },
  {
    "slugName": "huobi-token"
  },
  {
    "slugName": "tezos"
  },
  {
    "slugName": "the-sandbox"
  },
  {
    "slugName": "aave"
  },
  {
    "slugName": "trust-wallet-token"
  },
  {
    "slugName": "wrapped-bnb"
  },
  {
    "slugName": "chain"
  },
  {
    "slugName": "bitcoin-sv"
  },
  {
    "slugName": "pax-dollar"
  },
  {
    "slugName": "usdd"
  },
  {
    "slugName": "decentraland"
  },
  {
    "slugName": "zcash"
  },
  {
    "slugName": "huobi-btc"
  },
  {
    "slugName": "bittorrent"
  },
  {
    "slugName": "pancakeswap"
  },
  {
    "slugName": "gemini-dollar"
  },
  {
    "slugName": "aptos"
  },
  {
    "slugName": "maker"
  },
  {
    "slugName": "whitebit-token"
  },
  {
    "slugName": "tokenize-xchange"
  },
  {
    "slugName": "axie-infinity"
  },
  {
    "slugName": "ecash"
  },
  {
    "slugName": "compound-usd-coin"
  },
  {
    "slugName": "iota"
  },
  {
    "slugName": "klaytn"
  },
  {
    "slugName": "fantom"
  },
  {
    "slugName": "kucoin-shares"
  },
  {
    "slugName": "neo"
  },
  {
    "slugName": "osmosis"
  },
  {
    "slugName": "dash"
  },
  {
    "slugName": "tether-gold"
  },
  {
    "slugName": "mina-protocol"
  },
  {
    "slugName": "pax-gold"
  },
  {
    "slugName": "compound-ether"
  },
  {
    "slugName": "binaryx"
  },
  {
    "slugName": "arweave"
  },
  {
    "slugName": "bittorrent-old"
  },
  {
    "slugName": "curve-dao-token"
  },
  {
    "slugName": "nexo"
  },
  {
    "slugName": "thorchain"
  },
  {
    "slugName": "fei-protocol"
  },
  {
    "slugName": "ethereum-name-service"
  },
  {
    "slugName": "synthetix-network-token"
  },
  {
    "slugName": "ethereum-pow"
  },
  {
    "slugName": "radix"
  },
  {
    "slugName": "gmx"
  },
  {
    "slugName": "the-graph"
  },
  {
    "slugName": "stacks"
  },
  {
    "slugName": "basic-attention-token"
  },
  {
    "slugName": "lido-dao"
  },
  {
    "slugName": "helium"
  },
  {
    "slugName": "loopring-eth"
  },
  {
    "slugName": "casper-network"
  },
  {
    "slugName": "1inch"
  },
  {
    "slugName": "counos-x"
  },
  {
    "slugName": "xdc-network"
  },
  {
    "slugName": "okc-token"
  },
  {
    "slugName": "gatechain-token"
  },
  {
    "slugName": "bitdao"
  },
  {
    "slugName": "zilliqa"
  },
  {
    "slugName": "enjin-coin"
  },
  {
    "slugName": "nem"
  },
  {
    "slugName": "decred"
  },
  {
    "slugName": "olympus-v1"
  },
  {
    "slugName": "sonm"
  },
  {
    "slugName": "holo"
  },
  {
    "slugName": "defichain"
  },
  {
    "slugName": "theta-fuel"
  },
  {
    "slugName": "convex-finance"
  },
  {
    "slugName": "bitcoin-gold"
  },
  {
    "slugName": "terra-luna-v2"
  },
  {
    "slugName": "compound-governance-token"
  },
  {
    "slugName": "waves"
  },
  {
    "slugName": "symbol"
  },
  {
    "slugName": "green-metaverse-token"
  },
  {
    "slugName": "tether-eurt"
  },
  {
    "slugName": "ravencoin"
  },
  {
    "slugName": "kusama"
  },
  {
    "slugName": "ecomi"
  },
  {
    "slugName": "balancer"
  },
  {
    "slugName": "yearn-finance"
  },
  {
    "slugName": "huobi-husd"
  },
  {
    "slugName": "kava"
  },
  {
    "slugName": "dydx"
  },
  {
    "slugName": "qtum"
  },
  {
    "slugName": "golem"
  },
  {
    "slugName": "evmos"
  },
  {
    "slugName": "sushiswap"
  },
  {
    "slugName": "iotex"
  },
  {
    "slugName": "celsius"
  },
  {
    "slugName": "swissborg"
  },
  {
    "slugName": "terra-classic-usd"
  },
  {
    "slugName": "polymath"
  },
  {
    "slugName": "rocket-pool-eth"
  },
  {
    "slugName": "tenset"
  },
  {
    "slugName": "kadena"
  },
  {
    "slugName": "gala"
  },
  {
    "slugName": "livepeer"
  },
  {
    "slugName": "optimism"
  },
  {
    "slugName": "beldex"
  },
  {
    "slugName": "harmony"
  },
  {
    "slugName": "chia-network"
  },
  {
    "slugName": "rocket-pool"
  },
  {
    "slugName": "ankr-network"
  },
  {
    "slugName": "aleph-zero"
  },
  {
    "slugName": "energy-web-token"
  },
  {
    "slugName": "baby-doge-coin"
  },
  {
    "slugName": "amp"
  },
  {
    "slugName": "bitkub"
  },
  {
    "slugName": "omg-network"
  },
  {
    "slugName": "abbc-coin"
  },
  {
    "slugName": "just-governance-token"
  },
  {
    "slugName": "telcoin"
  },
  {
    "slugName": "bone-shibaswap"
  },
  {
    "slugName": "fruits"
  },
  {
    "slugName": "dogelon-mars"
  },
  {
    "slugName": "ftx-token"
  },
  {
    "slugName": "moonbeam"
  },
  {
    "slugName": "iostoken"
  },
  {
    "slugName": "gnosis"
  },
  {
    "slugName": "ontology"
  },
  {
    "slugName": "link"
  },
  {
    "slugName": "icon"
  },
  {
    "slugName": "0x"
  },
  {
    "slugName": "flux"
  },
  {
    "slugName": "educare"
  },
  {
    "slugName": "threshold"
  },
  {
    "slugName": "wootrade"
  },
  {
    "slugName": "secret-network"
  },
  {
    "slugName": "audius"
  },
  {
    "slugName": "hive"
  },
  {
    "slugName": "celo"
  },
  {
    "slugName": "render-token"
  },
  {
    "slugName": "gains-farm"
  },
  {
    "slugName": "siacoin"
  },
  {
    "slugName": "kaspa"
  },
  {
    "slugName": "bora"
  },
  {
    "slugName": "frax-share"
  },
  {
    "slugName": "astar"
  },
  {
    "slugName": "wax-token"
  },
  {
    "slugName": "apenft"
  },
  {
    "slugName": "stasis-eurs"
  },
  {
    "slugName": "bitgert"
  },
  {
    "slugName": "horizen"
  },
  {
    "slugName": "gxchain-gxc"
  },
  {
    "slugName": "constitutiondao"
  },
  {
    "slugName": "veritaseum"
  },
  {
    "slugName": "nucypher"
  },
  {
    "slugName": "universal-market-access"
  },
  {
    "slugName": "digibyte"
  },
  {
    "slugName": "voyager-token"
  },
  {
    "slugName": "wemix"
  },
  {
    "slugName": "mixin"
  },
  {
    "slugName": "gains-network"
  },
  {
    "slugName": "skale"
  },
  {
    "slugName": "mobilecoin"
  },
  {
    "slugName": "vvs-finance"
  },
  {
    "slugName": "juno"
  },
  {
    "slugName": "small-love-potion"
  },
  {
    "slugName": "dejitaru-tsuka"
  },
  {
    "slugName": "dao-maker"
  },
  {
    "slugName": "civic"
  },
  {
    "slugName": "nano"
  },
  {
    "slugName": "marinade-stake-sol"
  },
  {
    "slugName": "lisk"
  },
  {
    "slugName": "immutable-x"
  },
  {
    "slugName": "pundix"
  },
  {
    "slugName": "mediblock"
  },
  {
    "slugName": "agoric"
  },
  {
    "slugName": "platoncoin"
  },
  {
    "slugName": "gitcoin"
  },
  {
    "slugName": "ren"
  },
  {
    "slugName": "braintrust"
  },
  {
    "slugName": "xsushi"
  },
  {
    "slugName": "neutrino-usd"
  },
  {
    "slugName": "decentralized-social"
  },
  {
    "slugName": "request-network"
  },
  {
    "slugName": "looksrare"
  },
  {
    "slugName": "volt-inu"
  },
  {
    "slugName": "synapse"
  },
  {
    "slugName": "iexec-rlc"
  },
  {
    "slugName": "dexe"
  },
  {
    "slugName": "winklink"
  },
  {
    "slugName": "floki-inu"
  },
  {
    "slugName": "red-pulse"
  },
  {
    "slugName": "ergo"
  },
  {
    "slugName": "lukso-token"
  },
  {
    "slugName": "celer-network"
  },
  {
    "slugName": "ontology-gas"
  },
  {
    "slugName": "everdome"
  },
  {
    "slugName": "mdex"
  },
  {
    "slugName": "persistence"
  },
  {
    "slugName": "mx-token"
  },
  {
    "slugName": "band-protocol"
  },
  {
    "slugName": "nervos-network"
  },
  {
    "slugName": "bifrost"
  },
  {
    "slugName": "pocket-network"
  },
  {
    "slugName": "kyber-network"
  },
  {
    "slugName": "coti"
  },
  {
    "slugName": "mco"
  },
  {
    "slugName": "status-network"
  },
  {
    "slugName": "syscoin"
  },
  {
    "slugName": "anyswap"
  },
  {
    "slugName": "power-ledger"
  },
  {
    "slugName": "reserve-rights"
  },
  {
    "slugName": "tribe-governance-token"
  },
  {
    "slugName": "avinoc"
  },
  {
    "slugName": "mobox"
  },
  {
    "slugName": "machine-xchange-coin"
  },
  {
    "slugName": "centrifuge"
  },
  {
    "slugName": "vulcan-forged"
  },
  {
    "slugName": "usdx-kava"
  },
  {
    "slugName": "ceek-vr"
  },
  {
    "slugName": "aragon"
  },
  {
    "slugName": "origintrail"
  },
  {
    "slugName": "ardor"
  },
  {
    "slugName": "playdapp"
  },
  {
    "slugName": "steem"
  },
  {
    "slugName": "orbs"
  },
  {
    "slugName": "everipedia"
  },
  {
    "slugName": "chrono-tech"
  },
  {
    "slugName": "prometeus"
  },
  {
    "slugName": "flexacoin"
  },
  {
    "slugName": "biswap"
  },
  {
    "slugName": "keep-network"
  },
  {
    "slugName": "bytecoin"
  },
  {
    "slugName": "storm"
  },
  {
    "slugName": "pundi-x-token"
  },
  {
    "slugName": "multichain"
  },
  {
    "slugName": "ssv-network"
  },
  {
    "slugName": "creditcoin"
  },
  {
    "slugName": "rif-token"
  },
  {
    "slugName": "funtoken"
  },
  {
    "slugName": "stratis"
  },
  {
    "slugName": "dkargo"
  },
  {
    "slugName": "certik"
  },
  {
    "slugName": "oasis-network"
  },
  {
    "slugName": "dent"
  },
  {
    "slugName": "milk"
  },
  {
    "slugName": "ultra"
  },
  {
    "slugName": "spell-token"
  },
  {
    "slugName": "radio-caca"
  },
  {
    "slugName": "numeraire"
  },
  {
    "slugName": "aelf"
  },
  {
    "slugName": "canto"
  },
  {
    "slugName": "inx-limited-token"
  },
  {
    "slugName": "cartesi"
  },
  {
    "slugName": "everscale"
  },
  {
    "slugName": "biconomy"
  },
  {
    "slugName": "storj"
  },
  {
    "slugName": "serum"
  },
  {
    "slugName": "btc-standard-hashrate-token"
  },
  {
    "slugName": "chromia"
  },
  {
    "slugName": "pirate-chain"
  },
  {
    "slugName": "blox"
  },
  {
    "slugName": "bancor-network-token"
  },
  {
    "slugName": "beta-finance"
  },
  {
    "slugName": "euler"
  },
  {
    "slugName": "venus"
  },
  {
    "slugName": "reef-finance"
  },
  {
    "slugName": "constellation"
  },
  {
    "slugName": "rakon"
  },
  {
    "slugName": "kujira"
  },
  {
    "slugName": "nash-exchange"
  },
  {
    "slugName": "renbtc"
  },
  {
    "slugName": "quarkchain"
  },
  {
    "slugName": "mask-network"
  },
  {
    "slugName": "hifi"
  },
  {
    "slugName": "uquid-coin"
  },
  {
    "slugName": "insure-defi"
  },
  {
    "slugName": "maple"
  },
  {
    "slugName": "mass-vehicle-ledger"
  },
  {
    "slugName": "vechain-energy"
  },
  {
    "slugName": "rsk"
  },
  {
    "slugName": "xsgd"
  },
  {
    "slugName": "stargate-finance"
  },
  {
    "slugName": "metis-andromeda"
  },
  {
    "slugName": "nkn"
  },
  {
    "slugName": "project-galaxy"
  },
  {
    "slugName": "magic"
  },
  {
    "slugName": "xyo-network"
  },
  {
    "slugName": "orbit-chain"
  },
  {
    "slugName": "joe"
  },
  {
    "slugName": "battle-world"
  },
  {
    "slugName": "concordium"
  },
  {
    "slugName": "dodo"
  },
  {
    "slugName": "cvaultfinance"
  },
  {
    "slugName": "stormx"
  },
  {
    "slugName": "origin-protocol"
  },
  {
    "slugName": "stp-network"
  },
  {
    "slugName": "telos"
  },
  {
    "slugName": "alchemy-pay"
  },
  {
    "slugName": "decentral-games-old"
  },
  {
    "slugName": "e-radix"
  },
  {
    "slugName": "ocean-protocol"
  },
  {
    "slugName": "alien-worlds"
  },
  {
    "slugName": "akash-network"
  },
  {
    "slugName": "mancium"
  },
  {
    "slugName": "safepal"
  },
  {
    "slugName": "dero"
  },
  {
    "slugName": "loom-network"
  },
  {
    "slugName": "wrapped-luna"
  },
  {
    "slugName": "rich-quack"
  },
  {
    "slugName": "clash-of-lilliput"
  },
  {
    "slugName": "metal"
  },
  {
    "slugName": "nest-protocol"
  },
  {
    "slugName": "revain"
  },
  {
    "slugName": "onus"
  },
  {
    "slugName": "seedify-fund"
  },
  {
    "slugName": "chainbing"
  },
  {
    "slugName": "sologenic"
  },
  {
    "slugName": "api3"
  },
  {
    "slugName": "ark"
  },
  {
    "slugName": "utrust"
  },
  {
    "slugName": "sun"
  },
  {
    "slugName": "aergo"
  },
  {
    "slugName": "singularitynet"
  },
  {
    "slugName": "moonriver"
  },
  {
    "slugName": "divi"
  },
  {
    "slugName": "terran-coin"
  },
  {
    "slugName": "somesing"
  },
  {
    "slugName": "aurora"
  },
  {
    "slugName": "marblex"
  },
  {
    "slugName": "conflux-network"
  },
  {
    "slugName": "world-mobile-token"
  },
  {
    "slugName": "origin-dollar"
  },
  {
    "slugName": "susd"
  },
  {
    "slugName": "h2o-dao"
  },
  {
    "slugName": "acala"
  },
  {
    "slugName": "cocos-bcx"
  },
  {
    "slugName": "dawn-protocol"
  },
  {
    "slugName": "saitama"
  },
  {
    "slugName": "electroneum"
  },
  {
    "slugName": "sweat-economy"
  },
  {
    "slugName": "metadium"
  },
  {
    "slugName": "covalent-cqt"
  },
  {
    "slugName": "whitecoin"
  },
  {
    "slugName": "aavegotchi"
  },
  {
    "slugName": "marlin"
  },
  {
    "slugName": "maidsafecoin"
  },
  {
    "slugName": "verge"
  },
  {
    "slugName": "dfi-money"
  },
  {
    "slugName": "augur"
  },
  {
    "slugName": "neblio"
  },
  {
    "slugName": "convex-crv"
  },
  {
    "slugName": "rai-finance-sofi"
  },
  {
    "slugName": "coin98"
  },
  {
    "slugName": "strike"
  },
  {
    "slugName": "krpton-dao"
  },
  {
    "slugName": "kilt-protocol"
  },
  {
    "slugName": "my-neighbor-alice"
  },
  {
    "slugName": "dusk-network"
  },
  {
    "slugName": "dogechain"
  },
  {
    "slugName": "kishu-inu"
  },
  {
    "slugName": "bloktopia"
  },
  {
    "slugName": "wanchain"
  },
  {
    "slugName": "superfarm"
  },
  {
    "slugName": "alpaca-finance"
  },
  {
    "slugName": "mineplex"
  },
  {
    "slugName": "thunder-token"
  },
  {
    "slugName": "polkastarter"
  },
  {
    "slugName": "xmom"
  },
  {
    "slugName": "bakeryswap"
  },
  {
    "slugName": "truefi"
  },
  {
    "slugName": "rally"
  },
  {
    "slugName": "radicle"
  },
  {
    "slugName": "humanscape"
  },
  {
    "slugName": "arpa-chain"
  },
  {
    "slugName": "kunci-coin"
  },
  {
    "slugName": "swipe"
  },
  {
    "slugName": "hyperion"
  },
  {
    "slugName": "lazio-fan-token"
  },
  {
    "slugName": "star-atlas-dao"
  },
  {
    "slugName": "keep3rv1"
  },
  {
    "slugName": "gamefi"
  },
  {
    "slugName": "yooshi"
  },
  {
    "slugName": "cargox"
  },
  {
    "slugName": "doge-killer"
  },
  {
    "slugName": "idex"
  },
  {
    "slugName": "propy"
  },
  {
    "slugName": "ageur"
  },
  {
    "slugName": "lcx"
  },
  {
    "slugName": "axel"
  },
  {
    "slugName": "automata"
  },
  {
    "slugName": "raydium"
  },
  {
    "slugName": "ampleforth"
  },
  {
    "slugName": "benchmark-protocol"
  },
  {
    "slugName": "forta"
  },
  {
    "slugName": "lto-network"
  },
  {
    "slugName": "ufo-gaming"
  },
  {
    "slugName": "travala"
  },
  {
    "slugName": "platon"
  },
  {
    "slugName": "klever"
  },
  {
    "slugName": "wrapped-nxm"
  },
  {
    "slugName": "ampleforth-governance-token"
  },
  {
    "slugName": "ramp"
  },
  {
    "slugName": "ethernity-chain"
  },
  {
    "slugName": "tomochain"
  },
  {
    "slugName": "monacoin"
  },
  {
    "slugName": "groestlcoin"
  },
  {
    "slugName": "aave-old"
  },
  {
    "slugName": "defi-kingdoms"
  },
  {
    "slugName": "holoride"
  },
  {
    "slugName": "enzyme-finance"
  },
  {
    "slugName": "deapcoin"
  },
  {
    "slugName": "alchemix"
  },
  {
    "slugName": "hunt"
  },
  {
    "slugName": "aeternity"
  },
  {
    "slugName": "cobak-token"
  },
  {
    "slugName": "clover-finance"
  },
  {
    "slugName": "swarm-bzz"
  },
  {
    "slugName": "xcad-netwrok"
  },
  {
    "slugName": "mines-of-dalarnia"
  },
  {
    "slugName": "verasity"
  },
  {
    "slugName": "beefy-finance"
  },
  {
    "slugName": "phala-network"
  },
  {
    "slugName": "gensokishi-metaverse"
  },
  {
    "slugName": "hive-dollar"
  },
  {
    "slugName": "komodo"
  },
  {
    "slugName": "paris-saint-germain-fan-token"
  },
  {
    "slugName": "unifi-protocol-dao"
  },
  {
    "slugName": "bitshares"
  },
  {
    "slugName": "qredo"
  },
  {
    "slugName": "aioz-network"
  },
  {
    "slugName": "astrafer"
  },
  {
    "slugName": "benqi"
  },
  {
    "slugName": "tellor-tributes"
  },
  {
    "slugName": "starlink"
  },
  {
    "slugName": "bankera"
  },
  {
    "slugName": "bit2me"
  },
  {
    "slugName": "tokenpocket"
  },
  {
    "slugName": "carry"
  },
  {
    "slugName": "proton"
  },
  {
    "slugName": "euro-coin"
  },
  {
    "slugName": "celo-euro"
  },
  {
    "slugName": "kardiachain"
  },
  {
    "slugName": "visor"
  },
  {
    "slugName": "saito"
  },
  {
    "slugName": "fc-porto"
  },
  {
    "slugName": "santos-fc-fan-token"
  },
  {
    "slugName": "mossland"
  },
  {
    "slugName": "streamcoin"
  },
  {
    "slugName": "illuvium"
  },
  {
    "slugName": "leverfi"
  },
  {
    "slugName": "gyen"
  },
  {
    "slugName": "yield-guild-games"
  },
  {
    "slugName": "injective-protocol"
  },
  {
    "slugName": "flamingo-finance"
  },
  {
    "slugName": "choisecom"
  },
  {
    "slugName": "bonfida"
  },
  {
    "slugName": "league-of-kingdoms"
  },
  {
    "slugName": "refereum"
  },
  {
    "slugName": "ichi"
  },
  {
    "slugName": "ultiledger"
  },
  {
    "slugName": "phoenix-global"
  },
  {
    "slugName": "wazirx"
  },
  {
    "slugName": "steem-dollars"
  },
  {
    "slugName": "bitcoin-diamond"
  },
  {
    "slugName": "rei-network"
  },
  {
    "slugName": "1eco"
  },
  {
    "slugName": "a-hunters-dream"
  },
  {
    "slugName": "hxro"
  },
  {
    "slugName": "harvest-finance"
  },
  {
    "slugName": "vite"
  },
  {
    "slugName": "star-atlas"
  },
  {
    "slugName": "verus-coin"
  },
  {
    "slugName": "badger-dao"
  },
  {
    "slugName": "mirror-protocol"
  },
  {
    "slugName": "hydra"
  },
  {
    "slugName": "gas"
  },
  {
    "slugName": "nuls"
  },
  {
    "slugName": "elastos"
  },
  {
    "slugName": "sentinel-protocol"
  },
  {
    "slugName": "yamv2"
  },
  {
    "slugName": "firmachain"
  },
  {
    "slugName": "cult-dao"
  },
  {
    "slugName": "hard-protocol"
  },
  {
    "slugName": "rarible"
  },
  {
    "slugName": "mango"
  },
  {
    "slugName": "alpha-quark-token"
  },
  {
    "slugName": "bluzelle"
  },
  {
    "slugName": "mstable-usd"
  },
  {
    "slugName": "unibright"
  },
  {
    "slugName": "manifold-finance"
  },
  {
    "slugName": "firo"
  },
  {
    "slugName": "toko-token"
  },
  {
    "slugName": "contentos"
  },
  {
    "slugName": "fusion"
  },
  {
    "slugName": "litentry"
  },
  {
    "slugName": "fio-protocol"
  },
  {
    "slugName": "dxdao"
  },
  {
    "slugName": "rmrk"
  },
  {
    "slugName": "math"
  },
  {
    "slugName": "merit-circle"
  },
  {
    "slugName": "bounce-finance"
  },
  {
    "slugName": "streamr-datacoin"
  },
  {
    "slugName": "kin"
  },
  {
    "slugName": "adventure-gold"
  },
  {
    "slugName": "tranchess"
  },
  {
    "slugName": "coinloan"
  },
  {
    "slugName": "irisnet"
  },
  {
    "slugName": "defipulse-index"
  },
  {
    "slugName": "bhpcash"
  },
  {
    "slugName": "metahero"
  },
  {
    "slugName": "burgercities"
  },
  {
    "slugName": "feg-token"
  },
  {
    "slugName": "prosper"
  },
  {
    "slugName": "gmt-token"
  },
  {
    "slugName": "selfkey"
  },
  {
    "slugName": "alpine-f1-team-fan-token"
  },
  {
    "slugName": "bytom"
  },
  {
    "slugName": "onbuff"
  },
  {
    "slugName": "jasmy"
  },
  {
    "slugName": "mantra-dao"
  },
  {
    "slugName": "meverse"
  },
  {
    "slugName": "auto"
  },
  {
    "slugName": "adex"
  },
  {
    "slugName": "boson-protocol"
  },
  {
    "slugName": "namecoin"
  },
  {
    "slugName": "wing-finance"
  },
  {
    "slugName": "cortex"
  },
  {
    "slugName": "mrweb-finance"
  },
  {
    "slugName": "anchor-protocol"
  },
  {
    "slugName": "splintershards"
  },
  {
    "slugName": "zelcash"
  },
  {
    "slugName": "manchester-city-fan-token"
  },
  {
    "slugName": "aion"
  },
  {
    "slugName": "quickswap"
  },
  {
    "slugName": "decentral-games"
  },
  {
    "slugName": "circuits-of-value"
  },
  {
    "slugName": "centrality"
  },
  {
    "slugName": "stafi"
  },
  {
    "slugName": "student-coin"
  },
  {
    "slugName": "superrare"
  },
  {
    "slugName": "mcdex"
  },
  {
    "slugName": "walton"
  },
  {
    "slugName": "trustswap"
  },
  {
    "slugName": "wilder-world"
  },
  {
    "slugName": "pitbull"
  },
  {
    "slugName": "ambrosus"
  },
  {
    "slugName": "ecorealestate"
  },
  {
    "slugName": "pstake-finance"
  },
  {
    "slugName": "latoken"
  },
  {
    "slugName": "phantasma"
  },
  {
    "slugName": "airswap"
  },
  {
    "slugName": "map-protocol"
  },
  {
    "slugName": "fc-barcelona-fan-token"
  },
  {
    "slugName": "jex-token"
  },
  {
    "slugName": "chimpion"
  },
  {
    "slugName": "sero"
  },
  {
    "slugName": "pivx"
  },
  {
    "slugName": "karura"
  },
  {
    "slugName": "apollo"
  },
  {
    "slugName": "measurable-data-token"
  },
  {
    "slugName": "presearch"
  },
  {
    "slugName": "karma-eos"
  },
  {
    "slugName": "shiden-network"
  },
  {
    "slugName": "ooki"
  },
  {
    "slugName": "bitmart-token"
  },
  {
    "slugName": "pluton"
  },
  {
    "slugName": "alpha-finance-lab"
  },
  {
    "slugName": "beam"
  },
  {
    "slugName": "alethea-artificial-liquid-intelligence"
  },
  {
    "slugName": "allianceblock"
  },
  {
    "slugName": "tokenlon"
  },
  {
    "slugName": "fetch-ai"
  },
  {
    "slugName": "ttc-protocol"
  },
  {
    "slugName": "byteball"
  },
  {
    "slugName": "dxchain-token"
  },
  {
    "slugName": "syntropy"
  },
  {
    "slugName": "marinade"
  },
  {
    "slugName": "yield-app"
  },
  {
    "slugName": "viberate"
  },
  {
    "slugName": "callisto-network"
  },
  {
    "slugName": "amo-coin"
  },
  {
    "slugName": "ballswap"
  },
  {
    "slugName": "liquity"
  },
  {
    "slugName": "assemble-protocol"
  },
  {
    "slugName": "stratos"
  },
  {
    "slugName": "parsiq"
  },
  {
    "slugName": "frax-price-index-share"
  },
  {
    "slugName": "juventus-fan-token"
  },
  {
    "slugName": "gifto"
  },
  {
    "slugName": "wirex"
  },
  {
    "slugName": "kleros"
  },
  {
    "slugName": "hathor"
  },
  {
    "slugName": "dock"
  },
  {
    "slugName": "everrise"
  },
  {
    "slugName": "singularitydao"
  },
  {
    "slugName": "rizon"
  },
  {
    "slugName": "zmt"
  },
  {
    "slugName": "nym"
  },
  {
    "slugName": "ribbon-finance"
  },
  {
    "slugName": "derivadao"
  },
  {
    "slugName": "petals"
  },
  {
    "slugName": "dextools"
  },
  {
    "slugName": "media-licensing-token"
  },
  {
    "slugName": "btse-token"
  },
  {
    "slugName": "mithril"
  },
  {
    "slugName": "hopr"
  },
  {
    "slugName": "wrapped-centrifuge"
  },
  {
    "slugName": "district0x"
  },
  {
    "slugName": "kryll"
  },
  {
    "slugName": "xenioscoin"
  },
  {
    "slugName": "clearpool"
  },
  {
    "slugName": "velas"
  },
  {
    "slugName": "dego-finance"
  },
  {
    "slugName": "solend"
  },
  {
    "slugName": "openanx"
  },
  {
    "slugName": "solve"
  },
  {
    "slugName": "just-stablecoin"
  },
  {
    "slugName": "six-network"
  },
  {
    "slugName": "inverse-finance"
  },
  {
    "slugName": "samoyed-coin"
  },
  {
    "slugName": "polyswarm"
  },
  {
    "slugName": "stake-dao"
  },
  {
    "slugName": "dora-factory"
  },
  {
    "slugName": "te-food"
  },
  {
    "slugName": "mixmarvel"
  },
  {
    "slugName": "somnium-space-cubes"
  },
  {
    "slugName": "rss3"
  },
  {
    "slugName": "as-roma-fan-token"
  },
  {
    "slugName": "atletico-madrid"
  },
  {
    "slugName": "dia"
  },
  {
    "slugName": "handy"
  },
  {
    "slugName": "lattice-token"
  },
  {
    "slugName": "neutrino-system-base"
  },
  {
    "slugName": "og-fan-token"
  },
  {
    "slugName": "0chain"
  },
  {
    "slugName": "peercoin"
  },
  {
    "slugName": "oxen"
  },
  {
    "slugName": "ac-milan-fan-token"
  },
  {
    "slugName": "bzx-protocol"
  },
  {
    "slugName": "shiba-predator"
  },
  {
    "slugName": "perlin"
  },
  {
    "slugName": "rai-reflex-index"
  },
  {
    "slugName": "redfox-labs"
  },
  {
    "slugName": "ovr"
  },
  {
    "slugName": "cudos"
  },
  {
    "slugName": "qlc-chain"
  },
  {
    "slugName": "argentine-football-association-fan-token"
  },
  {
    "slugName": "kok"
  },
  {
    "slugName": "zkswap"
  },
  {
    "slugName": "freeway-token"
  },
  {
    "slugName": "arcblock"
  },
  {
    "slugName": "dune"
  },
  {
    "slugName": "terra-virtua-kolect"
  },
  {
    "slugName": "senso"
  },
  {
    "slugName": "vertcoin"
  },
  {
    "slugName": "tael"
  },
  {
    "slugName": "orca"
  },
  {
    "slugName": "handshake"
  },
  {
    "slugName": "particl"
  },
  {
    "slugName": "gelato"
  },
  {
    "slugName": "perpetual-protocol"
  },
  {
    "slugName": "vidt-datalink"
  },
  {
    "slugName": "shping-coin"
  },
  {
    "slugName": "nimiq"
  },
  {
    "slugName": "salus"
  },
  {
    "slugName": "reddcoin"
  },
  {
    "slugName": "titanswap"
  },
  {
    "slugName": "orion-protocol"
  },
  {
    "slugName": "blockv"
  },
  {
    "slugName": "grid"
  },
  {
    "slugName": "quantum-resistant-ledger"
  },
  {
    "slugName": "bitkan"
  },
  {
    "slugName": "energi"
  },
  {
    "slugName": "tcgcoin-2-0"
  },
  {
    "slugName": "quantstamp"
  },
  {
    "slugName": "sylo"
  },
  {
    "slugName": "peakdefi"
  },
  {
    "slugName": "aventus"
  },
  {
    "slugName": "zebec-protocol"
  },
  {
    "slugName": "reserve-stablecoin"
  },
  {
    "slugName": "insight-chain"
  },
  {
    "slugName": "ivy"
  },
  {
    "slugName": "sperax"
  },
  {
    "slugName": "diamond"
  },
  {
    "slugName": "lbry-credits"
  },
  {
    "slugName": "deeper-network"
  },
  {
    "slugName": "cream-finance"
  },
  {
    "slugName": "linkey"
  },
  {
    "slugName": "arsenal-fan-token"
  },
  {
    "slugName": "tornado-cash"
  },
  {
    "slugName": "cryptex-finance"
  },
  {
    "slugName": "hoge-finance"
  },
  {
    "slugName": "gochain"
  },
  {
    "slugName": "stacs-protocol"
  },
  {
    "slugName": "akita-inu"
  },
  {
    "slugName": "magiccraft"
  },
  {
    "slugName": "bitnautic"
  },
  {
    "slugName": "nectar-token"
  },
  {
    "slugName": "waykichain"
  },
  {
    "slugName": "gods-unchained"
  },
  {
    "slugName": "counterparty"
  },
  {
    "slugName": "doge-dash"
  },
  {
    "slugName": "ecc"
  },
  {
    "slugName": "aurory"
  },
  {
    "slugName": "whale"
  },
  {
    "slugName": "wax-economic-activity-token"
  },
  {
    "slugName": "spankchain"
  },
  {
    "slugName": "bosagora"
  },
  {
    "slugName": "muse-dao"
  },
  {
    "slugName": "ino-coin"
  },
  {
    "slugName": "btu-protocol"
  },
  {
    "slugName": "elitium"
  },
  {
    "slugName": "leverj"
  },
  {
    "slugName": "voxies"
  },
  {
    "slugName": "inter-milan-fan-token"
  },
  {
    "slugName": "genesysgo-shadow"
  },
  {
    "slugName": "bepro-network"
  },
  {
    "slugName": "rialto"
  },
  {
    "slugName": "mimblewimblecoin"
  },
  {
    "slugName": "tokemak"
  },
  {
    "slugName": "dforce-token"
  },
  {
    "slugName": "insights-network"
  },
  {
    "slugName": "crypterium"
  },
  {
    "slugName": "vita-inu"
  },
  {
    "slugName": "netvrk"
  },
  {
    "slugName": "king-dag"
  },
  {
    "slugName": "00-token"
  },
  {
    "slugName": "memetic"
  },
  {
    "slugName": "nftx"
  },
  {
    "slugName": "haven-protocol"
  },
  {
    "slugName": "envion"
  },
  {
    "slugName": "huobi-pool-token"
  },
  {
    "slugName": "temco"
  },
  {
    "slugName": "suku"
  },
  {
    "slugName": "dvision-network"
  },
  {
    "slugName": "comdex"
  },
  {
    "slugName": "ethereum-push-notification-service"
  },
  {
    "slugName": "oxygen"
  },
  {
    "slugName": "factom"
  },
  {
    "slugName": "keeperdao"
  },
  {
    "slugName": "shyft-network"
  },
  {
    "slugName": "pangolin"
  },
  {
    "slugName": "pibble"
  },
  {
    "slugName": "quadrant-protocol"
  },
  {
    "slugName": "radium"
  },
  {
    "slugName": "index-cooperative"
  },
  {
    "slugName": "rari-governance-token"
  },
  {
    "slugName": "delta-exchange-token"
  },
  {
    "slugName": "monero-classic"
  },
  {
    "slugName": "darwinia-network-native-token"
  },
  {
    "slugName": "monkeyball"
  },
  {
    "slugName": "dfx-finance"
  },
  {
    "slugName": "digixdao"
  },
  {
    "slugName": "tbtc"
  },
  {
    "slugName": "hegic"
  },
  {
    "slugName": "sentinel-old"
  },
  {
    "slugName": "troy"
  },
  {
    "slugName": "defi-yield-protocol"
  },
  {
    "slugName": "moss-carbon-credit"
  },
  {
    "slugName": "barnbridge"
  },
  {
    "slugName": "grin"
  },
  {
    "slugName": "paragon"
  },
  {
    "slugName": "ignis"
  },
  {
    "slugName": "nunet"
  },
  {
    "slugName": "molecular-future"
  },
  {
    "slugName": "syncfab"
  },
  {
    "slugName": "foam"
  },
  {
    "slugName": "observer"
  },
  {
    "slugName": "media-network"
  },
  {
    "slugName": "dragonchain"
  },
  {
    "slugName": "dgld"
  },
  {
    "slugName": "pnetwork"
  },
  {
    "slugName": "emirex-token"
  },
  {
    "slugName": "babyswap"
  },
  {
    "slugName": "efinity"
  },
  {
    "slugName": "mobius"
  },
  {
    "slugName": "swftcoin"
  },
  {
    "slugName": "santiment-network-token"
  },
  {
    "slugName": "monavale"
  },
  {
    "slugName": "xaya"
  },
  {
    "slugName": "hop-protocol"
  },
  {
    "slugName": "xen-crypto"
  },
  {
    "slugName": "akropolis"
  },
  {
    "slugName": "monetha"
  },
  {
    "slugName": "bf-token"
  },
  {
    "slugName": "tokenomy"
  },
  {
    "slugName": "mysterium"
  },
  {
    "slugName": "new-zealand-dollar-stablecoin"
  },
  {
    "slugName": "jupiter"
  },
  {
    "slugName": "betu"
  },
  {
    "slugName": "edgeless"
  },
  {
    "slugName": "revv"
  },
  {
    "slugName": "chicks-token"
  },
  {
    "slugName": "bella-protocol"
  },
  {
    "slugName": "hypercash"
  },
  {
    "slugName": "buggyra-coin-zero"
  },
  {
    "slugName": "cirus-foundation"
  },
  {
    "slugName": "vidya"
  },
  {
    "slugName": "cajutel"
  },
  {
    "slugName": "derace"
  },
  {
    "slugName": "nexus"
  },
  {
    "slugName": "gari-network"
  },
  {
    "slugName": "sidus"
  },
  {
    "slugName": "gamercoin"
  },
  {
    "slugName": "sentinel"
  },
  {
    "slugName": "meet-one"
  },
  {
    "slugName": "metahash"
  },
  {
    "slugName": "govi"
  },
  {
    "slugName": "goldfinch"
  },
  {
    "slugName": "peculium"
  },
  {
    "slugName": "restart-energy-mwat"
  },
  {
    "slugName": "opendao"
  },
  {
    "slugName": "cache-gold"
  },
  {
    "slugName": "vetri"
  },
  {
    "slugName": "nexum"
  },
  {
    "slugName": "origin-dollar-governance"
  },
  {
    "slugName": "celestial"
  },
  {
    "slugName": "exeedme"
  },
  {
    "slugName": "baasid"
  },
  {
    "slugName": "atari-token"
  },
  {
    "slugName": "dsla-protocol"
  },
  {
    "slugName": "dotmoovs"
  },
  {
    "slugName": "aleph-im"
  },
  {
    "slugName": "blockport"
  },
  {
    "slugName": "smart-valor"
  },
  {
    "slugName": "sharetoken"
  },
  {
    "slugName": "saffron-finance"
  },
  {
    "slugName": "bcdiploma"
  },
  {
    "slugName": "stronghold-token"
  },
  {
    "slugName": "atomic-wallet-coin"
  },
  {
    "slugName": "buzzcoin"
  },
  {
    "slugName": "kuma-inu"
  },
  {
    "slugName": "populous"
  },
  {
    "slugName": "snapcoin"
  },
  {
    "slugName": "uno-re"
  },
  {
    "slugName": "step-finance"
  },
  {
    "slugName": "polydoge"
  },
  {
    "slugName": "fenerbahce-token"
  },
  {
    "slugName": "metaverse-index"
  },
  {
    "slugName": "all-sports"
  },
  {
    "slugName": "nxt"
  },
  {
    "slugName": "zookeeper"
  },
  {
    "slugName": "platypus-finance"
  },
  {
    "slugName": "time-new-bank"
  },
  {
    "slugName": "qash"
  },
  {
    "slugName": "bank-account-based-blockchain"
  },
  {
    "slugName": "rubic"
  },
  {
    "slugName": "lamden"
  },
  {
    "slugName": "raiden-network-token"
  },
  {
    "slugName": "footballcoin"
  },
  {
    "slugName": "knoxstertoken"
  },
  {
    "slugName": "pchain"
  },
  {
    "slugName": "geojam"
  },
  {
    "slugName": "v-systems"
  },
  {
    "slugName": "xdai-stake"
  },
  {
    "slugName": "cardstack"
  },
  {
    "slugName": "polkadex"
  },
  {
    "slugName": "yam"
  },
  {
    "slugName": "multivac"
  },
  {
    "slugName": "diamond-launch"
  },
  {
    "slugName": "chain-guardians"
  },
  {
    "slugName": "navcoin"
  },
  {
    "slugName": "vesper-finance"
  },
  {
    "slugName": "spool-dao-token"
  },
  {
    "slugName": "the-abyss"
  },
  {
    "slugName": "robonomics-network"
  },
  {
    "slugName": "cwv-chain"
  },
  {
    "slugName": "covesting"
  },
  {
    "slugName": "tenx"
  },
  {
    "slugName": "napoleonx"
  },
  {
    "slugName": "defi-land"
  },
  {
    "slugName": "cloudbric"
  },
  {
    "slugName": "bitbay"
  },
  {
    "slugName": "altair"
  },
  {
    "slugName": "bifi"
  },
  {
    "slugName": "videocoin"
  },
  {
    "slugName": "ilcoin"
  },
  {
    "slugName": "fountain"
  },
  {
    "slugName": "1world"
  },
  {
    "slugName": "likecoin"
  },
  {
    "slugName": "suncontract"
  },
  {
    "slugName": "wom-protocol"
  },
  {
    "slugName": "sibcoin"
  },
  {
    "slugName": "aston"
  },
  {
    "slugName": "powerpool"
  },
  {
    "slugName": "ulord"
  },
  {
    "slugName": "b2bx"
  },
  {
    "slugName": "deepspace"
  },
  {
    "slugName": "miamicoin"
  },
  {
    "slugName": "hedgetrade"
  },
  {
    "slugName": "wrapped-ampleforth"
  },
  {
    "slugName": "digx-gold-token"
  },
  {
    "slugName": "guild-of-guardians"
  },
  {
    "slugName": "rchain"
  },
  {
    "slugName": "skycoin"
  },
  {
    "slugName": "modefi"
  },
  {
    "slugName": "niftyx-protocol"
  },
  {
    "slugName": "stakenet"
  },
  {
    "slugName": "apecoin"
  },
  {
    "slugName": "gamecredits"
  },
  {
    "slugName": "kylin-network"
  },
  {
    "slugName": "salt"
  },
  {
    "slugName": "seele"
  },
  {
    "slugName": "primecoin"
  },
  {
    "slugName": "nimiq-exchange-token"
  },
  {
    "slugName": "naga-coin"
  },
  {
    "slugName": "bitcoin-private"
  },
  {
    "slugName": "basilisk"
  },
  {
    "slugName": "monolith"
  },
  {
    "slugName": "maps"
  },
  {
    "slugName": "apis"
  },
  {
    "slugName": "frontier"
  },
  {
    "slugName": "gameswap"
  },
  {
    "slugName": "fractal"
  },
  {
    "slugName": "rotharium"
  },
  {
    "slugName": "next-exchange"
  },
  {
    "slugName": "gridcoin"
  },
  {
    "slugName": "cloakcoin"
  },
  {
    "slugName": "metaverse-entropy"
  },
  {
    "slugName": "poundtoken"
  },
  {
    "slugName": "linda"
  },
  {
    "slugName": "dogs-of-elon"
  },
  {
    "slugName": "tokoin"
  },
  {
    "slugName": "bnt-token-relay"
  },
  {
    "slugName": "ash"
  },
  {
    "slugName": "polychain-monsters"
  },
  {
    "slugName": "kryptomon"
  },
  {
    "slugName": "vector-finance"
  },
  {
    "slugName": "sparkpoint"
  },
  {
    "slugName": "universal-cash"
  },
  {
    "slugName": "dovu"
  },
  {
    "slugName": "sin-city"
  },
  {
    "slugName": "new-bitshares"
  },
  {
    "slugName": "ferrum-network"
  },
  {
    "slugName": "dentacoin"
  },
  {
    "slugName": "popsicle-finance"
  },
  {
    "slugName": "iot-chain"
  },
  {
    "slugName": "litecoin-cash"
  },
  {
    "slugName": "oyster-pearl"
  },
  {
    "slugName": "jarvis-reward-token"
  },
  {
    "slugName": "lambda"
  },
  {
    "slugName": "unobtanium"
  },
  {
    "slugName": "data-exchange-token"
  },
  {
    "slugName": "pickle-finance"
  },
  {
    "slugName": "tokenclub"
  },
  {
    "slugName": "newton"
  },
  {
    "slugName": "opulous"
  },
  {
    "slugName": "vestchain"
  },
  {
    "slugName": "airbloc"
  },
  {
    "slugName": "efforce"
  },
  {
    "slugName": "my-defi-pet"
  },
  {
    "slugName": "spacechain"
  },
  {
    "slugName": "oneledger"
  },
  {
    "slugName": "daex"
  },
  {
    "slugName": "as-monaco-fan-token"
  },
  {
    "slugName": "unikoingold"
  },
  {
    "slugName": "content-value-network"
  },
  {
    "slugName": "morpheus-labs"
  },
  {
    "slugName": "cryptopay"
  },
  {
    "slugName": "wrapped-dgld"
  },
  {
    "slugName": "x-world-games"
  },
  {
    "slugName": "antimatter"
  },
  {
    "slugName": "binamon"
  },
  {
    "slugName": "deepbrain-chain"
  },
  {
    "slugName": "polybius"
  },
  {
    "slugName": "colossuscoinxt"
  },
  {
    "slugName": "nebulas-token"
  },
  {
    "slugName": "polytrade"
  },
  {
    "slugName": "epik-prime"
  },
  {
    "slugName": "einsteinium"
  },
  {
    "slugName": "convergence"
  },
  {
    "slugName": "free-coin"
  },
  {
    "slugName": "0xbitcoin"
  },
  {
    "slugName": "ubiq"
  },
  {
    "slugName": "quantum"
  },
  {
    "slugName": "digg"
  },
  {
    "slugName": "blocknet"
  },
  {
    "slugName": "iqeon"
  },
  {
    "slugName": "sora"
  },
  {
    "slugName": "interlay"
  },
  {
    "slugName": "safemoon-inu"
  },
  {
    "slugName": "swerve-finance"
  },
  {
    "slugName": "gamee"
  },
  {
    "slugName": "birake"
  },
  {
    "slugName": "ripio-credit-network"
  },
  {
    "slugName": "fear-nfts"
  },
  {
    "slugName": "gulden"
  },
  {
    "slugName": "mir-coin"
  },
  {
    "slugName": "smartcredit-token"
  },
  {
    "slugName": "genaro-network"
  },
  {
    "slugName": "clams"
  },
  {
    "slugName": "matrix-ai-network"
  },
  {
    "slugName": "zed-token"
  },
  {
    "slugName": "moeda-loyalty-points"
  },
  {
    "slugName": "saber"
  },
  {
    "slugName": "tower-token"
  },
  {
    "slugName": "ascendex-bitmax-token"
  },
  {
    "slugName": "coinfi"
  },
  {
    "slugName": "tierion"
  },
  {
    "slugName": "veridocglobal"
  },
  {
    "slugName": "crabada"
  },
  {
    "slugName": "kambria"
  },
  {
    "slugName": "usechain-token"
  },
  {
    "slugName": "achain"
  },
  {
    "slugName": "wagerr"
  },
  {
    "slugName": "rubycoin"
  },
  {
    "slugName": "vexanium"
  },
  {
    "slugName": "feathercoin"
  },
  {
    "slugName": "xaurum"
  },
  {
    "slugName": "goldcoin"
  },
  {
    "slugName": "webdollar"
  },
  {
    "slugName": "esbc"
  },
  {
    "slugName": "revomon"
  },
  {
    "slugName": "tap"
  },
  {
    "slugName": "smartmesh"
  },
  {
    "slugName": "bolt"
  },
  {
    "slugName": "ternio"
  },
  {
    "slugName": "integriteenetwork"
  },
  {
    "slugName": "hydro-protocol"
  },
  {
    "slugName": "bitcny"
  },
  {
    "slugName": "cashbet-coin"
  },
  {
    "slugName": "cryptaur"
  },
  {
    "slugName": "cybervein"
  },
  {
    "slugName": "waves-enterprise"
  },
  {
    "slugName": "pawtocol"
  },
  {
    "slugName": "cutcoin-"
  },
  {
    "slugName": "aicoin"
  },
  {
    "slugName": "cryptocarbon"
  },
  {
    "slugName": "binemon"
  },
  {
    "slugName": "platincoin"
  },
  {
    "slugName": "egretia"
  },
  {
    "slugName": "oraichain-token"
  },
  {
    "slugName": "vipstar"
  },
  {
    "slugName": "bitcore"
  },
  {
    "slugName": "cryptoblades"
  },
  {
    "slugName": "gamezone"
  },
  {
    "slugName": "herocoin"
  },
  {
    "slugName": "peony-coin"
  },
  {
    "slugName": "blackcoin"
  },
  {
    "slugName": "bismuth"
  },
  {
    "slugName": "xriba"
  },
  {
    "slugName": "trueflip"
  },
  {
    "slugName": "bifrost-native-coin"
  },
  {
    "slugName": "cindicator"
  },
  {
    "slugName": "effect-ai"
  },
  {
    "slugName": "polkacity"
  },
  {
    "slugName": "x-cash"
  },
  {
    "slugName": "bibox-token"
  },
  {
    "slugName": "opium"
  },
  {
    "slugName": "tolar"
  },
  {
    "slugName": "degen-index"
  },
  {
    "slugName": "millennium-sapphire"
  },
  {
    "slugName": "pillar"
  },
  {
    "slugName": "deeponion"
  },
  {
    "slugName": "starship"
  },
  {
    "slugName": "crypto20"
  },
  {
    "slugName": "cred"
  },
  {
    "slugName": "carvertical"
  },
  {
    "slugName": "viacoin"
  },
  {
    "slugName": "dhedge-dao"
  },
  {
    "slugName": "truechain"
  },
  {
    "slugName": "nftb"
  },
  {
    "slugName": "kintsugi"
  },
  {
    "slugName": "lympo"
  },
  {
    "slugName": "cover-protocol"
  },
  {
    "slugName": "omni"
  },
  {
    "slugName": "amlt-network"
  },
  {
    "slugName": "nix"
  },
  {
    "slugName": "hempcoin"
  },
  {
    "slugName": "sirin-labs-token"
  },
  {
    "slugName": "ether-1"
  },
  {
    "slugName": "bondly"
  },
  {
    "slugName": "kickcoin"
  },
  {
    "slugName": "fairgame"
  },
  {
    "slugName": "internet-node-token"
  },
  {
    "slugName": "vinchain"
  },
  {
    "slugName": "education-ecosystem"
  },
  {
    "slugName": "cybermiles"
  },
  {
    "slugName": "blocktrade"
  },
  {
    "slugName": "raven-protocol"
  },
  {
    "slugName": "alqo"
  },
  {
    "slugName": "conceal"
  },
  {
    "slugName": "condensate"
  },
  {
    "slugName": "lyfe"
  },
  {
    "slugName": "hero"
  },
  {
    "slugName": "smartcash"
  },
  {
    "slugName": "cpchain"
  },
  {
    "slugName": "faraland"
  },
  {
    "slugName": "lendingblock"
  },
  {
    "slugName": "monsta-infinite"
  },
  {
    "slugName": "aeon"
  },
  {
    "slugName": "olympus-labs"
  },
  {
    "slugName": "loopring-neo"
  },
  {
    "slugName": "bata"
  },
  {
    "slugName": "ormeus-coin"
  },
  {
    "slugName": "unslashed-finance"
  },
  {
    "slugName": "patron"
  },
  {
    "slugName": "hedget"
  },
  {
    "slugName": "essentia"
  },
  {
    "slugName": "linka"
  },
  {
    "slugName": "bitcoin-plus"
  },
  {
    "slugName": "garlicoin"
  },
  {
    "slugName": "earthcoin"
  },
  {
    "slugName": "emercoin"
  },
  {
    "slugName": "the-midas-touch-gold"
  },
  {
    "slugName": "shapeshift-fox-token"
  },
  {
    "slugName": "charged-particles"
  },
  {
    "slugName": "auroracoin"
  },
  {
    "slugName": "vidy"
  },
  {
    "slugName": "ixcoin"
  },
  {
    "slugName": "centra"
  },
  {
    "slugName": "pumapay"
  },
  {
    "slugName": "poa-network"
  },
  {
    "slugName": "waves-community-token"
  },
  {
    "slugName": "experience-chain"
  },
  {
    "slugName": "the-rock-token"
  },
  {
    "slugName": "linkeye"
  },
  {
    "slugName": "edge"
  },
  {
    "slugName": "youchain"
  },
  {
    "slugName": "credits"
  },
  {
    "slugName": "chainx"
  },
  {
    "slugName": "yoyow"
  },
  {
    "slugName": "astroport"
  },
  {
    "slugName": "mobilego"
  },
  {
    "slugName": "internxt"
  },
  {
    "slugName": "dynamic"
  },
  {
    "slugName": "humaniq"
  },
  {
    "slugName": "gsenetwork"
  },
  {
    "slugName": "moon-rabbit"
  },
  {
    "slugName": "opacity"
  },
  {
    "slugName": "the-crypto-prophecies"
  },
  {
    "slugName": "high-performance-blockchain"
  },
  {
    "slugName": "x8xtoken"
  },
  {
    "slugName": "wall-street-games"
  },
  {
    "slugName": "medtoken"
  },
  {
    "slugName": "digitalnote"
  },
  {
    "slugName": "honest"
  },
  {
    "slugName": "spectre-ai-dividend-token"
  },
  {
    "slugName": "daps-coin"
  },
  {
    "slugName": "apy-vision"
  },
  {
    "slugName": "aston-villa-fan-token"
  },
  {
    "slugName": "heat"
  },
  {
    "slugName": "tokes"
  },
  {
    "slugName": "bread"
  },
  {
    "slugName": "polker"
  },
  {
    "slugName": "local-coin-swap"
  },
  {
    "slugName": "bitusd"
  },
  {
    "slugName": "bitjob"
  },
  {
    "slugName": "paypie"
  },
  {
    "slugName": "terracoin"
  },
  {
    "slugName": "global-social-chain"
  },
  {
    "slugName": "medacoin"
  },
  {
    "slugName": "ryo-currency"
  },
  {
    "slugName": "chatcoin"
  },
  {
    "slugName": "cannabiscoin"
  },
  {
    "slugName": "docademic"
  },
  {
    "slugName": "hitchain"
  },
  {
    "slugName": "edenchain"
  },
  {
    "slugName": "box-token"
  },
  {
    "slugName": "okcash"
  },
  {
    "slugName": "master-contract-token"
  },
  {
    "slugName": "everex"
  },
  {
    "slugName": "myriadcoin"
  },
  {
    "slugName": "dopecoin"
  },
  {
    "slugName": "wallstreetbets-dapp"
  },
  {
    "slugName": "scrf-info"
  },
  {
    "slugName": "dreamteam"
  },
  {
    "slugName": "thekey"
  },
  {
    "slugName": "naka-bodhi-token"
  },
  {
    "slugName": "aston-martin-cognizant-fan-token"
  },
  {
    "slugName": "stableusd"
  },
  {
    "slugName": "flypme"
  },
  {
    "slugName": "primas-token"
  },
  {
    "slugName": "open-platform"
  },
  {
    "slugName": "alfa-romeo-racing-orlen-fan-token"
  },
  {
    "slugName": "xmax"
  },
  {
    "slugName": "litex"
  },
  {
    "slugName": "pundi-x-nem"
  },
  {
    "slugName": "genesis-vision"
  },
  {
    "slugName": "asch"
  },
  {
    "slugName": "blue-protocol"
  },
  {
    "slugName": "odyssey"
  },
  {
    "slugName": "project-pai"
  },
  {
    "slugName": "puli"
  },
  {
    "slugName": "hush"
  },
  {
    "slugName": "futureswap"
  },
  {
    "slugName": "eurocoinpay"
  },
  {
    "slugName": "couchain"
  },
  {
    "slugName": "vibe"
  },
  {
    "slugName": "moneytoken"
  },
  {
    "slugName": "hiveterminal-token"
  },
  {
    "slugName": "apollon-limassol"
  },
  {
    "slugName": "skrumble-network"
  },
  {
    "slugName": "crust-shadow"
  },
  {
    "slugName": "artbyte"
  },
  {
    "slugName": "veriblock"
  },
  {
    "slugName": "robotina"
  },
  {
    "slugName": "latium"
  },
  {
    "slugName": "startcoin"
  },
  {
    "slugName": "zclassic"
  },
  {
    "slugName": "giga-watt-token"
  },
  {
    "slugName": "breezecoin"
  },
  {
    "slugName": "electrify-asia"
  },
  {
    "slugName": "game"
  },
  {
    "slugName": "octofi"
  },
  {
    "slugName": "base-protocol"
  },
  {
    "slugName": "kcash"
  },
  {
    "slugName": "rublix"
  },
  {
    "slugName": "ruff"
  },
  {
    "slugName": "etherinc"
  },
  {
    "slugName": "siren"
  },
  {
    "slugName": "alliance-fan-token"
  },
  {
    "slugName": "data"
  },
  {
    "slugName": "bitswift"
  },
  {
    "slugName": "adbank"
  },
  {
    "slugName": "crown"
  },
  {
    "slugName": "anrkey-x"
  },
  {
    "slugName": "sp8de"
  },
  {
    "slugName": "merculet"
  },
  {
    "slugName": "dmm-governance-token"
  },
  {
    "slugName": "eboost"
  },
  {
    "slugName": "blue-whale"
  },
  {
    "slugName": "pylon-protocol"
  },
  {
    "slugName": "turtlecoin"
  },
  {
    "slugName": "substratum"
  },
  {
    "slugName": "cnns"
  },
  {
    "slugName": "havy"
  },
  {
    "slugName": "dmarket"
  },
  {
    "slugName": "oneroot-network"
  },
  {
    "slugName": "quark"
  },
  {
    "slugName": "quasarcoin"
  },
  {
    "slugName": "appcoins"
  },
  {
    "slugName": "simple-token"
  },
  {
    "slugName": "dacsee"
  },
  {
    "slugName": "coinlion"
  },
  {
    "slugName": "unlimitedip"
  },
  {
    "slugName": "medishares"
  },
  {
    "slugName": "contentbox"
  },
  {
    "slugName": "easyfi"
  },
  {
    "slugName": "changebank"
  },
  {
    "slugName": "delphy"
  },
  {
    "slugName": "dprating"
  },
  {
    "slugName": "minereum"
  },
  {
    "slugName": "canyacoin"
  },
  {
    "slugName": "euno"
  },
  {
    "slugName": "atlas-protocol"
  },
  {
    "slugName": "ink-protocol"
  },
  {
    "slugName": "alanyaspor-fan-token"
  },
  {
    "slugName": "horuspay"
  },
  {
    "slugName": "orion-money"
  },
  {
    "slugName": "bitball"
  },
  {
    "slugName": "crowns"
  },
  {
    "slugName": "snetwork"
  },
  {
    "slugName": "nucleus-vision"
  },
  {
    "slugName": "caspian"
  },
  {
    "slugName": "zippie"
  },
  {
    "slugName": "indahash"
  },
  {
    "slugName": "vice-industry-token"
  },
  {
    "slugName": "content-neutrality-network"
  },
  {
    "slugName": "legia-warsaw-fan-token"
  },
  {
    "slugName": "eosdac"
  },
  {
    "slugName": "sophiatx"
  },
  {
    "slugName": "leverj-gluon"
  },
  {
    "slugName": "chainium"
  },
  {
    "slugName": "nanjcoin"
  },
  {
    "slugName": "realtract"
  },
  {
    "slugName": "vegawallet"
  },
  {
    "slugName": "noblecoin"
  },
  {
    "slugName": "neurochain-clausius"
  },
  {
    "slugName": "wepower"
  },
  {
    "slugName": "shard-coin"
  },
  {
    "slugName": "tietoken"
  },
  {
    "slugName": "upfiring"
  },
  {
    "slugName": "expanse"
  },
  {
    "slugName": "adamant-messenger"
  },
  {
    "slugName": "cobinhood"
  },
  {
    "slugName": "hycon"
  },
  {
    "slugName": "acoconut"
  },
  {
    "slugName": "veil"
  },
  {
    "slugName": "zebi"
  },
  {
    "slugName": "empty-set-dollar"
  },
  {
    "slugName": "stealth"
  },
  {
    "slugName": "aidcoin"
  },
  {
    "slugName": "lisk-machine-learning"
  },
  {
    "slugName": "dogecash"
  },
  {
    "slugName": "dether"
  },
  {
    "slugName": "evergreencoin"
  },
  {
    "slugName": "blackmoon-crypto"
  },
  {
    "slugName": "qchi"
  },
  {
    "slugName": "wings"
  },
  {
    "slugName": "indorse-token"
  },
  {
    "slugName": "solarcoin"
  },
  {
    "slugName": "blockmason-credit-protocol-token"
  },
  {
    "slugName": "pinkcoin"
  },
  {
    "slugName": "equal"
  },
  {
    "slugName": "arbitrage"
  },
  {
    "slugName": "bean-cash"
  },
  {
    "slugName": "red-community-token"
  },
  {
    "slugName": "davinci-coin"
  },
  {
    "slugName": "swarm-city"
  },
  {
    "slugName": "unetworktoken"
  },
  {
    "slugName": "potcoin"
  },
  {
    "slugName": "defina-finance"
  },
  {
    "slugName": "proton-token"
  },
  {
    "slugName": "warena"
  },
  {
    "slugName": "ink"
  },
  {
    "slugName": "refinable"
  },
  {
    "slugName": "tokenpay"
  },
  {
    "slugName": "swarm-network"
  },
  {
    "slugName": "beacon"
  },
  {
    "slugName": "parkgene"
  },
  {
    "slugName": "remme"
  },
  {
    "slugName": "quantis"
  },
  {
    "slugName": "blitzpredict"
  },
  {
    "slugName": "parachute"
  },
  {
    "slugName": "stox"
  },
  {
    "slugName": "tachyon-protocol"
  },
  {
    "slugName": "graviocoin"
  },
  {
    "slugName": "iridium"
  },
  {
    "slugName": "curecoin"
  },
  {
    "slugName": "bottos"
  },
  {
    "slugName": "rentberry"
  },
  {
    "slugName": "eligmatoken"
  },
  {
    "slugName": "daostack"
  },
  {
    "slugName": "novacoin"
  },
  {
    "slugName": "adtoken"
  },
  {
    "slugName": "ndex"
  },
  {
    "slugName": "armor"
  },
  {
    "slugName": "blockmesh"
  },
  {
    "slugName": "endor-protocol"
  },
  {
    "slugName": "polis"
  },
  {
    "slugName": "etherparty"
  },
  {
    "slugName": "xtrabytes"
  },
  {
    "slugName": "synlev"
  },
  {
    "slugName": "aspo-world"
  },
  {
    "slugName": "flixxo"
  },
  {
    "slugName": "patientory"
  },
  {
    "slugName": "ixledger"
  },
  {
    "slugName": "coinpoker"
  },
  {
    "slugName": "pikciochain"
  },
  {
    "slugName": "cryptoflow"
  },
  {
    "slugName": "odem"
  },
  {
    "slugName": "menlo-one"
  },
  {
    "slugName": "green-satoshi-token"
  },
  {
    "slugName": "aeron"
  },
  {
    "slugName": "hashgard"
  },
  {
    "slugName": "bitgreen"
  },
  {
    "slugName": "nolimitcoin"
  },
  {
    "slugName": "friendz"
  },
  {
    "slugName": "axpire"
  },
  {
    "slugName": "florincoin"
  },
  {
    "slugName": "metronome"
  },
  {
    "slugName": "gotoken"
  },
  {
    "slugName": "the-champcoin"
  },
  {
    "slugName": "fanstime"
  },
  {
    "slugName": "cappasity"
  },
  {
    "slugName": "viper"
  },
  {
    "slugName": "iocoin"
  },
  {
    "slugName": "s4fe"
  },
  {
    "slugName": "pluracoin"
  },
  {
    "slugName": "bethereum"
  },
  {
    "slugName": "cotrader"
  },
  {
    "slugName": "teloscoin"
  },
  {
    "slugName": "ultraingas"
  },
  {
    "slugName": "wetrust"
  },
  {
    "slugName": "banca"
  },
  {
    "slugName": "defire"
  },
  {
    "slugName": "ether-zero"
  },
  {
    "slugName": "zeepin"
  },
  {
    "slugName": "blockpass"
  },
  {
    "slugName": "quinads"
  },
  {
    "slugName": "my-master-war"
  },
  {
    "slugName": "fintrux-network"
  },
  {
    "slugName": "metamorph"
  },
  {
    "slugName": "veriumreserve"
  },
  {
    "slugName": "solaris"
  },
  {
    "slugName": "iht-real-estate-protocol"
  },
  {
    "slugName": "playgame"
  },
  {
    "slugName": "bounty0x"
  },
  {
    "slugName": "lobstex"
  },
  {
    "slugName": "qbao"
  },
  {
    "slugName": "debitum-network"
  },
  {
    "slugName": "gems"
  },
  {
    "slugName": "royale-finance"
  },
  {
    "slugName": "blockcdn"
  },
  {
    "slugName": "mmocoin"
  },
  {
    "slugName": "magi"
  },
  {
    "slugName": "typerium"
  },
  {
    "slugName": "pascalcoin"
  },
  {
    "slugName": "energo"
  },
  {
    "slugName": "powertrade-fuel"
  },
  {
    "slugName": "omnitude"
  },
  {
    "slugName": "zipper"
  },
  {
    "slugName": "bittube"
  },
  {
    "slugName": "model-x-coin"
  },
  {
    "slugName": "actinium"
  },
  {
    "slugName": "swingby"
  },
  {
    "slugName": "valuto"
  },
  {
    "slugName": "everycoin"
  },
  {
    "slugName": "zeusshield"
  },
  {
    "slugName": "legend-of-fantasy-war"
  },
  {
    "slugName": "dragon"
  },
  {
    "slugName": "atlant"
  },
  {
    "slugName": "neumark"
  },
  {
    "slugName": "auctus"
  },
  {
    "slugName": "mstable-governance-toke"
  },
  {
    "slugName": "vodi-x"
  },
  {
    "slugName": "acute-angle-cloud"
  },
  {
    "slugName": "decimated"
  },
  {
    "slugName": "rubies"
  },
  {
    "slugName": "bigbom"
  },
  {
    "slugName": "amoveo"
  },
  {
    "slugName": "anon"
  },
  {
    "slugName": "sharder"
  },
  {
    "slugName": "trinity-network-credit"
  },
  {
    "slugName": "mib-coin"
  },
  {
    "slugName": "alt-estate"
  },
  {
    "slugName": "yee"
  },
  {
    "slugName": "hashcoin"
  },
  {
    "slugName": "internet-of-games"
  },
  {
    "slugName": "monetaryunit"
  },
  {
    "slugName": "trezarcoin"
  },
  {
    "slugName": "plair"
  },
  {
    "slugName": "owndata"
  },
  {
    "slugName": "alpha-coin"
  },
  {
    "slugName": "sentinel-chain"
  },
  {
    "slugName": "howdoo"
  },
  {
    "slugName": "cosmochain"
  },
  {
    "slugName": "enigma"
  },
  {
    "slugName": "atc-coin"
  },
  {
    "slugName": "eroscoin"
  },
  {
    "slugName": "scholarship-coin"
  },
  {
    "slugName": "phore"
  },
  {
    "slugName": "ubex"
  },
  {
    "slugName": "payfair"
  },
  {
    "slugName": "niobium"
  },
  {
    "slugName": "cheese"
  },
  {
    "slugName": "geocoin"
  },
  {
    "slugName": "arionum"
  },
  {
    "slugName": "ion"
  },
  {
    "slugName": "rise"
  },
  {
    "slugName": "ailink-token"
  },
  {
    "slugName": "deltachain"
  },
  {
    "slugName": "blockchain-monster-hunt"
  },
  {
    "slugName": "singulardtv"
  },
  {
    "slugName": "investfeed"
  },
  {
    "slugName": "amon"
  },
  {
    "slugName": "gerowallet"
  },
  {
    "slugName": "zoo-crypto-world"
  },
  {
    "slugName": "otcbtc-token"
  },
  {
    "slugName": "domraider"
  },
  {
    "slugName": "lien"
  },
  {
    "slugName": "shield"
  },
  {
    "slugName": "zilla"
  },
  {
    "slugName": "invacio"
  },
  {
    "slugName": "posw-coin"
  },
  {
    "slugName": "audiocoin"
  },
  {
    "slugName": "sakura-bloom"
  },
  {
    "slugName": "agrello-delta"
  },
  {
    "slugName": "winco"
  },
  {
    "slugName": "bitcoinzero"
  },
  {
    "slugName": "maincoin"
  },
  {
    "slugName": "ac3"
  },
  {
    "slugName": "liquidity-dividends-protocol"
  },
  {
    "slugName": "devery"
  },
  {
    "slugName": "liquidity-network"
  },
  {
    "slugName": "0xcert"
  },
  {
    "slugName": "privcy"
  },
  {
    "slugName": "penta-network-token"
  },
  {
    "slugName": "door"
  },
  {
    "slugName": "bitbtc"
  },
  {
    "slugName": "zuki-moba"
  },
  {
    "slugName": "covalent"
  },
  {
    "slugName": "platinum"
  },
  {
    "slugName": "playkey"
  },
  {
    "slugName": "microbitcoin"
  },
  {
    "slugName": "ethergem"
  },
  {
    "slugName": "vee-finance"
  },
  {
    "slugName": "proxynode"
  },
  {
    "slugName": "italian-lira"
  },
  {
    "slugName": "digitalcoin"
  },
  {
    "slugName": "ionchain"
  },
  {
    "slugName": "mercury"
  },
  {
    "slugName": "goldmint"
  },
  {
    "slugName": "auxilium"
  },
  {
    "slugName": "bitcoincapitalvendortoken"
  },
  {
    "slugName": "midas-protocol"
  },
  {
    "slugName": "givecoin"
  },
  {
    "slugName": "moviebloc"
  },
  {
    "slugName": "experience-points"
  },
  {
    "slugName": "paycent"
  },
  {
    "slugName": "biotron"
  },
  {
    "slugName": "italo"
  },
  {
    "slugName": "poet"
  },
  {
    "slugName": "datarius-credit"
  },
  {
    "slugName": "micromoney"
  },
  {
    "slugName": "mbd-financials"
  },
  {
    "slugName": "aditus"
  },
  {
    "slugName": "energycoin"
  },
  {
    "slugName": "uptoken"
  },
  {
    "slugName": "globaltoken"
  },
  {
    "slugName": "luxcoin"
  },
  {
    "slugName": "exclusivecoin"
  },
  {
    "slugName": "ethereum-dark"
  },
  {
    "slugName": "worldcoin"
  },
  {
    "slugName": "zetacoin"
  },
  {
    "slugName": "hydrogen"
  },
  {
    "slugName": "fivebalance"
  },
  {
    "slugName": "transcodium"
  },
  {
    "slugName": "wavesgo"
  },
  {
    "slugName": "bitrent"
  },
  {
    "slugName": "guppy"
  },
  {
    "slugName": "wrapped-filecoin"
  },
  {
    "slugName": "atbcoin"
  },
  {
    "slugName": "axl-inu"
  },
  {
    "slugName": "pkg-token"
  },
  {
    "slugName": "eunomia"
  },
  {
    "slugName": "insurepal"
  },
  {
    "slugName": "faceter"
  },
  {
    "slugName": "megacoin"
  },
  {
    "slugName": "gobyte"
  },
  {
    "slugName": "fuzex"
  },
  {
    "slugName": "noir"
  },
  {
    "slugName": "promotioncoin"
  },
  {
    "slugName": "vericoin"
  },
  {
    "slugName": "themis"
  },
  {
    "slugName": "skincoin"
  },
  {
    "slugName": "hoqu"
  },
  {
    "slugName": "bitmark"
  },
  {
    "slugName": "spectre-ai-utility-token"
  },
  {
    "slugName": "storiqa"
  },
  {
    "slugName": "zcore"
  },
  {
    "slugName": "iungo"
  },
  {
    "slugName": "wab-network"
  },
  {
    "slugName": "erc20"
  },
  {
    "slugName": "stronghands-masternode"
  },
  {
    "slugName": "korecoin"
  },
  {
    "slugName": "showhand"
  },
  {
    "slugName": "lunyr"
  },
  {
    "slugName": "matryx"
  },
  {
    "slugName": "elysian"
  },
  {
    "slugName": "robet"
  },
  {
    "slugName": "origo"
  },
  {
    "slugName": "digital-developers-fund"
  },
  {
    "slugName": "rate3"
  },
  {
    "slugName": "truedeck"
  },
  {
    "slugName": "scriv-network"
  },
  {
    "slugName": "echolink"
  },
  {
    "slugName": "netkoin"
  },
  {
    "slugName": "crea"
  },
  {
    "slugName": "aigang"
  },
  {
    "slugName": "maxcoin"
  },
  {
    "slugName": "wikitoken"
  },
  {
    "slugName": "more-coin"
  },
  {
    "slugName": "welltrado"
  },
  {
    "slugName": "4new"
  },
  {
    "slugName": "tendies"
  },
  {
    "slugName": "zealium"
  },
  {
    "slugName": "herbalist-token"
  },
  {
    "slugName": "intervalue"
  },
  {
    "slugName": "help-the-homeless-coin"
  },
  {
    "slugName": "fortuna"
  },
  {
    "slugName": "mybit-token"
  },
  {
    "slugName": "bitscreener"
  },
  {
    "slugName": "provoco-token"
  },
  {
    "slugName": "uptrennd"
  },
  {
    "slugName": "hurify"
  },
  {
    "slugName": "bouts-pro"
  },
  {
    "slugName": "digitex-futures"
  },
  {
    "slugName": "aax-token"
  },
  {
    "slugName": "ice-rock-mining"
  },
  {
    "slugName": "safeinsure"
  },
  {
    "slugName": "gonetwork"
  },
  {
    "slugName": "polkacover"
  },
  {
    "slugName": "consentium"
  },
  {
    "slugName": "bloc-money"
  },
  {
    "slugName": "thingsoperatingsystem"
  },
  {
    "slugName": "shivers"
  },
  {
    "slugName": "abitragect"
  },
  {
    "slugName": "block-logic"
  },
  {
    "slugName": "neural-protocol"
  },
  {
    "slugName": "worldcore"
  },
  {
    "slugName": "yocoin"
  },
  {
    "slugName": "stipend"
  },
  {
    "slugName": "akroma"
  },
  {
    "slugName": "nasdacoin"
  },
  {
    "slugName": "zeuscrowdfunding"
  },
  {
    "slugName": "maecenas"
  },
  {
    "slugName": "firelotto"
  },
  {
    "slugName": "truegame"
  },
  {
    "slugName": "rivetz"
  },
  {
    "slugName": "naviaddress"
  },
  {
    "slugName": "arbidex"
  },
  {
    "slugName": "chronologic"
  },
  {
    "slugName": "hbtc-captain-token"
  },
  {
    "slugName": "bitcoin-incognito"
  },
  {
    "slugName": "kalkulus"
  },
  {
    "slugName": "firstcoin"
  },
  {
    "slugName": "mnpcoin"
  },
  {
    "slugName": "sonder"
  },
  {
    "slugName": "bitgold"
  },
  {
    "slugName": "castle"
  },
  {
    "slugName": "absolute"
  },
  {
    "slugName": "heartbout"
  },
  {
    "slugName": "decentralized-crypto-token"
  },
  {
    "slugName": "coffeecoin"
  },
  {
    "slugName": "btc-lite"
  },
  {
    "slugName": "lition"
  },
  {
    "slugName": "zper"
  },
  {
    "slugName": "commercium"
  },
  {
    "slugName": "gcrcoin"
  },
  {
    "slugName": "paws"
  },
  {
    "slugName": "belacoin"
  },
  {
    "slugName": "beetlecoin"
  },
  {
    "slugName": "swisscoin"
  },
  {
    "slugName": "boolberry"
  },
  {
    "slugName": "pyrex--coin"
  },
  {
    "slugName": "decentbet"
  },
  {
    "slugName": "bitcoinote"
  },
  {
    "slugName": "fantasy-gold"
  },
  {
    "slugName": "exmr-fdn"
  },
  {
    "slugName": "incx"
  },
  {
    "slugName": "ai-doctor"
  },
  {
    "slugName": "rupee"
  },
  {
    "slugName": "nyerium"
  },
  {
    "slugName": "startercoin"
  },
  {
    "slugName": "apr-coin"
  },
  {
    "slugName": "blocktix"
  },
  {
    "slugName": "igtoken"
  },
  {
    "slugName": "semux"
  },
  {
    "slugName": "sparkle"
  },
  {
    "slugName": "yolochips"
  },
  {
    "slugName": "witchain"
  },
  {
    "slugName": "tokendesk"
  },
  {
    "slugName": "coronacoin"
  },
  {
    "slugName": "thingschain"
  },
  {
    "slugName": "investdigital"
  },
  {
    "slugName": "genesisx"
  },
  {
    "slugName": "gold-poker-coin"
  },
  {
    "slugName": "rapids"
  },
  {
    "slugName": "spectrum"
  },
  {
    "slugName": "alphacat"
  },
  {
    "slugName": "tourist-token"
  },
  {
    "slugName": "the-currency-analytics"
  },
  {
    "slugName": "cryptrust"
  },
  {
    "slugName": "draftcoin"
  },
  {
    "slugName": "cybermusic"
  },
  {
    "slugName": "suretly"
  },
  {
    "slugName": "kind-ads-token"
  },
  {
    "slugName": "bytecent"
  },
  {
    "slugName": "gohelpfund"
  },
  {
    "slugName": "bunnytoken"
  },
  {
    "slugName": "bezant"
  },
  {
    "slugName": "dnotes"
  },
  {
    "slugName": "zinc"
  },
  {
    "slugName": "datx"
  },
  {
    "slugName": "sovereign-coin"
  },
  {
    "slugName": "zenswap-network-token"
  },
  {
    "slugName": "medibit"
  },
  {
    "slugName": "exosis"
  },
  {
    "slugName": "fox-trading"
  },
  {
    "slugName": "sefi"
  },
  {
    "slugName": "paypex"
  },
  {
    "slugName": "travelnote"
  },
  {
    "slugName": "b3coin"
  },
  {
    "slugName": "xovbank"
  },
  {
    "slugName": "fujinto"
  },
  {
    "slugName": "pluscoin"
  },
  {
    "slugName": "gamestars"
  },
  {
    "slugName": "educoin"
  },
  {
    "slugName": "micromines"
  },
  {
    "slugName": "thorecash"
  },
  {
    "slugName": "icechain"
  },
  {
    "slugName": "xdna"
  },
  {
    "slugName": "decentralized-asset-trading-platform"
  },
  {
    "slugName": "hyperquant"
  },
  {
    "slugName": "e-chat"
  },
  {
    "slugName": "gentarium"
  },
  {
    "slugName": "eterbase"
  },
  {
    "slugName": "social-activity-token"
  },
  {
    "slugName": "impleum"
  },
  {
    "slugName": "waletoken"
  },
  {
    "slugName": "cruisebit"
  },
  {
    "slugName": "futurax"
  },
  {
    "slugName": "cyclean"
  },
  {
    "slugName": "dashgreen"
  },
  {
    "slugName": "new-power-coin"
  },
  {
    "slugName": "joint-ventures"
  },
  {
    "slugName": "scanetchain"
  },
  {
    "slugName": "worldx-coin"
  },
  {
    "slugName": "crystal-token"
  },
  {
    "slugName": "bemil-coin"
  },
  {
    "slugName": "vikky-token"
  },
  {
    "slugName": "roiyal-coin"
  },
  {
    "slugName": "webcoin"
  },
  {
    "slugName": "inmax"
  },
  {
    "slugName": "newton-coin-project"
  },
  {
    "slugName": "opus"
  },
  {
    "slugName": "bulleon"
  },
  {
    "slugName": "abulaba"
  },
  {
    "slugName": "niobio-cash"
  },
  {
    "slugName": "dignity"
  },
  {
    "slugName": "mainstream-for-the-underground"
  },
  {
    "slugName": "gmb"
  },
  {
    "slugName": "thorecoin"
  },
  {
    "slugName": "lightning-bitcoin"
  },
  {
    "slugName": "twinkle"
  },
  {
    "slugName": "wixlar"
  },
  {
    "slugName": "jinbi-token"
  },
  {
    "slugName": "lotto"
  },
  {
    "slugName": "bitcoinfile"
  },
  {
    "slugName": "kingxchain"
  },
  {
    "slugName": "level-up-coin"
  },
  {
    "slugName": "mexican-peso-tether"
  },
  {
    "slugName": "nerve-finance"
  },
  {
    "slugName": "axelar"
  },
  {
    "slugName": "unitedbitcoin"
  },
  {
    "slugName": "kilo-shiba-inu"
  },
  {
    "slugName": "embercoin"
  },
  {
    "slugName": "ellipsis-x"
  },
  {
    "slugName": "engine-chain-coin"
  },
  {
    "slugName": "volt"
  },
  {
    "slugName": "centercoin"
  },
  {
    "slugName": "silent-notary"
  },
  {
    "slugName": "berry"
  },
  {
    "slugName": "atlantis-blue-digital-token"
  },
  {
    "slugName": "idni-agoras"
  },
  {
    "slugName": "blockchain-quotations-index-token"
  },
  {
    "slugName": "bitcoin-god"
  },
  {
    "slugName": "bidao"
  },
  {
    "slugName": "frax-price-index"
  },
  {
    "slugName": "exchange-union"
  },
  {
    "slugName": "blockstream-mining-note"
  },
  {
    "slugName": "safemoon-v2"
  },
  {
    "slugName": "envision"
  },
  {
    "slugName": "super-bitcoin"
  },
  {
    "slugName": "future1coin"
  },
  {
    "slugName": "karatgold-coin"
  },
  {
    "slugName": "blockstamp"
  },
  {
    "slugName": "eosblack"
  },
  {
    "slugName": "lykke"
  },
  {
    "slugName": "zeon"
  },
  {
    "slugName": "intelligent-investment-chain"
  },
  {
    "slugName": "traceability-chain"
  },
  {
    "slugName": "yuan-chain"
  },
  {
    "slugName": "carat"
  },
  {
    "slugName": "aencoin"
  },
  {
    "slugName": "bumo"
  },
  {
    "slugName": "bitcoinx"
  },
  {
    "slugName": "mintcoin"
  },
  {
    "slugName": "firstblood"
  },
  {
    "slugName": "highstreet"
  },
  {
    "slugName": "golos-gold"
  },
  {
    "slugName": "youlive-coin"
  },
  {
    "slugName": "parallel-finance"
  },
  {
    "slugName": "topchain"
  },
  {
    "slugName": "webn-token"
  },
  {
    "slugName": "savenode"
  },
  {
    "slugName": "shinechain"
  },
  {
    "slugName": "iconiq-lab-token"
  },
  {
    "slugName": "decentralized-accessible-content-chain"
  },
  {
    "slugName": "bitcoin-bep2"
  },
  {
    "slugName": "coinlancer"
  },
  {
    "slugName": "mex"
  },
  {
    "slugName": "mytoken"
  },
  {
    "slugName": "beekan"
  },
  {
    "slugName": "hashflow"
  },
  {
    "slugName": "iagon"
  },
  {
    "slugName": "lina"
  },
  {
    "slugName": "velo"
  },
  {
    "slugName": "polymesh"
  },
  {
    "slugName": "oduwa-coin"
  },
  {
    "slugName": "bitup"
  },
  {
    "slugName": "zenith-finance"
  },
  {
    "slugName": "futurocoin"
  },
  {
    "slugName": "nubits"
  },
  {
    "slugName": "orchid"
  },
  {
    "slugName": "agavecoin"
  },
  {
    "slugName": "nodle-network"
  },
  {
    "slugName": "router-protocol"
  },
  {
    "slugName": "truebit"
  },
  {
    "slugName": "nushares"
  },
  {
    "slugName": "planetwatch"
  },
  {
    "slugName": "mobilink-token"
  },
  {
    "slugName": "helpico"
  },
  {
    "slugName": "cyberfm"
  },
  {
    "slugName": "yuki"
  },
  {
    "slugName": "t-os"
  },
  {
    "slugName": "lemochain"
  },
  {
    "slugName": "recovery-right-tokens"
  },
  {
    "slugName": "profile-utility-token"
  },
  {
    "slugName": "nerva"
  },
  {
    "slugName": "drep"
  },
  {
    "slugName": "encrypgen"
  },
  {
    "slugName": "experience-token"
  },
  {
    "slugName": "gazecoin-metaverse-token"
  },
  {
    "slugName": "everus"
  }
];