const sdk = require("@defillama/sdk");
const tvlOnPairs = require("../helper/processPairs.js");

const FACTORY = "0x971A5f6Ef792bA565cdF61C904982419AA77989f";

const bscTvl = async (timestamp, ethBlock, chainBlocks) => {
  const balances = {};

  await tvlOnPairs("bsc", chainBlocks, FACTORY, balances);

  return balances;
};

module.exports = {
  methodology: "TVL could the liquidity on the DEX, pairs are found using the Factory address: '0x971A5f6Ef792bA565cdF61C904982419AA77989f'.",
  bsc: {
    tvl: bscTvl,
  },
};
