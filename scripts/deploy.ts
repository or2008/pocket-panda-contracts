// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat";

async function main(): Promise<void> {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const AnimalFactoryERC721Token = await hre.ethers.getContractFactory("AnimalFactoryERC721Token");
  const animalFactoryERC721Token = await AnimalFactoryERC721Token.deploy('PocketPanda', 'PANDA', deployer.address);

  console.log("AnimalFactoryERC721Token address:", animalFactoryERC721Token.address);

  const AnimalFactory = await hre.ethers.getContractFactory("AnimalFactory");
  const animalFactory = await AnimalFactory.deploy(deployer.address, animalFactoryERC721Token.address);

  console.log("AnimalFactory address:", animalFactory.address);

  await animalFactoryERC721Token.transferOwnership(animalFactory.address);

  // Verify

  console.log('Verifying AnimalFactoryERC721Token and AnimalFactory on etherscan..');

  await hre.run("verify:verify", {
    address: animalFactoryERC721Token.address,
    constructorArguments: ['PocketPanda', 'PANDA', deployer.address]
  })

  await hre.run("verify:verify", {
    address: animalFactory.address,
    constructorArguments: [deployer.address, animalFactoryERC721Token.address]
  })

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
