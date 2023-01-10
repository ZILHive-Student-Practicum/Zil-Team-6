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
  useDisclosure,
} from "@chakra-ui/react";
import TickerRow from "./tickerRow.js";
import TradePair from "./tradePair.js";
import { useState, useEffect } from "react";
import { ASSETS, ASSET_REFRESH_PERIOD } from "../constants/constants.js";
import { getLatestPrice } from "../utils/oracle.js";
import { utils } from "ethers";
import moment from "moment";

let wallet = new Map([[ASSETS[0], 5]]);

export default function TradeTable() {
  const [tickerData, setTickerData] = useState(
    ASSETS.map((asset) => {
      return { symbol: asset.symbol, oracleLastUpdated: "-", oraclePrice: "-" };
    })
  );
  const [selectedToken, updateSelectedToken] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectToken = (token) => {
    updateSelectedToken(token);
    onOpen();
  };

  useEffect(() => {
    const updateAllPrices = async () => {
      const updatedAssetArr = [...tickerData];
      await ASSETS.forEach(async (asset) => {
        const roundData = await getLatestPrice(asset.contract);
        console.log("retrieved data for: ", asset.symbol);
        const oracleLastUpdated = moment(
          new Date(Number(roundData[3].toString()) * 1000)
        ).fromNow();
        const oraclePrice = Number(utils.formatUnits(roundData[1], 8));
        console.log(oraclePrice);
        updatedAssetArr.map((e) => {
          if (e.symbol === asset.symbol) {
            e.oracleLastUpdated = oracleLastUpdated;
            e.oraclePrice = oraclePrice;
          }
          return e;
        });
        setTickerData(updatedAssetArr);
      });
      console.log("Updated all prices: ", updatedAssetArr);
    };
    updateAllPrices();
    const interval = setInterval(updateAllPrices, ASSET_REFRESH_PERIOD);

    return () => clearInterval(interval);
  }, []);

  return (
    <TableContainer>
      <Table
        variant="simple"
        style={{
          borderCollapse: "separate",
          borderSpacing: "0 0.25em",
        }}
      >
        <Thead>
          <Tr>
            <Th>Ticker</Th>
            <Th>Oracle Price (USD)</Th>
            <Th>Oracle Last Updated</Th>
            <Th isNumeric>Amount in Wallet</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tickerData &&
            tickerData.map((ticker) => (
              <TickerRow
                key={ticker.symbol}
                symbol={ticker.symbol}
                oraclePrice={ticker.oraclePrice}
                oracleLastUpdated={ticker.oracleLastUpdated}
                walletContents={wallet}
                rowClick={selectToken}
              />
            ))}
        </Tbody>
      </Table>
      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xl">
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
