'use client'

import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import LoadingSpinner from '../../components/LoadingSpinner'
import Modal from '@/components/Modal'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { User } from '@/utils/types'

export default function Users() {
  const endpoint = `https://jsonplaceholder.typicode.com/users`;
  const { data: users, loading, error } = useFetch<User[]>(endpoint);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <main className="p-6">
      <h2 className="text-2xl lg:text-3xl font-bold"><span className='bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500'>Users</span></h2>

      {loading && (
        <div className="flex items-center justify-center space-x-2 w-full h-[75vh]">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="text-red-600 mt-4">
          Failed to load users. Please try again.
        </div>
      )}

      {!loading && !error && users && (
        <div className="w-full overflow-x-auto mt-4 h-[75vh] overflow-y-scroll">
          <AnimatePresence mode="wait">
            {users.length === 0 ? (
              <motion.div
                key="no-data"
                className="min-w-full text-center text-lg font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                No data found!
              </motion.div>
            ) : (
              <motion.table
                key="table"
                className="min-w-full border-collapse"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              >
                <thead>
                  <motion.tr
                    className="bg-gradient-to-r from-amber-200 to-sky-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {['Name', 'Email', 'Phone', 'Company'].map((header, index) => (
                      <motion.th
                        key={header}
                        className="text-start px-5 py-4 font-semibold text-gray-600 uppercase text-sm whitespace-nowrap"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.2 + (index * 0.1),
                          duration: 0.3
                        }}
                      >
                        {header}
                      </motion.th>
                    ))}
                  </motion.tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      onClick={() => setSelectedUser(user)}
                      className={`hover:bg-gradient-to-r hover:from-amber-200 hover:to-sky-200 group cursor-pointer transition-all duration-200 ${index !== users.length - 1
                        ? "border-b border-b-gray-200"
                        : ""
                        }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + (index * 0.1),
                        duration: 0.2,
                        ease: [0.2, 0.0, 0.2, 1]
                      }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <motion.td
                        className="text-start px-5 py-3.5 font-normal text-[14.5px] text-gray-800 group-hover:text-blue-500 whitespace-nowrap"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.15 }}
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + (index * 0.1) }}
                        >
                          {user.name}
                        </motion.p>
                        <motion.p
                          className="text-gray-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + (index * 0.1) }}
                        >
                          @{user.username}
                        </motion.p>
                      </motion.td>
                      <motion.td
                        className="text-start px-5 py-3.5 font-normal text-[14.5px] text-gray-800 group-hover:text-blue-500 whitespace-nowrap"
                      >
                        {user.email}
                      </motion.td>
                      <motion.td
                        className="text-start px-5 py-3.5 font-normal text-[14.5px] text-gray-800 group-hover:text-blue-500 whitespace-nowrap"
                      >
                        {user.phone}
                      </motion.td>
                      <motion.td
                        className="text-start px-5 py-3.5 font-normal text-[14.5px] text-gray-800 group-hover:text-blue-500 whitespace-nowrap"
                      >
                        {user?.company?.name}
                      </motion.td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            )}
          </AnimatePresence>
        </div>
      )}

      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && (
          <div>
            <h3 className="text-lg font-semibold mb-4">{selectedUser.name}</h3>
            <p>
              <span className="font-medium">Email:</span> {selectedUser.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {selectedUser.phone}
            </p>
            <p>
              <span className="font-medium">Website:</span> <Link
                href={`http://${selectedUser?.website}`}
                className='font-medium text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-200'
                target='_blank'
              >
                {selectedUser?.website}
              </Link>
            </p>
            <p>
              <span className="font-medium">Company:</span>{' '}
              {selectedUser?.company?.name}
            </p>
            <p>
              <span className="font-medium">Address:</span>{' '}
              {selectedUser?.address?.street}, {selectedUser?.address?.city}
            </p>
          </div>
        )}
      </Modal>
    </main>
  )
}
