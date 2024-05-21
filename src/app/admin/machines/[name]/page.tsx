import MachineLogs from '@/components/MachineLogs'
import Pagination from '@/components/Pagination'
import { getMachine } from '@/queries/machines'
import { Card, CardBody, Text } from '@chakra-ui/react'

export default async function MachineDetails({
    params,
    searchParams
}: {
    params: { name: string }
    ,searchParams: {take: number}
}) {
    try {
        let currentPaginationCount = Number(searchParams.take) || 1;
        let machineDetails = await getMachine(
            params.name,
            currentPaginationCount
        )
 
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
                <Pagination currentPaginationCount={currentPaginationCount}/>
            </div>
        )
    } catch (e) {
        console.log(e)
        return <div>No machine found!!!</div>
    }
}
