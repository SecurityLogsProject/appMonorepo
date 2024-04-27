
'use client'
import {
    Card,
    CardBody,
    Code,
    Text,
    Heading,
} from '@chakra-ui/react'
export default function MachineLogs({ logs }: any) {
    return (
        <div>
            <Heading size='md' className='my-4'>Logs</Heading>
            {logs.map((log: any) => (
                <Card className='my-4' key={log.id}>
                    <CardBody>
                        <Text>Log id {log.id}</Text>
                        <Text>Log created: {new Date(log.created).toISOString()}</Text>
                        <Code className='my-4'>
                            <pre>{log.content}</pre>
                        </Code>
                    </CardBody>
                </Card>
            ))}
        </div>
    )
}