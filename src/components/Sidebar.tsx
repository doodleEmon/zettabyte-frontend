'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { usePathname } from 'next/navigation'

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
                <Link href="/" className={`block px-3 py-2 rounded bg-slate-700 hover:bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 ease-in-out ${pathname === '/' && 'bg-gradient-to-r from-amber-500 to-sky-500'} `}>Dashboard</Link>
                <Link href="/posts" className={`block px-3 py-2 rounded bg-slate-700 hover:bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 ease-in-out ${pathname === '/posts' && 'bg-gradient-to-r from-amber-500 to-sky-500'}`}>Posts</Link>
                <Link href="/users" className={`block px-3 py-2 rounded bg-slate-700 hover:bg-gradient-to-r from-amber-500 to-sky-500 transition-all duration-300 ease-in-out ${pathname === '/users' && 'bg-gradient-to-r from-amber-500 to-sky-500'}`}>Users</Link>
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