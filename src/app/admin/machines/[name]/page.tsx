import MachineCreationForm from '@/components/MachineCreation'
import MachineLogs from '@/components/MachineLogs'
import { getMachine, listMachines } from '@/queries/machines'
import { Card, CardBody, Text } from '@chakra-ui/react'

export default async function MachineDetails({
    params,
}: {
    params: { name: string }
}) {
    try {
        const machineDetails = await getMachine(params.name)
        return (
            <div>
                <Card>
                    <CardBody>
                        <Text>Machine Name: {machineDetails.name}</Text>
                        <Text>Machine Id: {machineDetails.id}</Text>
                        <Text>Machine Key: {machineDetails.machineKey}</Text>
                    </CardBody>
                </Card>
                        <MachineLogs logs={machineDetails.logs}></MachineLogs>
            </div>
        )
    } catch (e) {
        console.log(e)
        return <div>No machine found!!!</div>
    }
}
