import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automation'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}


// WIP: Set some metadata

const Page = ({params}: Props) => {

    //WIP: prefetch user automation data

  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationsBreadCrumb id={params.id} />
    </div>
  )
}

export default Page
