'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useParams, usePathname } from 'next/navigation'
import { activeLinkClasses, linkClasses } from '@/utils/customStyles'
import { useState } from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaSignsPost, FaUsers } from 'react-icons/fa6'

export default function Sidebar() {
    const [open, setOpen] = useState<Boolean>(true);
    const pathname = usePathname();
    const { id } = useParams();

    return (
        <motion.aside
            initial={false}
            animate={{ width: open ? 220 : 64 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`relative bg-slate-800 text-white h-screen transition-width overflow-hidden ${open ? "p-4" : "p-3"}`}
        >
            <div className="px-3">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">{open ? "Zetta Inc." : "Z"}</Link>
            </div>
            <nav className="mt-6 space-y-1">
                <Link
                    href="/"
                    className={`${linkClasses} ${pathname === '/' ? activeLinkClasses : 'bg-slate-700'}`}
                >
                    <span className="relative z-10">{open ? <span className=' flex items-center gap-x-2'><MdDashboard /> Dashboard</span> : <MdDashboard />}</span>
                </Link>

                <Link
                    href="/posts"
                    className={`${linkClasses} ${pathname === '/posts' || pathname === `/posts/${id}` ? activeLinkClasses : 'bg-slate-700'}`}
                >
                    <span className="relative z-10">{open ? <span className=' flex items-center gap-x-2'><FaSignsPost /> Posts</span> : <FaSignsPost />}</span>
                </Link>

                <Link
                    href="/users"
                    className={`${linkClasses} ${pathname === '/users' ? activeLinkClasses : 'bg-slate-700'}`}
                >
                    <span className="relative z-10">{open ? <span className=' flex items-center gap-x-2'><FaUsers /> Users</span> : <FaUsers />}</span>
                </Link>
            </nav>

            <button
                onClick={() => setOpen(!open)}
                className={`absolute bottom-3 ${open ? "right-2" : "right-3"} size-10 flex items-center justify-center bg-slate-700 text-slate-100 rounded-full shadow-md hover:bg-slate-500 cursor-pointer`}
            >
                {open ? <BiChevronLeft size={18} /> : <BiChevronRight size={18} />}
            </button>
        </motion.aside>
    )
}