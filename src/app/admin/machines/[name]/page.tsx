import MachineLogs from '@/components/MachineLogs'
import Pagination from '@/components/Pagination'
import { getMachine } from '@/queries/machines'
import { Card, CardBody, CardHeader, Text } from '@chakra-ui/react'
import { headers } from 'next/headers'
import { machine } from 'os'
import MachineEnv from '@/components/MachineEnv'

export default async function MachineDetails({
    params,
    searchParams
}: {
    params: { name: string }
    , searchParams: { take: number }
}) {
    try {
        let currentPaginationCount = Number(searchParams.take) || 1;
        
        const host = headers()
        console.log(host)
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
                {(machineDetails.logs?.length) > 0 &&
                    <>
                        <MachineLogs logs={machineDetails.logs}></MachineLogs>
                        <Pagination currentPaginationCount={currentPaginationCount} />
                    </>
                }
                {!machineDetails.logs?.length && (
                    <Card className='my-2'>
                        <CardHeader>To setup client for this machine locally, fill those values to .env file</CardHeader>
                        <MachineEnv machineDetails={machineDetails}></MachineEnv>
                    </Card>
                )}
            </div>
        )
    } catch (e) {
        console.log(e)
        return <div>No machine found!!!</div>
    }
}
