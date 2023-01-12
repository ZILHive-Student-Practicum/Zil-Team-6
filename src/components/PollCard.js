import React from "react";
import { Box, Heading, Text, Flex, Stack, Card, Badge } from "@chakra-ui/react";
import StyleSheet from "react";

const cardStyle = {
  shadowColor: "#171717",
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  boxShadow: "1px 2px 9px #88f797",
};

export default function PollCard({
  id = 0,
  status = "",
  title = "hello",
  description = "desc",
}) {
  // if (status === "In progress"){
  return (
    <Box>
      <Card padding="20px" style={cardStyle}>
        <Stack spacing="10">
          <Flex justifyContent="space-between">
            <Heading as="h2" fontWeight="bold" fontSize="12px" isTruncated>
              ID: {id}
            </Heading>
            <Badge colorScheme="green">
              <Text as="span">{status}</Text>
            </Badge>
          </Flex>

          <Flex fontSize="16px">{title}</Flex>

          <Flex justifyContent="space-between">
            <Text as="span">{description}</Text>
          </Flex>
        </Stack>
      </Card>
    </Box>
  );
  // }

  // return (
  //   <Box>
  //   <Card padding="20px">
  //     <Stack spacing="10">
  //       <Flex justifyContent="space-between">
  //         <Heading
  //           as="h2"
  //           fontWeight="bold"
  //           fontSize="12px"
  //           isTruncated
  //         >
  //           ID: {id}
  //         </Heading>

  //         <Badge colorScheme='red'>
  //           <Text as="span">
  //             {status}
  //           </Text>
  //         </Badge>
  //       </Flex>

  //       <Flex fontSize="16px">
  //           {title}
  //       </Flex>

  //       <Flex justifyContent="space-between">
  //         <Text as="span">
  //           {description}
  //         </Text>
  //       </Flex>
  //     </Stack>
  //   </Card>
  //   </Box>
  // );
}
