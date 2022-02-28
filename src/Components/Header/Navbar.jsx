import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    InputGroup,
    InputLeftElement,
    Input,
    Avatar,
} from "@chakra-ui/react";
import logo from "../../images/nice.png";
import {
    AiOutlineMenu,
    AiFillHome,
    AiOutlineInbox,
    AiOutlineSearch,
    AiFillBell,
} from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from 'react-router-dom'

const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    justifySelf="self-start"
                                    onClick={mobileNav.onClose}
                                />
                                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                                    Dashboard
                </Button>
                                <Button
                                    w="full"
                                    variant="solid"
                                    colorScheme="brand"
                                    leftIcon={<AiOutlineInbox />}
                                >
                                    Inbox
                </Button>
                                <Button
                                    w="full"
                                    variant="ghost"
                                    leftIcon={<BsFillCameraVideoFill />}
                                >
                                    Makeup
                </Button>
                            </VStack>
                        </Box>
                        <Link to="/">
                        <img src={logo} alt="logo" className="logo"/>
                        </Link>

                        <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
                            <Button variant="ghost" size="sm">
                                Hair
              </Button>
                            
                            <Button
                                variant="ghost"
                                size="sm"
                            >
                                Makup
              </Button>
                        </HStack>
                    </HStack>
                    <HStack
                        spacing={3}
                        display={mobileNav.isOpen ? "none" : "flex"}
                        alignItems="center"
                    >
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<AiOutlineSearch />}
                            />
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>

                        <chakra.a
                            p={3}
                            color={useColorModeValue("gray.800", "inherit")}
                            rounded="sm"
                            _hover={{ color: useColorModeValue("gray.800", "gray.600") }}
                        >
                            <AiFillBell />
                            <VisuallyHidden>Notifications</VisuallyHidden>
                        </chakra.a>

                        <Avatar
                            size="sm"
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                        />
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
}


export default Navbar