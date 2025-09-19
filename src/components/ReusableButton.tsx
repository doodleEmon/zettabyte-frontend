import React from 'react'
import { motion } from 'framer-motion';

interface ButtonProps {
    title: string
}

export default function ReusableButton({ title }: ButtonProps) {
    return (
        <motion.button
            className='rounded bg-gradient-to-r from-amber-500 to-sky-500 p-[2px] flex items-center justify-center cursor-pointer group'>
            <div className='bg-white px-5 py-2 rounded group-hover:bg-gradient-to-r from-amber-500 to-sky-500 group-hover:text-white font-semibold transition-all duration-100 ease-in-out'>
                <span>{title}</span>
            </div>
        </motion.button>
    )
}
