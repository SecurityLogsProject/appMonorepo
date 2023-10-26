'use client'

import { SessionProvider } from 'next-auth/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Session } from 'next-auth'

export function Providers({
    children,
    session,
}: {
    children: React.ReactNode
    session: Session
}) {
    return (
        <ChakraProvider>
            <SessionProvider session={session}>
                <CacheProvider>{children}</CacheProvider>
            </SessionProvider>
        </ChakraProvider>
    )
}
