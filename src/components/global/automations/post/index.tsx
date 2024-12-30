import { useAutomationPosts } from '@/hooks/create-automaion'
import { useQueryAutomationPosts } from '@/hooks/user-queries'
import React from 'react'

type Props = {
    id: string
}

const PostButton = ({ id }: Props) => {

    const { data } = useQueryAutomationPosts()
    const { posts, onSelectPost, mutate, isPending } = useAutomationPosts(id)

  return (
    <></>
  )
}

export default PostButton
