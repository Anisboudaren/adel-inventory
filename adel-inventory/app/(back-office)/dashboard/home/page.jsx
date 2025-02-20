import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' '>
        <div>
           
            <h2 className='text-3xl'>maine page there you go  </h2>
        </div>
        <Link href="/dashboard/home/dashboard"> the dashbaord </Link>
    </div>
  )
}

export default page