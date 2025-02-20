import { Bell, ChevronDown, Grip, History, Plus, Search, Settings, Users2 } from 'lucide-react'
import React from 'react'
import InputSearch from './InputSearch'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=' flex h-12 w-full  text-slate-800 justify-between '>
{/* right side header */}
        <div className='flex items-center gap-3'>
            <History />
           <InputSearch />
        </div>
{/* left side   */}
       <div className='flex items-center gap-3'>
        <div className="border-r border-gray-400 pr-2 bg">
            <button className='bg-blue-500 text-white rounded-lg p-2'><Plus className='w-4 h-4'/> </button>
        </div>
        <div className="border-r border-gray-400 pr-2 bg">
            <button className=' rounded-lg p-2'><Users2 className='w-6 h-6'/> </button>
            <button className=' rounded-lg p-2'><Bell className='w-6 h-6'/> </button>
            <button className=' rounded-lg p-2'><Settings className='w-6 h-6'/> </button>
        </div>

        <div className="flex gap-6">
           <button className='flex items-center gap-2'>El choukr 1 <ChevronDown className='w-4 h-4 mt-1' /> </button>
           <button><Image src="/profile.png" alt='user profile image' width={96} height={96} className="w-8 h-8 rounded-full" /></button>
           <button><Grip className='w-6 h-6'/> </button>
        </div>
        </div>
    </div>
  )
}

export default Header