'use client'
import { Button } from '@chakra-ui/react'
import { revalidatePath } from 'next/cache'
import { usePathname, useRouter } from 'next/navigation'
export default function Pagination({currentPaginationCount}: any) {
    const pathname = usePathname();
    const router = useRouter()
    return (
        <Button
            color={'white'}
            bg={'blue.400'}
            _hover={{
                bg: 'blue.300',
            }}
            onClick={() => router.push(pathname+`?take=${currentPaginationCount+1}`)}
        >
            Load more logs
        </Button>
    )
}
