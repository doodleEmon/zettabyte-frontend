"use client"

import React, { useState } from 'react'
import ReusableButton from '@/components/ReusableButton'
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import Drawer from '@/components/Drawer';

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className='bg-slate-200 px-2'>
            <div className='flex items-center justify-between w-full container mx-auto p-3'>
                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Zetta Inc.</h3>
                </div>
                <div className='flex items-center gap-x-2'>
                    {
                        isAuthenticated ? <div>
                            <div className='hidden lg:flex items-center gap-x-3'>
                                <div className="size-10 rounded-full overflow-hidden border">
                                    <Image
                                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                                        alt="Profile picture"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <p>Welcome, Mr. John Doe</p>
                                <ReusableButton title='Logout' />
                            </div>
                            <div className='flex items-center gap-x-3 lg:hidden'>
                                <div className="size-[30px] rounded-full overflow-hidden border">
                                    <Image
                                        src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                                        alt="Profile picture"
                                        width={30}
                                        height={30}
                                        className="object-contain"
                                    />
                                </div>
                                <p className='hidden md:block'>Welcome, Mr. John Doe</p>
                                <button onClick={() => setIsDrawerOpen(true)}>
                                    <GiHamburgerMenu size={24} />
                                </button>
                            </div>
                        </div> : <ReusableButton title='Login' />
                    }
                </div>
            </div>
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </div>
    )
}
