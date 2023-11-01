import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import AdminView from '@/components/AdminView'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)
    if (session?.user) {
        return (
            <>
                <AdminView content={children} />
            </>
        )
    } else {
        notFound()
    }
}
