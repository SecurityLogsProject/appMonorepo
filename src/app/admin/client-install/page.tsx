import {
    Card,
    CardHeader,
} from '@chakra-ui/react'
export default async function ClientInstallPage() {
    return (
        <Card>
                    <h1>To Install Python client download code from <a class='text-blue-500' href='https://github.com/SecurityLogsProject/pythonClient/archive/refs/heads/main.zip'>GITHUB</a></h1>
            <h2>Prerequisites</h2>
            <p>1. Make sure that python is installed on your machine. Check it with <pre>`python -v`</pre></p>
            <p>2. Rename env.example to .env and fill values with those shown in machine details view</p>
        </Card>
    )
}
