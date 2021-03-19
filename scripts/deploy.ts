// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat";

async function main(): Promise<void> {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address //0x8fC9809D2344AF25751A9Bd96e0dC1811852221b
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // const AnimalFactoryERC721Token = await hre.ethers.getContractFactory("AnimalFactoryERC721Token");
  // const animalFactoryERC721Token = await AnimalFactoryERC721Token.deploy('PocketPanda', 'PANDA', deployer.address);

  // console.log("AnimalFactoryERC721Token address:", animalFactoryERC721Token.address);

  const AnimalFactory = await hre.ethers.getContractFactory("AnimalFactory");
  const animalFactory = await AnimalFactory.deploy(deployer.address, '0x01148eD604F9DC5c401cE0EAc0EA6EE0Cff7c4B7'); // 0x8fC9809D2344AF25751A9Bd96e0dC1811852221b

  console.log("AnimalFactory address:", animalFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
