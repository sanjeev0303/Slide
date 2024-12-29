import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automation";
import { Warning } from "@/icons";
import React from "react";
import Trigger from "@/components/global/automations/trigger";

type Props = {
  params: {
    id: string;
  };
};

// WIP: Set some metadata
export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}) {
    const info = await getAutomationInfo(params.id)
}

const Page = ({ params }: Props) => {
  //WIP: prefetch user automation data

  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={params.id} />
      <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
        <div className="flex gap-x-2">
          <Warning />
          When...
        </div>
        <Trigger id={params.id} />
      </div>
    </div>
  );
};

export default Page;
