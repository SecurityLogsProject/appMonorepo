'use client'

import { SessionProvider } from 'next-auth/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Session } from 'next-auth'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider>
            <SessionProvider>
                <CacheProvider>{children}</CacheProvider>
            </SessionProvider>
        </ChakraProvider>
    )
}
