import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'

type SlugLayoutProps = {
    children: React.ReactNode
    params: { slug: string }
}

const SlugLayout = ({ children, params }: SlugLayoutProps) => {

   //Query
   // WIP: Query client fetch data

  return (
    <div className='p-3'>
        <Sidebar slug={params.slug} />
        <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
            <Navbar slug={params.slug} />
        </div>
    </div>
  )
}

export default SlugLayout