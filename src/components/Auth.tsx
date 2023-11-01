import { Stack, Avatar, Button, Text } from '@chakra-ui/react'
import { signOut, signIn, useSession } from 'next-auth/react'

export default function Auth() {
    const { data: session } = useSession()
    return (
        <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            alignItems={'center'}
            direction={'row'}
            spacing={6}
        >
            {session?.user ? (
                <>
                    <Avatar
                        size="sm"
                        name={session?.user?.name as string}
                        src={session?.user?.image as string}
                    />
                    <Text className="whitespace-nowrap">
                        {session.user.name}
                    </Text>
                    <Button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'blue.400'}
                        href={'#'}
                        _hover={{
                            bg: 'blue.300',
                        }}
                    >
                        Sign Out
                    </Button>
                </>
            ) : (
                <Button
                    onClick={() =>
                        signIn(undefined, { callbackUrl: '/admin' }) as any
                    }
                    as={'a'}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'blue.400'}
                    href={'#'}
                    _hover={{
                        bg: 'blue.300',
                    }}
                >
                    Sign In
                </Button>
            )}
        </Stack>
    )
}
