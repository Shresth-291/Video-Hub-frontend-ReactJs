import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4x1',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p={'4'}>
            <Heading 
                textTransform={'uppercase'}
                borderBottom={'2px solid'}
                py={'2'}
                h={'full'}
            >
                Services
            </Heading>

            <Stack 
                p={'4'}
                h={'full'}
                direction={['column', 'row']}
                alignItems={'center'}
            >
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

                <Text 
                    p={['4', '16']}
                    lineHeight={'190%'}
                    textAlign={'center'}
                    letterSpacing={'widest'}  
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
                    tempora deleniti quod, est eos veniam autem asperiores rem, nam
                    laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
                    at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
                    sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
                    Libero, reprehenderit recusandae labore eaque, aspernatur aliquid
                    modi soluta ullam voluptatum unde repellat in molestias quod?
                    Doloribus ratione illum quisquam earum consequuntur nam voluptatem,
                    velit culpa maiores. Inventore esse illum excepturi dolores est
                    natus aliquid maiores sunt omnis deserunt accusantium amet enim eos
                    adipisci minima hic, nam provident quo aperiam quasi vel?
                    Dignissimos accusantium aliquid aut vel explicabo voluptatum
                    molestias fugit harum reprehenderit incidunt. Quis cumque explicabo
                    omnis officiis autem dolorum!
                </Text>
            </Stack>
        </Container>
    </Box>
  );
}

const MyCarousel = () => {

    return (
        <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            interval={2000}
        >

            <Box w={'full'} h={'100vh'}>
                <Image src={img1}  h={'full'} w={'full'} objectFit={'cover'} />
                <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Step into the Future</Heading>
            </Box>

            <Box w={'full'} h={'100vh'}>
                <Image src={img2}  h={'full'} w={'full'} objectFit={'cover'} />
                <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Future is Gaming</Heading>
            </Box>

            <Box w={'full'} h={'100vh'}>
                <Image src={img3}  h={'full'} w={'full'} objectFit={'cover'} />
                <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Gaming on Console</Heading>
            </Box>

            <Box w={'full'} h={'100vh'}>
                <Image src={img4}  h={'full'} w={'full'} objectFit={'cover'} />
                <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Night Life is Cool</Heading>
            </Box>

            
        </Carousel>
    );

}

export default Home