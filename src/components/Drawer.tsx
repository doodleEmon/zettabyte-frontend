"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import ReusableButton from "./ReusableButton";

type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Drawer({ isOpen, onClose }: DrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed top-0 left-0 h-full w-64 md:w-80 bg-white shadow-lg z-50 p-4"
                        initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        exit={{ x: -300 }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Zetta Inc.</h2>
                            <button onClick={onClose}>
                                <IoClose size={24} />
                            </button>
                        </div>
                        <hr className="my-3 text-slate-400" />

                        <ul className="space-y-4">
                            <li><Link href="/" onClick={onClose} className="hover:text-blue-600 font-semibold">Dashboard</Link></li>
                            <li><Link href="/posts" onClick={onClose} className="hover:text-blue-600 font-semibold">Posts</Link></li>
                            <li><Link href="/users" onClick={onClose} className="hover:text-blue-600 font-semibold">Users</Link></li>
                            <li onClick={onClose}><ReusableButton title="Logout" /></li>
                        </ul>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
