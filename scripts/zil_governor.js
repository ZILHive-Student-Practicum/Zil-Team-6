const { ContractFactory } = require("zilliqa-js");
const { Governance } = require("./contracts");
const { toBech32Address } = require("@zilliqa-js/util");
const { getDefaultProvider } = require("@zilliqa-js/core");

async function main() {
  // get the default provider
  const provider = getDefaultProvider("https://dev-api.zilliqa.com");
  // create an instance of Governance contract
  const myGovernance = await new ContractFactory(
    Governance.abi,
    Governance.bytecode
  ).deploy({ provider });
  console.log(
    "Deployed contract to address: ",
    toBech32Address(myGovernance.address)
  );
  // Wait for the deployment to be mined
  await myGovernance.deploy();
  console.log("Deployment is mined");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
