const fs = require('fs')
const path = require('path')
const glob = require('glob')

const blockchains=["eos","bos","telos"]

blockchains.forEach(blockchain=>{
    for (const filepath of glob.sync(path.join(__dirname, "..", blockchain, "**", "*.json"))) {
        const token = require(filepath)

        // Format in order
        const formatedToken = {
            ...token,
            name: token.name || "",
            symbol: token.symbol || "",
            account: token.account || "",
            precision: token.precision !== undefined ? token.precision : 4,
            issuer: token.issuer || "",
            desc: token.desc || "",
            website: token.website || "",
            whitepaper: token.whitepaper || "",
            links: token.links || {},
        }

        // Save Token
        fs.writeFileSync(filepath, JSON.stringify(formatedToken, null, 4), 'utf-8')
    }
})
