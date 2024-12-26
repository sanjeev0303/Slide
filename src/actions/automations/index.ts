"use server"

import { onCurrentUser } from "../user"
import { CreateAutomation } from "./queries"


export const getAllAutomaions = async() => {
    const user = await onCurrentUser()

    try {

        const create = await CreateAutomation(user.id)

    } catch (error) {

    }
}
