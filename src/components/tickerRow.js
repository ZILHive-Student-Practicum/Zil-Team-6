import { useColorModeValue, Tr, Td } from "@chakra-ui/react";

export default function TickerRow({
  symbol,
  oraclePrice,
  oracleLastUpdated,
  walletContents,
  rowClick,
}) {
  return (
    <Tr
      bg={useColorModeValue("gray.100", "gray.700")}
      onClick={() => rowClick(symbol)}
      _hover={{
        bg: useColorModeValue("gray.600", "gray.200"),
        color: useColorModeValue("gray.200", "gray.800"),
      }}
    >
      <Td>{symbol}</Td>
      <Td>{oraclePrice}</Td>
      <Td>{oracleLastUpdated}</Td>
      <Td isNumeric>
        {walletContents.has(symbol) ? walletContents.get(symbol) : 0}
      </Td>
    </Tr>
  );
}
