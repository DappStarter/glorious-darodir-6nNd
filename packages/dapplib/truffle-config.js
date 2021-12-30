require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain method include kite bottom tourist'; 
let testAccounts = [
"0xbc2eaa25df6f45845decc2cc54409767065b3ed38995ae9d29d1a56d8da4a57a",
"0xfb217add2608e362ef87123dcdd11c780002877a8123aa63a2d58f40e12c6557",
"0x7e0323e17d1af6bdaa313bcdfb46eab22302f3c6a4f1f1a29626787d9fc0eba0",
"0xb6a951720fc81afe419960ce3b41ec79a734f3fb9907ccddb56ca241bdd20641",
"0x531cf26bb62d661773c78e930e985324e6d123090a61e9c90ac7b0bf99ec9026",
"0x19c72030f7d30f1ab27803155dde0239923ea5ecf1929a8ed8cab94091167022",
"0xbe1358f065fe976e3c3b0047636e271442f5e0a726cfd53e78bbb4f2f8c4ec91",
"0x4785bc16e7b4ad5b51f9e66df30321006fd075d0ea8c9e2627ce3517a795aec3",
"0x147c0d5a4886effca1ab88104dfd8c7af0f1aaeb0a419ace3bde13dd9545914b",
"0xd2995ab53408c0e337bb5a9a1059e0d5451390deb85223481c414bfa4d565711"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

