import {
    Tr,
    Td
  } from '@chakra-ui/react';

export default function TickerRow(ticker, walletContents)
{
    return (
        <Tr key={ticker.symbol}>
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