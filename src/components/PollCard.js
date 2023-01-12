import React from "react";
import { Box, Heading, Text, Flex, Stack, Card, Badge, Button } from "@chakra-ui/react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardStyle = {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    boxShadow: '1px 2px 9px #88f797',
}

export default function PollCard({
  id = 0,
  status = "",
  title = "hello",
  description = "desc",
  voteinFavour = 10,
}) 
{
    return (
      <Box>
      <Card padding="20px" style={cardStyle} marginBottom="20px">
        <Stack spacing="10">
          <Flex justifyContent="space-between">
            <Heading
              as="h2"
              fontWeight="bold"
              fontSize="12px"
              isTruncated
            >
              ID: {id}
            </Heading>
            <Badge colorScheme='green'>
              <Text as="span">
                {status}
              </Text>
            </Badge>
          </Flex>

          <Text as="span" fontSize='xl'>
            {title}
          </Text>
          
          <Stack spacing={1}>
              <Text fontSize='xs' color= 'grey'>Description:</Text>
              <Text fontSize='xs' color= 'grey'>{description}</Text>         
          </Stack>
          <ProgressBar>
            <ProgressBar striped variant="success" now={voteinFavour} label={`${voteinFavour}% YES`}/>
          </ProgressBar>

          <Stack spacing={1} direction='row' align='center'>
            <Text>Vote: </Text>
            <Button colorScheme='teal' size='sm' onClick="this.disabled=true; this.value='Sending…';">
              Yes
            </Button>
            
            <Button colorScheme='teal' size='sm' onClick="this.disabled=true"> 
              No
            </Button>
          </Stack>
        </Stack>
      </Card>
      </Box>
    );
}
