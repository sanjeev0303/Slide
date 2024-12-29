// import { useMutation } from "@tanstack/react-query"

import { createAutomations, updateAutomationName } from "@/actions/automations";
import { useMutationData } from "../mutation-data";
import { useRef, useState } from "react";

export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );

  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data:{name: string}) => updateAutomationName(),
    "automation-info",
    disableEdit
  );
};
