// import { useMutation } from "@tanstack/react-query"

import { createAutomations } from "@/actions/automations"
import { useMutationData } from "../mutation-data"

export const useCreateAutomation = (id?: string) => {
    const { isPending, mutate } = useMutationData(
      ['create-automation'],
      () => createAutomations(id),
      'user-automations'
    )

    return { isPending, mutate }
}
