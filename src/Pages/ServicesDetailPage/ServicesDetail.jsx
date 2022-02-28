
import {
    Box,
    Flex,
    Image,
    Skeleton,
    Stack,
    HStack,
    Text,
   
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import services from '../../services'
import styled from 'styled-components'


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: white;
  border-radius: 5px;
  background-color: #2A73E8;
  font-weight: bolder;
  height: 40px;
  width: 160px;
  &:hover {
    background-color: #709ee8;
  }

`


const ServicesDetail = () => {
    return (
     <React.Fragment>
        <ul>
            
        {services.map((service) => {
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: '0',
                lg: '12',
            }}
            py={{
                base: '0',
                lg: '12',
            }}
        >
            <Link to="/">
                <button type="button"
                    className="back-btn"
                >Go back</button>
            </Link>
            <Stack
                direction={{
                    base: 'column-reverse',
                    lg: 'row',
                }}
                spacing={{
                    base: '0',
                    lg: '20',
                }}
            >
                <Box
                    width={{
                        lg: 'sm',
                    }}
                    transform={{
                        base: 'translateY(-50%)',
                        lg: 'none',
                    }}
                    bg={{
                        base: "black",
                        lg: 'transparent',
                    }}
                    mx={{
                        base: '6',
                        md: '8',
                        lg: '0',
                    }}
                    px={{
                        base: '6',
                        md: '8',
                        lg: '0',
                    }}
                    py={{
                        base: '6',
                        md: '8',
                        lg: '12',
                    }}
                >

                    <Stack
                        spacing={{
                            base: '8',
                            lg: '10',
                        }}
                    >
                        <Stack
                            spacing={{
                                base: '2',
                                lg: '4',
                            }}
                        >

                            <h1 size="xl" color={"black"} className="hero-heading">
                                {service.name}
                            </h1>
                            <p size="xl" fontWeight="normal" className="hero-paragraph">
                                ${service.price}
                            </p>
                            <HStack>
                                <Rating defaultValue={service.rating} size="sm" />
                                {service.rating}
                                <Text fontSize="sm" color="black">
                                    ({service.numberOfReviews} reviews)
          </Text>
                            </HStack>
                            <HStack />
                            <Button onClick={() => navigate('/dateandtime')}>Book Now</Button>
                        </Stack>

                    </Stack>

                </Box>

                <Flex flex="1" overflow="hidden">

                    <Image
                        src={service.image}
                        alt="Lovely Image"
                        fallback={<Skeleton />}
                        maxH="450px"
                        minW="300px"
                        objectFit="cover"
                        flex="1"
                        borderRadius="15"
                    />

                </Flex>

            </Stack>

        </Box>
            })}
        </ul>
        </React.Fragment>
    )
}

export default ServicesDetail
