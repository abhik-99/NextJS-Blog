import { ethers, run } from "hardhat";

async function main() {
  const TestNFT = await ethers.getContractFactory("NestJsTokens");
  const Greeting = await ethers.getContractFactory("Greeting");

  const nftContract = await TestNFT.deploy();
  await nftContract.deployTransaction.wait(6);
  console.log("NFT contract deployed to", nftContract.address)

  const greetingContract = await Greeting.deploy("Hello Next World!");
  await greetingContract.deployTransaction.wait(6);
  console.log("Greeting Contract deployed to", greetingContract.address);

  await run("verify:verify", {
    address: nftContract.address, 
    constructorArguments: []
  })

  await run("verify:verify", {
    address: greetingContract.address, 
    constructorArguments: ["Hello Next World!"]
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
