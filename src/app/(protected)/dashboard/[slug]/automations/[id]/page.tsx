"use client";

import AutomationsBreadCrumb from "@/components/global/bread-crumbs/automation";
import { Warning } from "@/icons";
import React from "react";
import Trigger from "@/components/global/automations/trigger";
import { getAutomationInfo } from "@/actions/automations";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { PrefetchUserAutomation } from "@/react-query/prefetch";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const info = await getAutomationInfo(params.id);
  if (typeof info.data !== "string" && info.data !== null) {
    return info.data?.name;
  } else {
    console.log("Data is either a string or null:", info.data);
  }
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient();
  await PrefetchUserAutomation(query, params.id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
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
    </HydrationBoundary>
  );
};

export default Page;
