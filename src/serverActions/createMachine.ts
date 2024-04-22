'use server'
import { createMachine } from '@/queries/machines'
import { Statuses } from '@/utils'
import { revalidatePath } from 'next/cache'
export default async function createMachineAction(
    prevState: any,
    formData: FormData
): Promise<{ status: Statuses }> {
    try {
        const machineName = formData.get('machineName')?.toString()
        if (!machineName) throw new Error()

        await createMachine(machineName)
        revalidatePath('/admin/machines')
        return {
            status: Statuses.OK,
        }
    } catch (e) {
        return {
            status: Statuses.ERROR,
        }
    }
}
