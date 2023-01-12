const { ERC20 } = require("@openzeppelin/contracts");
const { deployments, getDefaultProvider } = require("@nomiclabs/buidler");

async function main() {
  // get the default provider
  const provider = getDefaultProvider("localhost");
  const account = 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266;
  // create an instance of ERC20 contract
  const myToken = await ERC20.new("PRISM Token", "PRISM", 18, "1000000");
  // deploy the contract
  await myToken.deploy({ from: account });
  console.log("Deployed contract to address: ", myToken.address);
  // Wait for the deployment to be mined
  await myToken.deployed();
  console.log("Deployment is mined");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
