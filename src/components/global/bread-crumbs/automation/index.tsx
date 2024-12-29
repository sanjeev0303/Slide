"use client"

import { PencilDuoToneBlack } from "@/icons";
import { ChevronRight, PencilIcon } from "lucide-react";
import React from "react";
import ActivateAutomationButton from "../../activate-automation-button";
import { useQueryAutomation } from "@/hooks/user-queries";

type AutomationsBreadCrumbProps = {
  id: string;
};

const AutomationsBreadCrumb = ({ id }: AutomationsBreadCrumbProps) => {
  // WIP: get the Automation data
  const { data } = useQueryAutomation(id)

  const {  } = useEditAutomation(id)

  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight className="flex-shrink-0" color="#9B9CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          {/* WIP: Show the editing data */}
          <p className="text-[#9B9CA0] truncate">
            This is the automation title
          </p>
          <span
            //   onClick={enableEdit}
            className="cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4"
          >
            <PencilIcon size={14} />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="text-text-secondary/60 text-sm truncate min-w-0">
          All state are automatically saved
        </p>
        <div className="flex gap-x-5 flex-shrink-0">
          <p className="text-text-secondary text-sm truncate min-w-0">
            Change Saved
          </p>
          {/* <p className="text-text-secondary text-sm truncate min-w-0">
            Undo | Redo
          </p> */}
        </div>
      </div>
      <ActivateAutomationButton />
    </div>
  );
};

export default AutomationsBreadCrumb;
