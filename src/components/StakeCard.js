import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const x = {
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '18px'
}

export default function StakeCard() {
    return(
        <SimpleGrid minChildWidth='120px' spacing='30px'>
            <Box>
                <Card height='190px'>
                    <CardHeader>
                        <Heading size='md'>ZilTeam6</Heading>
                    </CardHeader>
                    <CardBody>
                        <SimpleGrid minChildWidth='150px'>
                            <Text as='sub'>
                                Community Pool {''}
                                <Tooltip label='Total number of tokens currently in the community pool'>
                                <InfoOutlineIcon></InfoOutlineIcon>
                                </Tooltip>
                                <div style={x}>
                                    0
                                </div>
                            </Text>
                            <Text as='sub'>
                                Total Staked {''}
                                <Tooltip label='Total quantity of tokens staked'>
                                <InfoOutlineIcon></InfoOutlineIcon>
                                </Tooltip>
                                <div style={x}> 
                                    0
                                </div>
                            </Text>
                        </SimpleGrid>
                    </CardBody>
                </Card>
            </Box>
            
            <Box>
                <Card height='190px'>
                    <CardBody>
                        <SimpleGrid minChildWidth='50px'>
                            <Text as='sub'>
                                Staked token
                                <div style={x}>
                                    0
                                </div>
                
                                Stakable token
                                <div style={x}>
                                    0
                                </div>
                                <Tooltip>
                                    <Button disabled>Manage Stake</Button>
                                </Tooltip>
                            </Text>
                        </SimpleGrid>
                    </CardBody>
                </Card>
            </Box>
        </SimpleGrid>
    );
}