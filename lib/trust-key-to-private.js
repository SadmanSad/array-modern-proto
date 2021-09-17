const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/hdkey');
 

let hdwallet= hdkey.fromMasterSeed(bip39.mnemonicToSeedSync(mnemonic));
const path = "m/44'/60'/0'/0/0";
const wallet = hdwallet.derivePath(path).getWallet();
console.log(wallet.getPrivateKey().toString('hex'))