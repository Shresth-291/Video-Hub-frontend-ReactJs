
import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'} >
        <form>
            <VStack
                alignItems={'stretch'}
                spacing={'8'}
                w={['full', '96']}
                m={'auto'}
                my={'16'}
            >
                <Heading>VIDEO HUB</Heading>
                <Avatar alignSelf={'center'} boxSize={'36'}/>
                
                <Input required type='text' focusBorderColor='purple.500' placeholder='Name'/>

                <Input required type='email' focusBorderColor='purple.500' placeholder='Email'/>

                <Input required type='password' focusBorderColor='purple.500' placeholder='Password'/>

                <Button colorScheme={'purple'} type='submit'> 
                    Sign Up
                </Button>

                <Text textAlign={'right'}>
                    Already a member?

                    <Button alignSelf={'flex-end'} variant={'link'}>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Signup