const fs = require('fs')
const glob = require('glob')
const path = require('path')

const blockchains=["eos","bos","telos"]

blockchains.forEach(blockchain=>{
    const tokenFiles = glob.sync(path.resolve(__dirname, '../'+blockchain+'/**/*.json'))
    const tokens = tokenFiles.reduce((reduced, tokenFile) => {
        reduced.push(require(tokenFile))
        return reduced
    }, [])
    
    let tokensMd = tokens.reduce((reduced, token) => {
        return reduced + `|  <img src="https://raw.githubusercontent.com/tokendexone/dex-tokens/master/${blockchain}/${token.account}/${token.symbol}.png" width=30 />  | [${token.symbol}](https://raw.githubusercontent.com/tokendexone/dex-tokens/master/${blockchain}/${token.account}/${token.symbol}.json) | [${token.account}](http://tokendex.one/pair/${blockchain.toLowerCase()}${token.symbol.toLowerCase()}) |\n`
    }, '|   Logo    | Symbol      | Account Name |\n| ----------- |:------------:|:------------:|\n')

    let start_tag = blockchain + '_token_list_start'
    let end_tag = blockchain + '_token_list_end'

    tokensMd = `<!-- ${start_tag} -->\n${tokensMd}<!-- ${end_tag} -->`
    
    let readme = fs.readFileSync('./README.md', 'utf-8')

    let regex = new RegExp(`<!-- ${start_tag} -->(.|\\s)*?<!-- ${end_tag} -->`,'gi')

    readme = readme.replace(regex, tokensMd)
    console.log(tokensMd)
    fs.writeFileSync('./README.md', readme, 'utf-8')
})