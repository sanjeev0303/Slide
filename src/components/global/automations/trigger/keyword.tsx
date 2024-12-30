import { useKeywords } from '@/hooks/create-automaion'
import React from 'react'

type KeywordsProps = {
    id: string
}

const Keywords = ({ id }: KeywordsProps) => {

    const {
        keyword,
        onValueChange,
        onKeyPress,
        deleteMutation,
    } = useKeywords(id)

  return (
    <div>Keywords</div>
  )
}

export default Keywords
