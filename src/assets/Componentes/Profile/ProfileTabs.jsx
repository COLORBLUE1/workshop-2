import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
const ProfileTabs = () => {
  return (
   <Flex
   w={"full"}
   justifyContent={"center"}
   gap={{base:4, sm:10}}
   textTransform={"uppercase"}
   fontWeight={"bold"}
   >
    <Flex borderBottom={"1px solid pink"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Photos</Text>
        </Box>
    </Flex>
    <Flex borderBottom={"1px solid pink"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Videos</Text>
        </Box>
    </Flex>
    <Flex borderBottom={"1px solid pink"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Album</Text>
        </Box>
    </Flex>
    <Flex borderBottom={"1px solid pink"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
            <Text fontSize={12} display={{base:"none", sm:"block"}}>Tag</Text>
        </Box>
    </Flex>
   </Flex>
  )
}

export default ProfileTabs
