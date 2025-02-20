import React from 'react'
import { Egg, Origami, Package } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='min-h-[calc(100vh-30px)] w-64 bg-slate-800 text-slate-300 rounded-2xl p-4 '>
    <span className='flex gap-2 items-center text-l py-2 ' > 
      <Origami className='w-8 h-8'/> <span className='text-[20px] font-bold '>EL Choukr ltd.</span></span>
  </div>
  )
}

export default Sidebar