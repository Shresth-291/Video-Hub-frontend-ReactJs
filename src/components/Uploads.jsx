import { Container, VStack, HStack, Input, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai/index'

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'100'} />
            <form>
                <HStack>
                    <Input 
                        required 
                        type={'file'} 
                        css={{
                            '&::file-selector-button' : {
                                border: 'none',
                                height: '100%',
                                width: 'calc(100% + 36px)',
                                marginLeft: '-18px',
                                color: 'purple',
                                backgroundColor: 'white',
                                cursor: 'pointer'
                            }
                        }}
                    />
                    <Button type={'submit'} colorScheme={'purple'}>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload