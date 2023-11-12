'use client'
import { Box, Button, Card, Heading } from '@chakra-ui/react'

export default function MachinesList({ machinesList, onAddMachineFunc }: any) {
    const onAddMachine = () => {
        onAddMachineFunc()
    }
    return (
        <div className="p-2">
            <div className="my-2 flex justify-between">
                <Heading size="md">Machines list</Heading>
                <Button
                    color={'white'}
                    bg={'blue.400'}
                    _hover={{
                        bg: 'blue.300',
                    }}
                    onClick={onAddMachine}
                >
                    Add Machine
                </Button>
            </div>
            {machinesList.map((item: any) => (
                <Card className="my-1 p-2" key={item.id}>
                    {item.name}
                </Card>
            ))}
        </div>
    )
}
