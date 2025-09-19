"use client"

import React, { useState } from 'react'
import ReusableButton from '../ReusableButton'

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    return (
        <div className='bg-slate-200'>
            <div className='flex items-center justify-between w-full container mx-auto p-3'>
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Zetta Inc.</h3>
                </div>
                <div className='flex items-center gap-x-2'>
                    {
                        isAuthenticated ? <ReusableButton title='Logout' /> : <ReusableButton title='Login' />
                    }
                </div>
            </div>
        </div>
    )
}
