import {
    useColorModeValue,
    Tr,
    Td
  } from '@chakra-ui/react';

export default function TickerRow({ticker, walletContents, rowClick})
{
    return (
        <Tr 
            bg={useColorModeValue('gray.100', 'gray.700')}
            onClick={() => rowClick(ticker.symbol)}
            _hover={{
                bg: useColorModeValue('gray.600', 'gray.200'),
                color: useColorModeValue('gray.200', 'gray.800')
            }}
            >
            <Td>
                {ticker.symbol}
            </Td>
            <Td>
                {ticker.poolPrice}
            </Td>
            <Td>   
                {ticker.oraclePrice}
            </Td>
            <Td isNumeric>
                {walletContents.has(ticker.symbol) ? walletContents.get(ticker.symbol) : 0}
            </Td>
        </Tr>
    );
}