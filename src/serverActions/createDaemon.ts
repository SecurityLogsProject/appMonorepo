'use server'
import { createDaemon } from '@/queries/daemons'
import { Statuses } from '@/utils'
import { revalidatePath } from 'next/cache'
export default async function createDaemonAction(
    prevState: any,
    formData: FormData
): Promise<{ status: Statuses }> {
    try {
        const daemonName = formData.get('daemonName')?.toString()
        if (!daemonName) throw new Error()

        await createDaemon(daemonName)
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
