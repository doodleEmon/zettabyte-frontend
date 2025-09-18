"use client"

import useFetch from '@/hooks/useFetch'
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi';
import { motion } from 'framer-motion'
import LoadingSpinner from '@/components/LoadingSpinner';

export default function SinglePost() {
  const { id } = useParams();
  const endpoint = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const { data: post, loading } = useFetch<any>(endpoint);
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-auto p-6 space-y-4"
    >
      <motion.button
        onClick={() => router.back()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='flex items-center gap-x-2 bg-slate-200 hover:bg-slate-300 px-3 py-2 rounded-lg cursor-pointer transition-colors'
      >
        <BiChevronLeft size={18} /> Back
      </motion.button>

      <span className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Details page</span>

      {loading ? (
        <div className="flex items-center justify-center w-full h-[300px]">
          <LoadingSpinner />
        </div>
      ) : (
        <div className="bg-slate-200 rounded-lg shadow-xl p-6 space-y-3 mt-4">
          <p className="text-sm text-gray-500">ID: {post?.id}</p>
          <p className="text-sm text-gray-500">User ID: {post?.userId}</p>
          <h1 className="text-xl font-semibold capitalize">{post?.title}</h1>
          <p className="text-gray-700 leading-relaxed">{post?.body}</p>
        </div>
      )}
    </motion.div>
  )
}