import React from 'react'
import Navbar from '@/components/Navbar'


export default function layout({children}: { children: React.ReactNode }) {
  return (
    <main className=''>
        <Navbar />
        {children}
    </main>
  )
}