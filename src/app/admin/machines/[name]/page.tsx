import MachineCreationForm from '@/components/MachineCreation'
import { getMachine, listMachines } from '@/queries/machines'

export default async function MachineDetails({
    params,
}: {
    params: { name: string }
}) {
    try {
        const daemonDetails = await getMachine(params.name)
        return <div>{JSON.stringify(daemonDetails)}</div>
    } catch (e) {
        return <div>No daemon found!!!</div>
    }
}
