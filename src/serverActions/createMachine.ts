'use server'
import { createMachine } from '@/queries/machines'
import { Statuses } from '@/utils'
import { revalidatePath } from 'next/cache'
export default async function createMachineAction(
    prevState: any,
    formData: FormData
): Promise<{ status: Statuses }> {
    try {
        const daemonName = formData.get('daemonName')?.toString()
        if (!daemonName) throw new Error()

        await createMachine(daemonName)
        revalidatePath('/admin/daemons')
        return {
            status: Statuses.OK,
        }
    } catch (e) {
        return {
            status: Statuses.ERROR,
        }
    }
}
