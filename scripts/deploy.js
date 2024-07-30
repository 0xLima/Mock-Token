const { ethers } = require("hardhat");

async function main() {
  const initialSupply = ethers.parseUnits("10000000000", 18); // 10,000,000,000 tokens

  // Deploy ZAP
  const ZAP = await ethers.getContractFactory("ZAP");
  const zap = await ZAP.deploy(initialSupply);
  await zap.waitForDeployment();
  console.log("ZAP deployed to:",await zap.getAddress());

  // Deploy BTCB
  const BTCB = await ethers.getContractFactory("BTCB");
  const btcb = await BTCB.deploy(initialSupply);
  await btcb.waitForDeployment();
  console.log("BTCB deployed to:",await btcb.getAddress());

  // Deploy WETH
  const WETH = await ethers.getContractFactory("WETH");
  const weth = await WETH.deploy(initialSupply);
  await weth.waitForDeployment();
  console.log("WETH deployed to:",await weth.getAddress());

  // Deploy BUSD
  const BUSD = await ethers.getContractFactory("BUSD");
  const busd = await BUSD.deploy(initialSupply);
  await busd.waitForDeployment();
  console.log("BUSD deployed to:",await busd.getAddress());

  // Deploy USDT
  const USDT = await ethers.getContractFactory("USDT");
  const usdt = await USDT.deploy(initialSupply);
  await usdt.waitForDeployment();
  console.log("USDT deployed to:",await usdt.getAddress());

  // Deploy USDC
  const USDC = await ethers.getContractFactory("USDC");
  const usdc = await USDC.deploy(initialSupply);
  await usdc.waitForDeployment();
  console.log("USDC deployed to:",await usdc.getAddress());

  // Deploy WBNB
  const WBNB = await ethers.getContractFactory("WBNB");
  const wbnb = await WBNB.deploy(initialSupply);
  await wbnb.waitForDeployment();
  console.log("WBNB deployed to:",await wbnb.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
