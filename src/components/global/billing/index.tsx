import React from 'react'
import PaymentCard from './payment-card'

type Props = {}

const Billing = (props: Props) => {

    // WIP: Fetch billing information for the customers

  return (
    <div className='flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12'>
        <PaymentCard
        current={'FREE'}
        label={'FREE'}
        />
        <PaymentCard
        current={'PRO'}
        label={'PRO'}
        />
    </div>
  )
}

export default Billing
