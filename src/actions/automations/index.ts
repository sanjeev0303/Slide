"use server";

import { onCurrentUser } from "../user";
import { CreateAutomation } from "./queries";

export const getAllAutomaions = async () => {
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
      data: "Internal server error"
    };
  }
};
