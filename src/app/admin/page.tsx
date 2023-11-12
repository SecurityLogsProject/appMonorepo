import MachinesView from '@/components/MachinesViewPage'
import { listMachines } from '@/queries/machines'

export default async function MachinesViewPage() {
    const machinesList = await listMachines()
    return <MachinesView machinesList={machinesList} />
}
