
import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack
                alignItems={'stretch'}
                spacing={'8'}
                w={['full', '96']}
                m={'auto'}
                my={'16'}
            >
                <Heading>Welcome Back!</Heading>

                <Input required type='email' focusBorderColor='purple.500' placeholder='email'/>

                <Input required type='password' focusBorderColor='purple.500' placeholder='password'/>

                <Button alignSelf={'flex-end'} variant={'link'} >
                    <Link to={'/forgotPassword'}>Forget Password?</Link>
                </Button>

                <Button colorScheme={'purple'} type='submit'> 
                    Log In
                </Button>

                <Text textAlign={'right'}>
                    New User?

                    <Button alignSelf={'flex-end'} variant={'link'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </Text>
                
            </VStack>
        </form>
    </Container>
  )
}

export default Login