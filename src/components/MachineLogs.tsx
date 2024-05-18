'use client'
import { Card, CardBody, Text, Heading } from '@chakra-ui/react'
export default function MachineLogs({ logs }: any) {
    return (
        <div>
            <Heading size="md" className="my-4">
                Logs
            </Heading>
            {logs.map((log: any) => {
                const parsedLogs = JSON.parse(log.content)
                return parsedLogs.map((parsedLog: any, index: number) => {
                    const eventDateTime = parsedLog['Event Date/Time']
                    const eventIdType = parsedLog['Event ID / Type']
                    const recordNumber = parsedLog['Record #']
                    const source = parsedLog['Source']
                    const message = parsedLog['Message']
                    return (
                        <Card className="my-4" key={`${log.id}-${index}`}>
                            <CardBody>
                                <Text>Log id: {log.id}</Text>
                                <Text>
                                    Log created:{' '}
                                    {new Date(log.created).toISOString()}
                                </Text>
                                <Text>Event Date/Time: {eventDateTime}</Text>
                                <Text>Event ID / Type: {eventIdType}</Text>
                                <Text>Record #: {recordNumber}</Text>
                                <Text>Source: {source}</Text>
                                <Text>Message: {message}</Text>
                            </CardBody>
                        </Card>
                    )
                })
            })}
        </div>
    )
}
