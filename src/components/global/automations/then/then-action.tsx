"use clietn"

import { useListener } from '@/hooks/create-automaion'
import React from 'react'
import TriggerButton from '../tirgger-button'

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
    <TriggerButton label="THEN" >child</TriggerButton>
  )
}

export default ThenAction
