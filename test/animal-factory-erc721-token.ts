import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { Contract } from "ethers";
import { AnimalFactoryERC721Token } from '../typechain/AnimalFactoryERC721Token';
import { AnimalFactory } from '../typechain/AnimalFactory';

describe("AnimalFactory", function () {
    let account1: SignerWithAddress;
    let deployer: SignerWithAddress;
    let animalFactory: AnimalFactory;
    let animalFactoryERC721Token: AnimalFactoryERC721Token;

    before(async function () {
        [deployer, account1] = await ethers.getSigners();

        const AnimalFactoryERC721Token = await ethers.getContractFactory("AnimalFactoryERC721Token");
        animalFactoryERC721Token = (await AnimalFactoryERC721Token.deploy('PocketPanda', 'PANDA', deployer.address)) as AnimalFactoryERC721Token;

        await animalFactoryERC721Token.deployed();

        console.log("AnimalFactoryERC721Token address:", animalFactoryERC721Token.address);

        const AnimalFactory = await ethers.getContractFactory("AnimalFactory");
        animalFactory = (await AnimalFactory.deploy(deployer.address, animalFactoryERC721Token.address)) as AnimalFactory;

        await animalFactory.deployed();

        console.log("AnimalFactory address:", animalFactory.address);

        await animalFactoryERC721Token.transferOwnership(animalFactory.address);

    });

    beforeEach(async function () {
        //
    });

    it("Assigns initial balance", async function () {
        const totalSupply = await animalFactoryERC721Token.totalSupply();

        expect(totalSupply).to.equal(BigInt(0));
    });


    it("Mint animals from animal factory", async function () {
        console.log("Deployer balance:", (await deployer.getBalance()).toString());

        const res = await animalFactory.MintAnimalsFromAnimalFactory('xxx', 'yyy', { value: '150000000000000000', from: deployer.address });

        const animalOwner = await animalFactory.getOwnerByAnimalId('1')

        expect(animalOwner).to.equal(deployer.address);
    });
});