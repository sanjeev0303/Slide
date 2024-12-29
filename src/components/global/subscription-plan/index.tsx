import { useQueryUser } from '@/hooks/user-queries'
import React from 'react'

type SubscriptionPlanProps = {
    children: React.ReactNode
    type: 'FREE' | 'PRO'
}

const SubscriptionPlan = ({ children, type }: SubscriptionPlanProps) => {

    const {} = useQueryUser()

    // WIP: Return subscription of user

  return (
   children
  )
}

export default SubscriptionPlan
