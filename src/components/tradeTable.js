import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    DrawerCloseButton,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    useDisclosure
  } from '@chakra-ui/react';
import TickerRow from "./tickerRow.js";
import TradePair from "./tradePair.js";
import { useState, useEffect } from "react";

const dummyData = [{symbol: "AAPL", poolPrice: 100, oraclePrice: 102},
{symbol: "MSFT", poolPrice: 142, oraclePrice: 141},
{symbol: "TSLA", poolPrice: 104, oraclePrice: 110}];
let wallet = new Map([
    ["AAPL", 5]
]);

export default function TradeTable() {
    const [tickerData, updateTickerData] = useState(dummyData);
    const [selectedToken, updateSelectedToken] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const selectToken = (token) => {
        updateSelectedToken(token);
        onOpen();
    }

    return (
        <TableContainer>
            <Table variant='simple' style={{
                borderCollapse: "separate",
                borderSpacing: "0 0.25em"
            }}>
                <Thead>
                <Tr>
                    <Th>Ticker</Th>
                    <Th>Pool Price</Th>
                    <Th>Oracle Price</Th>
                    <Th isNumeric>Amount in Wallet</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {tickerData.map(ticker => 
                        <TickerRow 
                            key={ticker.symbol}
                            ticker={ticker}
                            walletContents={wallet}
                            rowClick={selectToken}
                        />)}
                </Tbody>
            </Table>
            <Drawer 
                isOpen={isOpen} 
                onClose={onClose}
                placement="right"
                size="xl"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>Make Transaction</DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <TradePair selectedTicker={selectedToken} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </TableContainer>
    );
}