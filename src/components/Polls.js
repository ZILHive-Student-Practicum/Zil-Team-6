import React from "react";
import { SimpleGrid, Button, Checkbox, Tooltip, Box, propNames} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { ChevronDownIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import PollCard from "../components/PollCard.js";
import data from "../data/Polldata.js";

const header ={
    fontSize: '15px',
    float: 'left',
    marginTop: '20px',
}

const right ={
    float: 'right',
    marginTop: '20px',
    paddingRight: '20px',
}

const headerBox ={
    marginTop: '20px',
    marginBottom: '10px',
}

export default function Polls(props) {

    function onFilterValueSelected(event) {
        console.log(event.target.value);
        props.filterValueSelected(event.target.value)
    }
    return (
        <SimpleGrid >
            <Box style={headerBox}>
                <header>
                    <h1 style={header}>Polls {''}
                    <Tooltip label='Staked token can be used as voting power in polls that are currently in progress'>
                    <InfoOutlineIcon></InfoOutlineIcon>
                    </Tooltip>
                    </h1>
                    {/* <Menu onChange={FilterChange}>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={right}>
                            All
                        </MenuButton>
                        <MenuList>
                            <MenuItem>In Progress</MenuItem>
                            <MenuItem>Passed</MenuItem>
                            <MenuItem>Rejected</MenuItem>
                            <MenuItem>Executed</MenuItem>
                        </MenuList>
                    </Menu> */}

                    <div className='filter' style={right}>
                        <select name='name' onChange={onFilterValueSelected}>
                            <option value='All'>All</option>
                            <option value='In Progress'>In Progress</option>
                            <option value='Passed'>Passed</option>
                            <option value='Rejected'>Rejected</option>
                            <option value='Executed'>Executed</option>
                        </select>
                    </div>
                    <Checkbox style={right}>Hide voted polls</Checkbox>
                </header>
            </Box>
            
            <SimpleGrid columns={2} minChildWidth="400px" spacing="30px" minH="full">
                {data.map((aPoll, i) => (
                <PollCard
                    key={i}
                    id={aPoll.id}
                    title={aPoll.title}
                    description={aPoll.description}
                    status={aPoll.status}
                />
                ))}
            </SimpleGrid>
        </SimpleGrid>
    );
}