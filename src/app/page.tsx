'use client'

import Navbar from '@/components/Navbar'
import { CheckCircleIcon } from '@chakra-ui/icons'
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Icon,
    IconButton,
    IconProps,
    useColorModeValue,
    SimpleGrid,
    StackDivider,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { ReactElement } from 'react'

export default function Home() {
    const { data: session, status } = useSession()
    if (status !== 'authenticated') {
        return (
            <div className="hero">
                <Hero />
                <SplitWithImage />
            </div>
        )
    } else {
        redirect('/admin')
    }
}

const Hero = () => (
    <Container maxW={'7xl'}>
        <Navbar />
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}
        >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                >
                    <Text
                        as={'span'}
                        position={'relative'}
                        _after={{
                            content: "''",
                            width: 'full',
                            height: '30%',
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'blue.400',
                            zIndex: -1,
                        }}
                    >
                        Setup Once,
                    </Text>
                    <br />
                    <Text as={'span'} color={'blue.400'}>
                        access logs everywhere!
                    </Text>
                </Heading>
                <Text color={'gray.500'}>
                    Security Logs is SAAS that allows you to stay in touch with
                    state of your machines, servers and more
                </Text>
                <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: 'column', sm: 'row' }}
                ></Stack>
            </Stack>
            <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}
            >
                <Blob
                    w={'150%'}
                    h={'150%'}
                    position={'absolute'}
                    top={'-20%'}
                    left={0}
                    zIndex={-1}
                    color={useColorModeValue('blue.500', 'blue.500')}
                />
                <Box
                    position={'relative'}
                    height={'300px'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    overflow={'hidden'}
                >
                    <IconButton
                        aria-label={'Play Button'}
                        variant={'ghost'}
                        _hover={{ bg: 'transparent' }}
                        size={'lg'}
                        color={'white'}
                        position={'absolute'}
                        left={'50%'}
                        top={'50%'}
                        transform={'translateX(-50%) translateY(-50%)'}
                    />
                    <Image
                        alt={'Hero Image'}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                        }
                    />
                </Box>
            </Flex>
        </Stack>
    </Container>
)

const Blob = (props: IconProps) => {
    return (
        <Icon
            width={'100%'}
            viewBox="0 0 578 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
                fill="currentColor"
            />
        </Icon>
    )
}

interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    )
}

function SplitWithImage() {
    return (
        <Container maxW={'7xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}
                    >
                        Our features
                    </Text>
                    <Heading>Security SAAS</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Our Mission is to help you manage your servers and
                        infrastructure
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue(
                                    'gray.100',
                                    'gray.700'
                                )}
                            />
                        }
                    >
                        <Feature
                            icon={<CheckCircleIcon />}
                            iconBg={useColorModeValue('blue.100', 'blue.900')}
                            text={'Server Logs'}
                        />
                        <Feature
                            icon={<CheckCircleIcon />}
                            iconBg={useColorModeValue('blue.100', 'blue.900')}
                            text={'Push Notifications'}
                        />
                        <Feature
                            icon={<CheckCircleIcon />}
                            iconBg={useColorModeValue('blue.100', 'blue.900')}
                            text={'Raports & Insights'}
                        />
                    </Stack>
                </Stack>
            </SimpleGrid>
        </Container>
    )
}
