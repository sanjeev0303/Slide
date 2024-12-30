// import { useMutation } from "@tanstack/react-query"
import { z } from "zod";
import {
  createAutomations,
  deleteKeyword,
  saveKeyword,
  saveListener,
  saveTrigger,
  updateAutomationName,
} from "@/actions/automations";
import { useMutationData } from "../mutation-data";
import React, { useEffect, useRef, useState } from "react";
import useZodForm from "../use-zod-form";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slices/automation";

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
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  );

  useEffect(() => {
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node | null)
      ) {
        if (inputRef.current.value !== "") {
          mutate({ name: inputRef.current.value });
        } else {
          disableEdit();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef,
    isPending,
  };
};

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null);

  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  });

  const { isPending, mutate } = useMutationData(
    ["create-listener"],
    (data: { prompt: string; reply: string }) =>
      saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  );

  const { register, errors, onFormSubmit, watch, reset } = useZodForm(
    promptSchema,
    mutate
  );

  const onSetListener = (type: "SMARTAI" | "MESSAGE") => setListener(type);

  return {
    onSetListener,
    register,
    onFormSubmit,
    listener,
    isPending,
  };
};

export const useTriggers = (id: string) => {
  const types = useAppSelector(
    (state) => state.AutomationReducer.trigger?.types
  );

  const dispatch: AppDispatch = useDispatch();

  const onSetTrigger = (type: "COMMENT" | "DM") =>
    dispatch(TRIGGER({ trigger: { type } }));

  const { isPending, mutate } = useMutationData(['add-trigger'],
    (data: { type: string[] }) => saveTrigger(id, data.type),
    'automation-info'
  )

  const onSaveTrigger = ()=> mutate({ types })

  return {
    types,
    onSetTrigger,
    onSaveTrigger,
    isPending,
  }
};



export const useKeywords = (id: string) => {
const [keyword, setKeyword] = useState("")
const onValueChange = (e:React.ChangeEvent<HTMLInputElement>
) => setKeyword(e.target.value)

const {mutate} = useMutationData(['add-keyword'],
    (data: {keyword: string}) => saveKeyword(id, data.keyword),
    'automation-info',
    () => setKeyword("")
)

const onKeyPress = (e:React.KeyboardEvent<HTMLInputElement>
) => {
    if(e.key === 'Enter') {
        mutate({keyword})
        setKeyword("")
    }
}

const { mutate: deleteMutation } = useMutationData(
    ['delete-keyword'],
    (data: {id: string}) => deleteKeyword(data.id),
    'automation-info'
)

return {
    keyword,
    onValueChange,
    onKeyPress,
    deleteMutation,
}

}
