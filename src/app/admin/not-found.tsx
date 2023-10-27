'use client'
import Link from 'next/link'
import { Text, Heading, Stack, Button } from '@chakra-ui/react'
export default function NotFound() {
    return (
        <div className=" w-full h-96 py-8 flex items-center justify-center flex-col">
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
                        404
                    </Text>
                    <br />
                    <Text as={'span'} color={'blue.400'}>
                        Can`t found resoruce
                    </Text>
                </Heading>
                <Link href="/">
                    <Button>Return Home</Button>
                </Link>
            </Stack>
        </div>
    )
}
