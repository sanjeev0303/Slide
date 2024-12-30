"use server";

import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
    addKeyword,
    addListener,
  addPost,
  addTrigger,
  createAutomation,
  findAutomation,
  getAutomations,
  removeKeyword,
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

        if (!automationId || !Array.isArray(trigger) || trigger.length === 0) {
            return { status: 400, data: 'Invalid input parameters' };
          }

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

  export const deleteKeyword = async (id: string) => {
    await onCurrentUser()
    try {
        const deleted = await removeKeyword(id)

        if (deleted) return { status: 200, data: 'Keyword deleted', res: deleted };

        return { status: 404, data: 'Keyword not found'}
    } catch (error) {
        return { status: 500, data: 'Oops! something went wrong' }
    }
  }


  export const getProfilePosts = async () => {
    const user = await onCurrentUser()
    try {
      const profile = await findUser(user.id)
      const posts = await fetch(
        `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
      )
      const parsed = await posts.json()
      if (parsed) return { status: 200, data: parsed }
      console.log('🔴 Error in getting posts')
      return { status: 404 }
    } catch (error) {
      console.log('🔴 server side Error in getting posts ', error)
      return { status: 500 }
    }
  }


  export const savePosts = async (
    autmationId: string,
    posts: {
      postid: string
      caption?: string
      media: string
      mediaType: 'IMAGE' | 'VIDEO' | 'CAROSEL_ALBUM'
    }[]
  ) => {
    await onCurrentUser()
    try {
      const create = await addPost(autmationId, posts)

      if (create) return { status: 200, data: 'Posts attached' }

      return { status: 404, data: 'Automation not found' }
    } catch (error) {
      return { status: 500, data: 'Oops! something went wrong' }
    }
  }

  export const activateAutomation = async (id: string, state: boolean) => {
    await onCurrentUser()
    try {
      const update = await updateAutomation(id, { active: state })
      if (update)
        return {
          status: 200,
          data: `Automation ${state ? 'activated' : 'disabled'}`,
        }
      return { status: 404, data: 'Automation not found' }
    } catch (error) {
      return { status: 500, data: 'Oops! something went wrong' }
    }
  }
