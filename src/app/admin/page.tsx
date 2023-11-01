import DaemonCreationForm from '@/components/DaemonCreation'
import { listDaemons } from '@/queries/daemons'

export default async function DaemonsList() {
    const daemons = await listDaemons()
    return (
        <div>
            {JSON.stringify(daemons)}
            <DaemonCreationForm />
        </div>
    )
}
