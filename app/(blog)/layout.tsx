import React from 'react'
import BlogNavbar from '@/components/BlogNavbar'

export default function layout({children}: { children: React.ReactNode }) {
  return (
    <main>
        <BlogNavbar />
        {children}
    </main>
  )
}
