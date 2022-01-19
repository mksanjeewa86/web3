require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/kPm3oVdnMskMVYpTv-nQqzVBytZzlQvx",
      accounts: ["5cdcd7e0b2f391b64a2da79a35aa4071e3cccb590a680e6a08f7718b9cb35c2c"]
    }
  }
};
