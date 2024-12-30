import { useQueryAutomationPosts } from '@/hooks/user-queries'
import React from 'react'

type Props = {
    id: string
}

const PostButton = ({ id }: Props) => {

    const {} = useQueryAutomationPosts()

  return (
    <></>
  )
}

export default PostButton
