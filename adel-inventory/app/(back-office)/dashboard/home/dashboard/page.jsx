import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className=' '> 
            <h2 className='text-3xl'>yes this is the Dashboard</h2> 
            <Link href="/dashboard/home">Go back ! </Link>  
    </div>
  )
}

export default page