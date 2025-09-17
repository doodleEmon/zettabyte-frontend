'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { usePathname } from 'next/navigation'
import { activeLinkClasses, linkClasses } from '@/utils/customStyles'

type Props = {
    open: boolean
    onClose?: () => void
}

export default function Sidebar({ open, onClose }: Props) {
    const pathname = usePathname();

    return (
        <motion.aside
            initial={false}
            animate={{ width: open ? 220 : 64 }}
            className="relative bg-slate-800 text-white h-screen transition-width overflow-hidden p-4"
            style={{ minWidth: open ? 220 : 64 }}
        >
            <div className="px-3">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Zetta Inc.</Link>
            </div>
            <nav className="mt-6 space-y-1">
                <Link
                    href="/"
                    className={`${linkClasses} ${pathname === '/' ? activeLinkClasses : 'bg-slate-700'}`}
                >
                    <span className="relative z-10">Dashboard</span>
                </Link>

                <Link
                    href="/posts"
                    className={`${linkClasses} ${pathname === '/posts' ? activeLinkClasses : 'bg-slate-700'}`}
                >
                    <span className="relative z-10">Posts</span>
                </Link>

                <Link
                    href="/users"
                    className={`${linkClasses} ${pathname === '/users' ? activeLinkClasses : 'bg-slate-700'}`}
                >
                    <span className="relative z-10">Users</span>
                </Link>
            </nav>

            <button
                onClick={onClose}
                className="absolute top-1/2 -translate-1/2 -right-1 w-4 h-8 flex items-center justify-center bg-slate-700 text-slate-100 rounded-full shadow-md hover:bg-slate-500 cursor-pointer"
            >
                {open ? <BiChevronLeft size={18} /> : <BiChevronRight size={18} />}
            </button>
        </motion.aside>
    )
}