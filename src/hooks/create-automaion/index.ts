// import { useMutation } from "@tanstack/react-query"

import { createAutomaions } from "@/actions/automations"
import { useMutationData } from "../mutation-data"

export const useCreateAutomation = () => {
    const {
        mutate,
        isPending
    } = useMutationData(
        ['create-mutation'],
        () => createAutomaions(),
        'user-automations',
    )

    return {mutate, isPending}
}
