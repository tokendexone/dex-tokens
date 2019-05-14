# eos-tokens
submit token information for tokendex

## Contributing

0. Star this repository

1. Create a folder under [/eos|bos|telos](/eos) named with token's account `/eos|bos|telos/${CONTRACT_ACCOUNT}`

2. Then add yor token LOGO and JSON file under the folder. `/eos|bos|telos/${CONTRACT_ACCOUNT}/{TOKEN_UPPERCASE}.png` `/tokens/${CONTRACT_ACCOUNT}/{TOKEN_UPPERCASE}.json`

3. Create PR, and leave your contact (Telegram/WeChat/Email) in comment for further support.

Please refer to [tokendexcoin::TDC](https://github.com/tokendexone/eos-tokens/tree/master/eos/tokendexcoin) for token example.

Feel free to submit tokens if you are the token's owner or not, the community needs your contribution :).

Thanks to [BlockABC](https://github.com/BlockABC/eos-tokens) for initial data.

## Note
1. For better compatibility, please provide PNG or SVG format as possible.
2. `invalid` field is only used to indicate that this token is invalid on chain. If your token is valid, please don't fill in this field.


## Template
Please submit your token's JSON file follow template below. [EOS](./tokens/eosio.token)

```json
{
  "name": "EOS",
  "symbol": "EOS",
  "contract": "eosio.token",
  "issuer": "eosio",
  "precision": 4,
  "logo": "https://github.com/tokendexone/dex-tokens/blob/master/eos/{CONTRACT_ACCOUNT}/{TOKEN_NAME_UPPERCASE}.png",
  "desc": {
    "en": "EOS (Enterprise Operation System) is a blockchain smart contract platform developed by Block.one, which aims to provide bottom blockchain platform services for high-performance distributed applications.",
    "zh": "EOS (Enterprise Operation System) 是一个区块链智能合约平台，由Block.one 开发。它致力于为高性能分布式应用提供区块链底层服务。",
    "ko": "EOS (Enterprise Operation System) 는 블록 스마트 플랫폼으로 블 락 원 (Block.one)이 개발 했다.고성능 분산 식 응용을 위해 지역 체인 하위 서비스를 제공 합니다."
  },
  "website": "https://eos.io",
  "whitepaper": "https://github.com/EOSIO/Documentation/blob/master/TechnicalWhitePaper.md",
  "links": {
    "github": "https://github.com/{your-token}",
    "telegram": "https://t.me/joinchat/{your-token}",
    "twitter": "https://twitter.com/{your-token}",
    "steemit": "https://steemit.com/{your-token}",
    "reddit": "https://www.reddit.com/r/{your-token}/",
    "wechat": "{your-token}"
  }
}
```


## EOS Token List
<!-- eos_token_list_start -->
|   Logo    | Symbol      | Account Name |
| ----------- |:------------:|:------------:|
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/betdicetoken/DICE.png" width=30 />  | [DICE](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/betdicetoken/DICE.json) | [betdicetoken](http://tokendex.one/pair/eosdice) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/bgbgbgbgbgbg/BG.png" width=30 />  | [BG](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/bgbgbgbgbgbg/BG.json) | [bgbgbgbgbgbg](http://tokendex.one/pair/eosbg) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/bingobetoken/BINGO.png" width=30 />  | [BINGO](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/bingobetoken/BINGO.json) | [bingobetoken](http://tokendex.one/pair/eosbingo) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/endlesstoken/ET.png" width=30 />  | [ET](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/endlesstoken/ET.json) | [endlesstoken](http://tokendex.one/pair/eoset) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/eosabctokens/EOSABC.png" width=30 />  | [EOSABC](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/eosabctokens/EOSABC.json) | [eosabctokens](http://tokendex.one/pair/eoseosabc) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/eosdactokens/EOSDAC.png" width=30 />  | [EOSDAC](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/eosdactokens/EOSDAC.json) | [eosdactokens](http://tokendex.one/pair/eoseosdac) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/eosiotptoken/TPT.png" width=30 />  | [TPT](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/eosiotptoken/TPT.json) | [eosiotptoken](http://tokendex.one/pair/eostpt) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/epraofficial/EPRA.png" width=30 />  | [EPRA](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/epraofficial/EPRA.json) | [epraofficial](http://tokendex.one/pair/eosepra) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/everipediaiq/IQ.png" width=30 />  | [IQ](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/everipediaiq/IQ.json) | [everipediaiq](http://tokendex.one/pair/eosiq) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/gamebettoken/GBT.png" width=30 />  | [GBT](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/gamebettoken/GBT.json) | [gamebettoken](http://tokendex.one/pair/eosgbt) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/ridlridlcoin/RIDL.png" width=30 />  | [RIDL](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/ridlridlcoin/RIDL.json) | [ridlridlcoin](http://tokendex.one/pair/eosridl) |
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/tokendexcoin/TDC.png" width=30 />  | [TDC](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/eos/tokendexcoin/TDC.json) | [tokendexcoin](http://tokendex.one/pair/eostdc) |
<!-- eos_token_list_end -->

## BOS Token List
<!-- bos_token_list_start -->
|   Logo    | Symbol      | Account Name |
| ----------- |:------------:|:------------:|
|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/bos/gamebettoken/GBT.png" width=30 />  | [GBT](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/bos/gamebettoken/GBT.json) | [gamebettoken](http://tokendex.one/pair/bosgbt) |
<!-- bos_token_list_end -->

## TELOS Token List
<!-- telos_token_list_start -->
|   Logo    | Symbol      | Account Name |
| ----------- |:------------:|:------------:|
<!-- telos_token_list_end -->