'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

type CardProps = {
    title: string
    children?: React.ReactNode
    description: string
    href?: string
}

export default function Card({ title, description, children, href }: CardProps) {
    const content = (
        <div
            className='bg-slate-500 hover:bg-gradient-to-r hover:from-amber-500 hover:to-sky-500 p-[2px] rounded-2xl transition-colors duration-300 ease-in-out'>
            <motion.article
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="bg-white rounded-2xl shadow-sm p-4 w-full h-36"
            >
                <h3 className="font-semibold mb-2 capitalize line-clamp-2">{title}</h3>
                <div className="text-sm text-gray-600 line-clamp-3">{children ? children : description}</div>
            </motion.article>
        </div>
    )

    if (href) return <Link href={href}>{content}</Link>
    return content
}