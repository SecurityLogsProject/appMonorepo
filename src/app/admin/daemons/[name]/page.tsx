import DaemonCreationForm from '@/components/DaemonCreation'
import { getDaemon, listDaemons } from '@/queries/daemons'

export default async function DaemonDetails({
    params,
}: {
    params: { name: string }
}) {
    try {
        const daemonDetails = await getDaemon(params.name)
        return <div>{JSON.stringify(daemonDetails)}</div>
    } catch (e) {
        return <div>No daemon found!!!</div>
    }
}
