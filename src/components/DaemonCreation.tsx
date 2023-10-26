import createDaemon from '@/serverActions/createDaemon'
import { Card, Input } from '@chakra-ui/react'

export default function DaemonCreationForm() {
    return (
        <Card>
            <form action={createDaemon}>
                <Input name="daemonName" placeholder="daemon name" />
                <Input type="submit" value="Add" />
            </form>
        </Card>
    )
}
