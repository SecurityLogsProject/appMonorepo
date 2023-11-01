'use client'

import createDaemonAction from '@/serverActions/createDaemon'
import { Statuses } from '@/utils'
import {
    Button,
    Card,
    CardHeader,
    FormErrorMessage,
    Heading,
    Input,
    useToast,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

const initialState = {
    message: null,
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            className="w-full"
            aria-disabled={pending}
            isLoading={pending}
        >
            Add
        </Button>
    )
}

export default function DaemonCreationForm() {
    const [state, formAction] = useFormState(createDaemonAction, initialState)
    const toast = useToast()

    useEffect(() => {
        if (state?.status === Statuses.OK) {
            toast({
                title: 'Daemon created.',
                description: "We've created new daemon for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }

        if (state?.status === Statuses.ERROR) {
            toast({
                title: 'Error Ocurred.',
                description:
                    'There was an error when creating new Daemon. Check if daemon name is unique',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [state])

    return (
        <Card className="w-64 p-2">
            <CardHeader>
                <Heading size="md">Create new Daemon</Heading>
            </CardHeader>
            <form action={formAction}>
                <Input
                    name="daemonName"
                    placeholder="Daemon name"
                    required
                    className="my-2"
                />
                <SubmitButton />
            </form>
        </Card>
    )
}
