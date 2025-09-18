'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import React from 'react'

type CardProps = {
    title: string
    children?: React.ReactNode
    href?: string
}

export default function Card({ title, children, href }: CardProps) {
    const content = (
        <motion.article
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white rounded-2xl shadow-sm p-4 border"
        >
            <h3 className="font-semibold mb-2">{title}</h3>
            <div className="text-sm text-gray-600">{children}</div>
        </motion.article>
    )

    if (href) return <Link href={href}>{content}</Link>
    return content
}