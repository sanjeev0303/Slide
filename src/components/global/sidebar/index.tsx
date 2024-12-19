"use client";

import { usePath } from "@/hooks/user-nav";
import { LogoSmall } from "@/svgs/logo-small";
import React from "react";
import Items from "./items";
import { Separator } from "@/components/ui/separator";
import { HelpDuoToneWhite } from "@/icons";
import ClerkAuthState from "../clerk-auth-state";
import { UserButton } from "@clerk/nextjs";

type SidebarProps = {
  slug: string;
};

const Sidebar = ({ slug }: SidebarProps) => {
  const { page } = usePath();

  return (
    <div className="w-[250px] border-[1px] radial fixed left-0 lg:inline-block border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-[#0e0e0e]bg-opacity-90 bg-clip-padding backdrop-filter backdrop--blur__safaribackdrop-blur-3xl">
        <div className="flex gap-x-2 items-center p-5 justify-center">
          <LogoSmall />
        </div>

        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-3">
            <Separator
            orientation="horizontal"
            className="bg-[#333336]"
            />
        </div>
        <div className="px-3 flex gap-x-3">
            {/* <ClerkAuthState /> */}
            <UserButton />
        <p className="text-[#9B9CA0]">Profile</p>
        </div>
        <div className="px-3 flex gap-x-3">
            <HelpDuoToneWhite />
            <p className="text-[#9B9CA0]">Help</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
