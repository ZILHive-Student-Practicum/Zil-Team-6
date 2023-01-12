const { ethers } = require("@nomiclabs/buidler");
const { Governance } = require("./contracts");

async function main() {
  // get the default provider
  const provider = await ethers.getDefaultProvider("localhost");
  // create an instance of Governance contract
  const myGovernance = await new ethers.ContractFactory(
    Governance,
    provider
  ).deploy();
  console.log("Deployed contract to address: ", myGovernance.address);
  // Wait for the deployment to be mined
  await myGovernance.deployed();
  console.log("Deployment is mined");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
