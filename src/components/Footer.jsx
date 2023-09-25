import { Box, Stack, VStack, Heading, HStack, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai/index'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']} >
                    Subscribe to get latest updates
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter email here...' focusBorderColor='none' border={'none'} borderRadius={'none'} outline={'none'} />
                    <Button 
                        p={'0'}
                        colorScheme={'purple'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend size={'20'} />
                    </Button>
                </HStack>
            </VStack>

            <VStack
                w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    VIDEO HUB
                </Heading>
                <Text>All Rights Reserved</Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button colorScheme={'white'} variant={'link'}>
                    <a target='_blank' href="/twitter">Twitter</a>
                </Button>
                <Button colorScheme={'white'} variant={'link'}>
                    <a target='_blank' href="/LinkedIn">LinkedIn</a>
                </Button>
                <Button colorScheme={'white'} variant={'link'}>
                    <a target='_blank' href="/Github">GitHub</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer