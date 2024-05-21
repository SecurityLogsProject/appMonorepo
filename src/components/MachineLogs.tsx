'use client'
import { Card, CardBody, Text, Heading, Input } from '@chakra-ui/react'
import { useState } from 'react'
export default function MachineLogs({ logs }: any) {
    const [filter, setFilter] = useState('')

    const onFilterChange = (e: any) => {
        console.log(e.target.value)
        setFilter(e.target.value)
    }

    return (
        <div>
            <Heading size="md" className="my-4">
                Logs
            </Heading>
            <div>
                <Input
                    className="bg-white md"
                    placeholder="Search logs"
                    onChange={onFilterChange}
                />
            </div>
            {logs.map((log: any) => {
                const parsedLogs = JSON.parse(log.content)
                return parsedLogs.map((parsedLog: any, index: number) => {
                    const eventDateTime = parsedLog['Event Date/Time']
                    const eventIdType = parsedLog['Event ID / Type']
                    const recordNumber = parsedLog['Record #']
                    const source = parsedLog['Source']
                    const message = parsedLog['Message']
                    if (
                        filter.length &&
                        !message.toLowerCase().includes(filter.toLowerCase())
                    )
                        return null
                    return (
                        <Card className="my-4" key={`${log.id}-${index}`}>
                            <CardBody>
                                <Text>
                                    <strong>Log id:</strong> {log.id}
                                </Text>
                                <Text>
                                    <strong>Log created: </strong>
                                    {new Date(log.created).toISOString()}
                                </Text>
                                <Text>
                                    <strong>Event Date/Time:</strong>{' '}
                                    {eventDateTime}
                                </Text>
                                <Text>
                                    <strong>Event ID / Type:</strong>{' '}
                                    {eventIdType}
                                </Text>
                                <Text>
                                    <strong>Record #:</strong> {recordNumber}
                                </Text>
                                <Text>
                                    <strong>Source:</strong> {source}
                                </Text>
                                <strong>Message:</strong>
                                <pre className='whitespace-pre-wrap'>{message}</pre>
                            </CardBody>
                        </Card>
                    )
                })
            })}
        </div>
    )
}
