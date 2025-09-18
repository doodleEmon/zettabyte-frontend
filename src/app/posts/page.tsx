'use client'

import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../../components/Card'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingSpinner from '../../components/LoadingSpinner'
import { Post } from '@/utils/types'

export default function PostsPage() {
  const [simulateError, setSimulateError] = useState(false)

  const endpoint = simulateError
    ? 'https://jsonplaceholder.typicode.com/invalid-posts'
    : 'https://jsonplaceholder.typicode.com/posts'

const { data: posts, loading, error, refetch } = useFetch<Post[]>(endpoint)

  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <main className="px-6 pt-6 pb-2">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Posts</h2>
        <div className="space-x-2">
          <button
            onClick={() => setSimulateError((s) => !s)}
            className="px-3 py-1 bg-rose-500 text-white rounded cursor-pointer"
          >
            {simulateError ? 'Use valid endpoint' : 'Simulate Error'}
          </button>
          <button
            onClick={() => refetch()}
            className="px-3 py-1 bg-slate-200 rounded cursor-pointer"
          >
            Refetch
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center space-x-2 w-full h-[75vh]">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="mt-6 text-red-600">
          Failed to load posts. Try again.
        </div>
      )}

      <AnimatePresence>
        {!loading && !error && posts && (
          <motion.div
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[77vh] overflow-y-scroll"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {posts.map((post) => (
              <motion.div key={post.id} variants={item}>
                <Card
                  title={post.title}
                  description={post.body}
                  href={`/posts/${post.id}`}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
