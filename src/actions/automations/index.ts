"use server";

import { onCurrentUser } from "../user";
import {
    addKeyword,
    addListener,
  addTrigger,
  createAutomation,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: "Automation created", res: create };

    return { status: 404, data: "Oops! something went wrong" };
  } catch (error) {
    return { status: 500, data: "Internal server error" };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAutomations(user.id);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 404, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);

    if (automation) {
      return { status: 200, data: automation };
    }

    return { status: 404, data: "Automation not found" };
  } catch (error) {
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);

    if (update) {
      return { status: 200, data: "Automation successfully updated" };
    }

    return { status: 404, data: "Oops! could not find automation" };
  } catch (error) {
    return { status: 500, data: "Oops! something went wrong" };
  }
};


export const saveListener = async (
    autmationId: string,
    listener: 'SMARTAI' | 'MESSAGE',
    prompt: string,
    reply?: string
  ) => {
    await onCurrentUser()
    try {
      await addListener(autmationId, listener, prompt, reply)
      return { status: 200, data: 'Listener created' }

    } catch (error) {
      return { status: 500, data: 'Oops! something went wrong' }
    }
  }


  export const saveTrigger = async (automationId: string, trigger: string[]) => {
    await onCurrentUser()
    try {

        const create = await addTrigger(automationId, trigger)
        if (create) return { status: 200, data: 'Trigger saved', res: create };

        return { status: 404, data: 'Cannot save trigger' };

    } catch (error) {
        return { status: 500, data: 'Oops! something went wrong' }
    }
  }


  export const saveKeyword = async (automationId: string, keyword: string) => {
    await onCurrentUser()
    try {
        const create = await addKeyword(automationId, keyword)

        if (create) return { status: 200, data: 'Keyword added successfully', res: create };

        return { status: 404, data: 'Cannot add keyword' };
    } catch (error) {
        return { status: 500, data: 'Oops! something went wrong' }
    }
  }
