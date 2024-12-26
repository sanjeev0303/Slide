"use server";

import { onCurrentUser } from "../user";
import { CreateAutomation, getAutomations } from "./queries";

export const createAutomaions = async () => {
  const user = await onCurrentUser();

  try {
    const create = await CreateAutomation(user.id);

    if (create)
      return {
        status: 200,
        data: "Automation created",
      };

    return {
      status: 404,
      data: "Oop! something went wrong",
    };
  } catch (error) {
    return {
      status: 500,
      data: "Internal server error",
    };
  }
};


export const getAllAutomaions = async () => {
    const user = await onCurrentUser()

    try {
        const automations = await getAutomations(user.id)
        if(automations) return { status: 200, data: automations.automations }

        return {status: 404, data: []}
    } catch (error) {
        return {status: 500, data: [] }
    }
}
