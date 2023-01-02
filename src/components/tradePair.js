import React from "react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { 
    Box,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    NumberInput,
    NumberInputField,
    InputGroup,
    InputLeftElement,
    Stack,
    Tabs, 
    TabList,
    TabPanels, 
    Tab, 
    TabPanel } from "@chakra-ui/react";

function DownArrow() {
    return <Center>
        <ArrowDownIcon boxSize={10} />
    </Center>;
};

function AmountInput() {
    return <NumberInput min={0} size="lg" flex="1" >
        <NumberInputField placeholder="0" textAlign="right"/>
    </NumberInput>
}

function Panel({action, selectedTicker}) {
    return (<TabPanel>
        <Stack spacing={3}>
            <FormControl>
                <FormLabel>{action === "buy" ? "PAY" : "SELL"}</FormLabel>
                <InputGroup size="lg">
                    <InputLeftElement 
                        children={action === "buy" ? "XSGD" : selectedTicker}
                        pointerEvents="none"
                        paddingLeft="5" />
                    <AmountInput />
                </InputGroup>
            </FormControl>
            <DownArrow />
            <FormControl>
                <FormLabel>{action === "buy" ? "TO BUY" : "TO GET"}</FormLabel>
                <InputGroup size="lg">
                    <InputLeftElement 
                        children={action === "buy" ? selectedTicker : "XSGD"}
                        pointerEvents="none"
                        paddingLeft="5" />
                    <AmountInput />
                </InputGroup>
            </FormControl>
            <Box h={8} />
            <Button colorScheme="blue">
                Submit
            </Button>
        </Stack>
    </TabPanel>);
} 

export default function TradePair({selectedTicker}) {
    return (
        <Tabs isLazy isFitted variant="solid-rounded" defaultIndex={0}>
            <TabList mb="1em">
                <Tab>Buy</Tab>
                <Tab>Sell</Tab>
            </TabList>
            <TabPanels>
                <Panel action="buy" selectedTicker={selectedTicker} />
                <Panel action="sell" selectedTicker={selectedTicker} />
          </TabPanels>
        </Tabs>

    );
};