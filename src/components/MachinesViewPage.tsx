'use client'
import { useDisclosure } from '@chakra-ui/react'
import MachineCreationForm from './MachineCreation'
import MachinesList from './MachinesList'

export default function MachinesView({ machinesList }: any) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const onOpenModal = () => {
        onOpen()
    }
    return (
        <div>
            <MachinesList
                machinesList={machinesList}
                onAddMachineFunc={onOpenModal}
            />
            <MachineCreationForm
                onOpen={onOpen}
                isOpen={isOpen}
                onClose={onClose}
            />
        </div>
    )
}
