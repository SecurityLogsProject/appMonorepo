import MachineCreationForm from '@/components/MachineCreation'
import { getMachine, listMachines } from '@/queries/machines'
import { Card, CardBody, Text } from '@chakra-ui/react'

export default async function MachineDetails({
    params,
}: {
    params: { name: string }
}) {
    try {
        const daemonDetails = await getMachine(params.name)
        return (
            <div>
                <Card>
                    <CardBody>
                        <Text>Machine Name: {daemonDetails.name}</Text>
                        <Text>Machine Id: {daemonDetails.id}</Text>
                        <Text>Machine Key: {daemonDetails.machineKey}</Text>
                    </CardBody>
                </Card>
            </div>
        )
    } catch (e) {
        return <div>No daemon found!!!</div>
    }
}
