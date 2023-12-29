import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="font-sans text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <img src="/logo-radar.png" className="w-50 h-30 fill-current" />
                        </Link>
                    }>
                        <h1 className="font-black text-5xl text-center pb-8 px-10">Radar de arquétipos</h1>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
