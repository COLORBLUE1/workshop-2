import { Flex, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'

const ProfilePost = ({ imagen }) => {
    

    return (
        <GridItem cursor={"pointer"}
            borderRadius={4}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"whiteAlpha.300"}
            position={'relative'}
            aspectRatio={1 / 1}
        >
            <Flex opacity={0}
                _hover={{ opacity: 1 }}
                position={"absolute"}
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg={"blackAlpha.700"}
                transition={"all 0.3s ease"}
                zIndex={1}
                justifyContent={"center"}
            >
                <Flex flexDirection="row" alignItems="center" justifyContent="center" gap={50}>
                    <Flex>
                        <AiFillHeart size={20} color="white"/>
                        <Text fontWeight={"bold"} ml={2} color="white">
                            50
                        </Text>
                    </Flex>
                    <Flex>
                        <FaComment size={20} color="white" />
                        <Text fontWeight={"bold"} ml={2} color="white">
                            7
                        </Text>
                    </Flex>


                </Flex>
            </Flex>

            <Image src={imagen} alt='profile post' w={"100%"} h={"100%"} objectFit={"cover"} />

        </GridItem>
    )
}

export default ProfilePost
