import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react';
import a from '../img/1.png';

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }}>
      <AvatarGroup size={{ base: "xl", md: "xl" }} mx={"auto"}>
        <Avatar name='Kim' src={a} alt="Kim's profile picture" />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex gap={4} direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Kim BlackPink</Text>

          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}>
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{base:2,sm:4}}>
            <Text>
                <Text as="span" fontWeight={"bold"} mr={1}>2</Text>
                Posts
            </Text>
            <Text>
                <Text as="span" fontWeight={"bold"} mr={1}>2</Text>
                Followers
            </Text>
            <Text>
                <Text as="span" fontWeight={"bold"} mr={1}>54</Text>
                Following
            </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>Jenni Kim</Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>J. Hello Guys Follow me and like my post</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;