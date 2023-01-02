import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react';
import tickerRow from "./tickerRow.js";
import { useState, useEffect } from "react";

const dummyData = [{symbol: "AAPL", poolPrice: 100, oraclePrice: 102},
{symbol: "MSFT", poolPrice: 142, oraclePrice: 141},
{symbol: "TSLA", poolPrice: 104, oraclePrice: 110}];
let walletContents = new Map([
    ["AAPL", 5]
]);

export default function TradeTable() {
    const [tickerData, updateTickerData] = useState(dummyData);

    return (
        <TableContainer>
            <Table variant='striped'>
                <Thead>
                <Tr>
                    <Th>Ticker</Th>
                    <Th>Pool Price</Th>
                    <Th>Oracle Price</Th>
                    <Th isNumeric>Amount in Wallet</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {tickerData.map(ticker => tickerRow(ticker, walletContents))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}