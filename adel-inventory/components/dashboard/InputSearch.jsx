import { Search } from 'lucide-react'
import React from 'react'

const InputSearch = () => {
  return (
    <form className="">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-800 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <Search className='text-slate-800 font-light' />
        </div>
        <input type="search" id="default-search" className="block w-full p-2 px-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="chercher par contact..." required />
        </div>
        </form>
  )
}

export default InputSearch