import React from "react";
import { SimpleGrid, Button, Checkbox, Tooltip, Box, propNames} from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
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

    // function onFilterValueSelected(event) {
    //     console.log(event.target.value);
    //     props.filterValueSelected(event.target.value)
    // }
    return (
        <SimpleGrid >
            <Box style={headerBox}>
                <header>
                    <h1 style={header}>Polls {''}
                    <Tooltip label='Staked token can be used as voting power in polls that are currently in progress'>
                    <InfoOutlineIcon></InfoOutlineIcon>
                    </Tooltip>
                    </h1>
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
                    voteinFavour={aPoll.voteinFavour}
                />
                ))}
            </SimpleGrid>
        </SimpleGrid>
    );
}