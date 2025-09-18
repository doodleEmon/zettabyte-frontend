'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: Props) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-black/50"
                        onClick={onClose}
                        aria-hidden
                    />

                    <div className='bg-gradient-to-r from-amber-200 to-sky-200 rounded-2xl p-[2px]'>
                        <motion.div
                            initial={{ y: 20, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 10, opacity: 0, scale: 0.98 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="relative z-10 bg-white rounded-2xl shadow-lg p-6 w-md"
                        >
                            <div className="absolute top-3 right-3">
                                <button
                                    onClick={onClose}
                                    className="rounded-full text-gray-500 hover:text-gray-800 cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                            {children}
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
