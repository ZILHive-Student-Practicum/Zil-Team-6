const { ContractFactory } = require("zilliqa-js");
const { ERC20 } = require("./contracts");
const { toBech32Address } = require("@zilliqa-js/util");
const { getDefaultProvider } = require("@zilliqa-js/core");

async function main() {
  // get the default provider
  const provider = getDefaultProvider("https://dev-api.zilliqa.com");
  // create an instance of ERC20 contract
  const myToken = await new ContractFactory(ERC20.abi, ERC20.bytecode).deploy({
    provider,
    args: ["My Token", "MTK", 18, 1000000],
  });
  console.log(
    "Deployed contract to address: ",
    toBech32Address(myToken.address)
  );
  // Wait for the deployment to be mined
  await myToken.deploy();
  console.log("Deployment is mined");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
