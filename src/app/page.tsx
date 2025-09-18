'use client'

import Card from '@/components/Card';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="p-6">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold">Welcome to <span className="bg-gradient-to-r bg-clip-text text-transparent from-amber-500 to-sky-500">Zettabyte Dashboard</span></h1>
      </motion.div>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card
          description={""}
          href={""}
          title="Active Users">
          <div className="text-2xl font-bold">1,234</div>
        </Card>
        <Card
          description={""}
          href={""}
          title="New Signups">
          <div className="text-2xl font-bold">56</div>
        </Card>
        <Card
          description={""}
          href={""}
          title="Server Load">
          <motion.div
            className="h-6 rounded bg-slate-100 mt-2 overflow-hidden"
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ duration: 1.2 }}
          >
            <div className="h-full w-full bg-gradient-to-r from-green-400 to-green-600" />
          </motion.div>
        </Card>
      </section>
    </div>
  );
}
