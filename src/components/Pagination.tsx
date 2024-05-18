'use client'
import { Button } from '@chakra-ui/react'

export default function Pagination({path}: any) {
    return (
        <Button
            color={'white'}
            bg={'blue.400'}
            _hover={{
                bg: 'blue.300',
            }}
            onClick={() => alert(path)}
        >
            Load more logs
        </Button>
    )
}
