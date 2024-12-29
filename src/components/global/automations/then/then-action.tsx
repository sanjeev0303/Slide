import { useListener } from '@/hooks/create-automaion'
import React from 'react'

type ThenActionProps = {
    id: string
}

const ThenAction = ({ id }: ThenActionProps) => {

    const {  } = useListener(id)

  return (
    <div>ThenAction</div>
  )
}

export default ThenAction
