const crypto =require('crypto');
const fs = require('fs');

privateKey= fs.readFileSync('./app_private_key.pem'),

sign=crypto.createSign("RSA-SHA256")
let a =`{"a":"123"}`

sign=sign.update(a)
sign=sign.sign(privateKey,'base64')
console.log(sign)
