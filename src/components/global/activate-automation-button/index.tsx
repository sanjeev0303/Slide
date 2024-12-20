import { Button } from "@/components/ui/button";
import React from "react";
import Loader from "../loader";
import { ActiveAutomation } from "@/icons/active-automation";

type Props = {};

const ActivateAutomationButton = (props: Props) => {
  // WIP: Setup optimistic ui
  // WIP: get some information data

  return (
    <Button className="lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70] mx-2 ml-4">

        {/*  WIP: set the loading state */}
        <Loader state={false} className="">
            <ActiveAutomation />
            <p className="lg:inline hidden">
                {/* {data?.data?.active ? 'Disable' : 'Activate'} */}
                Activate
            </p>
        </Loader>
    </Button>
  );
};

export default ActivateAutomationButton;
