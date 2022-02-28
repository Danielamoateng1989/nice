import React, { useState } from "react";
import {
    Text,
    Box,
    Flex,
    useColorModeValue,
    Image,
    HStack,
    Stack,
} from "@chakra-ui/react";

 const Hero = () => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
            opacity: 0.8,
            bg: "black",
        },
    };

    const slides = [
        {
            img:
                "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80",
            label: "Welcome to nice.com",
            description: 'BOOK A HOME SERVICE APPOINTMENT'
            
        },
        {
            img:
                "https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            label: "50% off by June",
            
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const slidesCount = slides.length;

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };
    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };
    const setSlide = (slide) => {
        setCurrentSlide(slide);
    };
    const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
    };

    return (
        <Box className="hero">
        <Flex
            w="full"
            bg="white"
            p={10}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" pos="relative" overflow="hidden">
                <Flex h="400px" w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                            <Text
                                color="white"
                                fontSize="xs"
                                p="8px 12px"
                                pos="absolute"
                                top="10"
                            >
                                {sid + 1} / {slidesCount}
                            </Text>
                            <Image src={slide.img} boxSize="full" borderRadius="10px" />
                            <Stack
                                p="8px 12px"
                                pos="absolute"
                                bottom="24px"
                                textAlign="center"
                                w="full"
                                mb="8"
                                color="white"
                            >
                                <Text fontSize="7xl" fontWeight="bold" marginBottom="90px">{slide.label}</Text>
                            </Stack>
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="0" onClick={prevSlide}>
                    &#10094;
        </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide}>
                    &#10095;
        </Text>
                <HStack justify="center" pos="absolute" bottom="8px" w="full">
                    {Array.from({ length: slidesCount }).map((_, slide) => (
                        <Box
                            key={`dots-${slide}`}
                            cursor="pointer"
                            boxSize={["7px", , "15px"]}
                            m="0 2px"
                            bg={currentSlide === slide ? "white.800" : "white.500"}
                            rounded="50%"
                            display="inline-block"
                            transition="background-color 0.6s ease"
                            _hover={{ bg: "blackAlpha.800" }}
                            onClick={() => setSlide(slide)}
                        ></Box>
                    ))}
                </HStack>
            </Flex>
        </Flex>


    </Box>
    );
};

export default Hero