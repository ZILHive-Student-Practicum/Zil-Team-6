import React, { useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import StakeCard from '../components/StakeCard.js'
import Polls from '../components/Polls.js'
import GovernForm from '../components/GovernForm.js'
import Modal from "../components/Modal";

const header = {
    fontSize: '30px',
    float: 'left',
    marginTop: '20px',
    fontWeight: 'bold'
}

const btn = {
    float: 'right',
    marginTop: '20px'
}
export default function Governance() {

    // function onFilterValueSelected(filterValue) {
    //     console.log(filterValue);
    //     if (filterValue == "In Progress") {

    //     }
    // }

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container maxW="80%">
            <SimpleGrid minChildWidth="100%">
                <header>
                    <h1 style={header}>Govern</h1>
                    {/* <Button colorScheme='blue' variant='outline' style={btn}>
                        Create Poll
                    </Button> */}
                    {/* <GovernForm></GovernForm> */}
                    <div className="App">
                        <Button
                            style={btn}
                            className="openModalBtn"
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            Create Poll
                        </Button>

                        {modalOpen && <Modal setOpenModal={setModalOpen} />}
                    </div>
                </header>
            </SimpleGrid>

            <StakeCard></StakeCard>

            {/* <Polls filterValueSelected={onFilterValueSelected}></Polls>*/}
            <Polls></Polls>

        </Container>
    );
};