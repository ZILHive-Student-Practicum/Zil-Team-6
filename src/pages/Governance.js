import React, {useState} from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import StakeCard from '../components/StakeCard.js'
import Polls from '../components/Polls.js'
import GovernForm from '../components/GovernForm.js'
import data from "../data/Polldata.js";

const header ={
    fontSize: '30px',
    float: 'left',
    marginTop: '20px',
    fontWeight: 'bold'
}

const btn ={
    float: 'right',
    marginTop: '20px'
}
export default function Governance() {

    function onFilterValueSelected(filterValue) {
        console.log(filterValue);
    }

    return (
        <Container maxW="80%">
            <SimpleGrid minChildWidth="100%">
                <header>
                    <h1 style={header}>Govern</h1>
                    {/* <Button colorScheme='blue' variant='outline' style={btn}>
                        Create Poll
                    </Button> */}
                    <GovernForm></GovernForm>
                </header>
            </SimpleGrid>

            <StakeCard></StakeCard>

            <Polls filterValueSelected={onFilterValueSelected}></Polls>           

        </Container>
    );
};