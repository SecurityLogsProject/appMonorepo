'use client'

import createMachineAction from '@/serverActions/createMachine'
import { Statuses } from '@/utils'
import {
    Button,
    Card,
    CardHeader,
    FormErrorMessage,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'

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

export default function MachineCreationForm({ isOpen, onOpen, onClose }: any) {
    const [state, formAction] = useFormState(createMachineAction, null)
    const toast = useToast()
    useEffect(() => {
        if (state?.status === Statuses.OK) {
            toast({
                title: 'Machine created.',
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
                    'There was an error when creating new Machine. Check if daemon name is unique',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [state])

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create new Machine</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form action={formAction}>
                            <Input
                                name="daemonName"
                                placeholder="Machine name"
                                required
                                className="my-2"
                            />
                            <SubmitButton />
                        </form>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
