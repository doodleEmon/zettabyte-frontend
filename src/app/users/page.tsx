'use client'

import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import LoadingSpinner from '../../components/LoadingSpinner'
import Modal from '@/components/Modal'
import Link from 'next/link'

export default function Users() {
  const endpoint = `https://jsonplaceholder.typicode.com/users`;
  const { data: users, loading, error } = useFetch<any[]>(endpoint)

  const [selectedUser, setSelectedUser] = useState<any | null>(null)

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold"><span className='bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500'>Users</span></h2>

      {loading && (
        <div className="flex items-center space-x-2 w-full">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="text-red-600 mt-4">
          Failed to load users. Please try again.
        </div>
      )}

      {!loading && !error && users && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-slate-300">
            <thead className="bg-slate-100">
              <tr>
                <th className="border border-slate-300 px-4 py-2 text-left">
                  Name
                </th>
                <th className="border border-slate-300 px-4 py-2 text-left">
                  Email
                </th>
                <th className="border border-slate-300 px-4 py-2 text-left">
                  Company
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="cursor-pointer hover:bg-slate-50"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="border border-slate-300 px-4 py-2">
                    {user.name}
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
              {selectedUser.company.name}
            </p>
            <p>
              <span className="font-medium">Address:</span>{' '}
              {selectedUser.address.street}, {selectedUser.address.city}
            </p>
          </div>
        )}
      </Modal>
    </main>
  )
}
