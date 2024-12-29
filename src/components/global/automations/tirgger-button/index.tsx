import React from 'react'
import PopOver from '../../pop-over'

type TriggerButtonProps = {
    children: React.ReactNode
    label: string
}

const TriggerButton = ({
    label,
    children
}: TriggerButtonProps) => {
  return (
    <PopOver />
  )
}

export default TriggerButton
