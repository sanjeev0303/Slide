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
    </div>
  )
}

export default SlugLayout
