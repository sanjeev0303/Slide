"use clietn"

import { useListener } from '@/hooks/create-automaion'
import React from 'react'
import TriggerButton from '../tirgger-button'
import { AUTOMATION_LISTENERS } from '@/constants/automation'
import SubscriptionPlan from '../../subscription-plan'

type ThenActionProps = {
    id: string
}

const ThenAction = ({ id }: ThenActionProps) => {

    const {
        onSetListener,
        register,
        onFormSubmit,
        listener,
        isPending
     } = useListener(id)

  return (
    <TriggerButton label="Then" >
        <div className='flex flex-col gap-y-2'>
            { AUTOMATION_LISTENERS.map((listener) => listener.type === 'SMARTAI' ? (
                <SubscriptionPlan
                key={listener.type}
                type='PRO'
                />
            ) : '' ) }
        </div>
    </TriggerButton>
  )
}

export default ThenAction
