import Header from '@/components/dashboard/Header'
import Sidebar from '@/components/dashboard/Sidebar'
import React, { Children } from 'react'
export default function Layout({ children }) {
  return (
    <div className='bg-gray-100 text-gray-950 flex p-4 z-0 '>
{/* side bar */}
       <Sidebar />
{/* main + header */}
        <main className='w-full min-h-[calc(100vh-30px)] h-full  text-slate-900 mx-4 rounded-2xl p-4'>
                <Header />
                <div className='flex flex-col justify-center items-center h-full'>
                { children }
                </div>
                
        </main>
        
      </div>
  )
}
