'use server'
import { createDaemon } from '@/queries/machinesQueries'
import { Statuses } from '@/utils'
export default async function createDaemonAction(
    prevState: any,
    formData: FormData
): Promise<{ status: Statuses }> {
    try {
        const daemonName = formData.get('daemonName')?.toString()
        if (!daemonName) throw new Error()

        await createDaemon(daemonName)
        return {
            status: Statuses.OK,
        }
    } catch (e) {
        return {
            status: Statuses.ERROR,
        }
    }
}
